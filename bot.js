const TelegramBot = require('node-telegram-bot-api');

// 🔐 Paste NEW token here
const token = '8702642923:AAGpr1aQzkzsdI1Ylto9YQ-sQlj1YnUP1po';

const bot = new TelegramBot(token, { polling: true });

// /start command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome! Your bot is working ✅");
});

// Handle messages safely
bot.on('message', (msg) => {
  // Ignore commands like /start
  if (!msg.text || msg.text.startsWith('/')) return;

  const text = msg.text.toLowerCase();

  if (text === "hi" || text === "hello") {
    bot.sendMessage(msg.chat.id, "Hello 👋");
  } else if (text === "how are you") {
    bot.sendMessage(msg.chat.id, "I'm fine 😄");
  } else {
    bot.sendMessage(msg.chat.id, "I didn't understand 🤔");
  }
});