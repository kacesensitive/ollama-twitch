<div align="center">
  <img src="ollama-twitch.png" width="300" height="300">
</div>


# Ollama Twitch Bot

## Overview

This bot is designed to give Twitch streamers the power of the Ollama API for generating human-like responses. Whether you need answers to trivia, general knowledge, or just some interactive fun, this bot aims to provide that functionality seamlessly.

![example](example.png)

## Prerequisites
- [Ollama](https://github.com/jmorganca/ollama)
- [Node.js](https://nodejs.org/)

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/kacesensitive/ollama-twitch.git
    ```

2. Install the dependencies:
    ```
    cd ollama-twitch
    yarn install
    ```

3. Run the bot:
    ```
    yarn start
    ```

## Configuration

1. Create a '.env' file at the root of your project directory (modeled after the .env.example). And fill in your Bot's/Channel's info.
    ```
    USERNAME=twitch_username
    OAUTH=oauth:1234567890
    CHANNEL=tighwin
    OLLAMAURL=127.0.0.1:11434
    CUSTOMMODEL=
    TRIGGER=!llama
    ```

## Usage

After setting up the bot, you can use the following commands in the Twitch channel the bot is active in.
- '!llama your_question_here': Queries Ollama with your question.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

