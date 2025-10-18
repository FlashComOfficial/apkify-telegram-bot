//COMMAND NAME : /start

if (User.get("step")) User.del("step")
if (User.get("apk_data")) User.del("apk_data")

if (update.callback_query) {
  Api.editMessageMedia({
    chat_id: chat.id,
    message_id: update.callback_query.message.message_id,
    media: {
      type: "photo",
      media: "https://flashcomcloud.alwaysdata.net/download/1760323182_file_87.jpg",
      caption: `<b>🚀 Welcome to <a href="https://t.me/ApkifyBot">Apkify Bot</a></b>\n\nTransform your website into a professional Android app in minutes!\n\n<b>✨ Key Features:</b>\n• Website to APK converter\n• Custom app name & package\n• Secure HTTPS support\n• Free with daily limits\n• Build history tracking\n\n<b>📱 Compatibility:</b>\n✅ Android 5.0+ (99% devices)\n• SDK 21-35 support\n• Modern optimization\n\n<b>🔐 Security:</b>\n• APK Signed with 25 years validity\n\n<b>⚡ Limits:</b>\n• 3 builds/day per user\n\nChoose an option below to get started 👇`,
      parse_mode: "HTML"
    },
    reply_markup: {
      inline_keyboard: [
        [{ text: "📱 Convert Website to Apk", callback_data: "create_app" }],
        [{ text: "📢 Channel", url: OFFICIAL_CHANNEL }, { text: "🆘 Support", url: ADMIN_SUPPORT_URL }],
        [{ text: "❓ Help", callback_data: "help" }, { text: "☁️ Cloud", callback_data: "cloud" }],
        [{ text: "📦 My Builds", callback_data: "my_builds" }]
      ]
    }
  })
} else {
  Api.sendPhoto({
    chat_id: chat.id,
    photo: "https://flashcomcloud.alwaysdata.net/download/1760323182_file_87.jpg",
    caption: `<b>🚀 Welcome to <a href="https://t.me/ApkifyBot">Apkify Bot</a></b>\n\nTransform your website into a professional Android app in minutes!\n\n<b>✨ Key Features:</b>\n• Website to APK converter\n• Custom app name & package\n• Secure HTTPS support\n• Free with daily limits\n• Build history tracking\n\n<b>📱 Compatibility:</b>\n✅ Android 5.0+ (99% devices)\n• SDK 21-35 support\n• Modern optimization\n\n<b>🔐 Security:</b>\n• APK Signed with 25 years validity\n\n<b>⚡ Limits:</b>\n• 3 builds/day per user\n• Queue system\n\nChoose an option below to get started 👇`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [{ text: "📱 Convert Website to Apk", callback_data: "create_app" }],
        [{ text: "📢 Channel", url: OFFICIAL_CHANNEL }, { text: "🆘 Support", url: ADMIN_SUPPORT_URL }],
        [{ text: "❓ Help", callback_data: "help" }, { text: "☁️ Cloud", callback_data: "cloud" }],
        [{ text: "📦 My Builds", callback_data: "my_builds" }]
      ]
    }
  })
}