//COMMAND NAME : cloud

Api.editMessageMedia({
  chat_id: chat.id,
  message_id: request.message.message_id,
  media: {
    type: "photo",
    media: "https://flashcomcloud.alwaysdata.net/download/1760326010_file_89.jpg",
    caption: `☁️ *FlashCom Cloud*\n\n• *All Builds Apks Cloud* - All your builds are stored on FlashCom Cloud on your telegram id. You can access the cloud via telegrm bot and view or manage your builds apks or even upload your own files to get own direct links`,
    parse_mode: "Markdown"
  },
  reply_markup: {
    inline_keyboard: [
      [{ text: "🤖 Open UplynkBot", url: "https://t.me/UplynkBot" }],
      [{ text: "📱 Create APK", callback_data: "create_app" }],
      [{ text: "🔙 Back to Main", callback_data: "/start" }]
    ]
  }
})