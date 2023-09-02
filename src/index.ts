import { config } from 'dotenv';
import { makeOllamaRequest } from './utils/makeRequest';
import * as tmi from 'tmi.js';

config();

const opts = {
    identity: {
        username: process.env.USERNAME || 'ollama_bot',
        password: process.env.OAUTH || 'oauth:1234567890'
    },
    channels: process.env.CHANNEL?.split(',') || ['ollama']
};

const client = new tmi.Client(opts);

const trigger: string = process.env.TRIGGER || '!llama';

let isProcessing = false;

client.connect().catch(console.error);

client.on('message', async (channel, tags, message, self) => {
    if (self || isProcessing) return;

    if (message.toLowerCase().startsWith(trigger)) {
        isProcessing = true;
        client.say(channel, '🦙');

        const query: string = message.replace(trigger, '').trim();
        if (query.length === 0) {
            isProcessing = false;
            return;
        }

        const sendChunks = async (chunk: string) => {
            await client.say(channel, chunk);
        };

        try {
            await makeOllamaRequest(query, sendChunks);
        } catch (err: any) {
            console.error(err);
        } finally {
            isProcessing = false;
        }
    }
});
