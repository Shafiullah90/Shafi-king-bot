async function contactCommand(sock, chatId, message) {
  const contactText = `
📞 *Contact Info - Shafi Pathan*

📱 WhatsApp: wa.me/66620925025
📬 Email: shafi@example.com
💬 Telegram: @ShafiOfficial
💻 GitHub: https://github.com/Shafiullah90/Shafi-king-bot

🌟 DM me for collabs, projects, or support!
  `;

  await sock.sendMessage(chatId, { text: contactText }, { quoted: message });
}

module.exports = { contactCommand };
