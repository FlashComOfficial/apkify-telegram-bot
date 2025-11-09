//COMMAND NAME : create_app

User.delAll()
User.set("step", "app_name")
User.set("apk_data", {}, "json")
Api.editMessageMedia({
  chat_id: chat.id,
  message_id: request.message.message_id,
  media: {
    type: "photo",
    media: "https://flashcomcloud.onelocal.host/download-file/1760326837_file_90.jpg",
    caption: `📱 *Let's Create Your App\!*\n\nWe'll guide you through the process step by step\.\n\nFirst, enter your *App Name*:\n• This will be displayed under your app icon\n• Keep it short and descriptive\n• Max 50 characters\n\n*Example:* My Awesome App\n\n*By creating you agree to* [terms](https://telegra\.ph/FlashCom\-APK\-Builder\-\-Terms\-of\-Use\-10\-11)`,
    parse_mode: "Markdown"
  },
  reply_markup: {
    inline_keyboard: [
      [{ text: "🔙 Back to Main", callback_data: "/start" }]
    ]
  }
})
