// COMMAND NAME : !

Api.sendPhoto({
  chat_id: chat.id,
  photo: "https://flashcomcloud.alwaysdata.net/download/1760334760_file_99.jpg",
  caption: `<b>❌ An Inetrnal Error Occured</b>\n\n` +
          `<b>What happened:</b>\n` +
          `• There was an error while processing request\n` +
          `• The bot encountered an internal issue\n\n` +
          `<b>What to do:</b>\n` +
          `• Try restarting the process\n` +
          `• Wait a moment and try again\n\n` +
          `<i>If the issue persists, contact admin:</i>`,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [{ text: "🆘 Contact Admin", url: ADMIN_SUPPORT_URL }]
    ]
  }
})