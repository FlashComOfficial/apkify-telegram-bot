//COMMAND NAME : skip_icon


let apkData = User.get("apk_data") || {}
User.set("step", "email")

Api.editMessageMedia({
  chat_id: chat.id,
  message_id: request.message.message_id,
  media: {
    type: "photo",
    media: "https://flashcomcloud.onelocal.host/download-file/1760332104_file_94.jpg",
    caption: `✅ *Icon Skipped*\n\nNow enter your *Email Address*:\n• For build notifications\n• Must be valid format\n\n*Example:* example@email.com`,
    parse_mode: "Markdown"
  },
  reply_markup: {
    inline_keyboard: [
      [{ text: "🔙 Back Home", callback_data: "/start" }]
    ]
  }
})
