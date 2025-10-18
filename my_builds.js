// COMMAND NAME : my_builds

Api.editMessageMedia({
  chat_id: chat.id,
  message_id: request.message.message_id,
  media: {
    type: "photo",
    media: "https://flashcomcloud.alwaysdata.net/download/1760334880_file_100.jpg",
    caption: `📦 *My APK Builds*\n\nSelect a filter to view your build history:`,
    parse_mode: "Markdown"
  },
  reply_markup: {
    inline_keyboard: [
      [{ text: "🔄 Latest Build", callback_data: "build_filter latest" }],
      [{ text: "📅 Today's Builds", callback_data: "build_filter today" }],
      [{ text: "📆 Yesterday's Builds", callback_data: "build_filter yesterday" }],
      [{ text: "📊 All Builds", callback_data: "build_filter all" }],
      [{ text: "🔙 Back to Main", callback_data: "/start" }]
    ]
  }
})