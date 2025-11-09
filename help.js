//COMMAND NAME : help

Api.editMessageMedia({
    chat_id: chat.id,
    message_id: request.message.message_id,
    media: {
        type: "photo",
        media: "https://flashcomcloud.onelocal.host/download-file/1760325617_file_88.jpg",
        caption: `❓ *Help Center*\n\n*How to Create APK:*\n1. Click *Create App*\n2. Enter your app details\n3. Complete verification\n4. Submit and wait for build to finish\n5. Get results via Telegram chat or email\n\n*Requirements:*\n• HTTPS website only\n• Valid package name format (com.example.app)\n• Telegram account verification\n• Unique app name and package name\n\n*Common Issues:*\n• Build fails? Check your website URL and package name\n• Verification issues? Ensure you're using the correct Telegram account\n• Email not received? Check spam folder and verify email address\n\n*Need more help?*\nContact our support team for assistance`,
        parse_mode: "Markdown"
    },
    reply_markup: {
        inline_keyboard: [
            [{ text: "🆘 Support Chat", url: ADMIN_SUPPORT_URL }],
            [{ text: "📖 Terms of Use", url: "https://telegra.ph/FlashCom-APK-Builder--Terms-of-Use-10-11" }],
            [{ text: "🔙 Back to Main", callback_data: "/start" }]
        ]
    }
})
