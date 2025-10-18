//COMMAND NAME : submit_apk

let apkData = User.get("apk_data")

if (!apkData) {
  Bot.sendMessage("❌ No APK data found. Please start over with /start")
  return
}

let messageId = update.callback_query ? update.callback_query.message.message_id : request.message.message_id

if (update.callback_query) {
  Api.answerCallbackQuery({
    callback_query_id: update.callback_query.id
  })
}

Api.editMessageMedia({
  chat_id: chat.id,
  message_id: messageId,
  media: {
    type: "photo",
    media: "https://flashcomcloud.alwaysdata.net/download/1760333510_file_96.jpg",
    caption: "🔍 <b>Checking verification status...</b>",
    parse_mode: "HTML"
  }
})

let payload = {
  app_name: apkData.app_name,
  package_name: apkData.package_name,
  website_url: apkData.website_url,
  telegram_id: user.id.toString(),
  email: apkData.email,
  return_url: `https://t.me/ApkIfyBot`,
  dev_telegram_id: DEV_TELEGRAM_ID,
  platform: PLATFORM,
  bot_token_telegram: BOT_TOKEN_TELEGRAM,
  bot_id_telegram: BOT_ID_TELEGRAM
}

if (apkData.icon_url) {
  payload.icon_url = apkData.icon_url
}

try {
  let response = await HTTP.post({
    url: API_ENDPOINT,
    body: payload,
    headers: {
      "Content-Type": "application/json"
    },
    timeout: 30000
  })

  if (response.ok && response.data) {
    let data = response.data
    
    if (data.status === "error") {
      if (data.verification_url) {
        Api.editMessageMedia({
          chat_id: chat.id,
          message_id: messageId,
          media: {
            type: "photo",
            media: "https://flashcomcloud.alwaysdata.net/download/1760333768_file_97.jpg",
            caption: `❌ <b>Telegram Verification Required</b>\n\nYour Telegram ID is not verified yet.\n\nPlease click the button below to verify your account, then click <b>Check Again</b> to proceed with APK submission.`,
            parse_mode: "HTML"
          },
          reply_markup: {
            inline_keyboard: [
              [{ text: "🔗 Verify Telegram", url: data.verification_url }],
              [{ text: "✅ Check Again", callback_data: "submit_apk" }],
              [{ text: "🔙 Back to Main", callback_data: "/start" }]
            ]
          }
        })
      } else {
        Api.editMessageMedia({
          chat_id: chat.id,
          message_id: messageId,
          media: {
            type: "photo",
            media: "https://flashcomcloud.alwaysdata.net/download/1760334760_file_99.jpg",
            caption: `❌ <b>Error:</b> ${data.message}\n\nPlease fix the issue and try again.`,
            parse_mode: "HTML"
          },
          reply_markup: {
            inline_keyboard: [
              [{ text: "🔄 Try Again", callback_data: "submit_apk" }],
              [{ text: "🔙 Back to Main", callback_data: "/start" }]
            ]
          }
        })
      }
    } else if (data.status === "queued") {
      User.set("step", "completed")
    
      sleep(1000)
      
Api.editMessageMedia({
  chat_id: chat.id,
  message_id: messageId,
  media: {
    type: "photo",
    media: "https://flashcomcloud.alwaysdata.net/download/1760334246_file_98.jpg",
    caption: `🎉 <b>Build Queued!</b>\n\n<b>ID:</b> <code>${data.build_id}</code>\n<b>App:</b> <code>${data.app_name}</code>\n<b>Status:</b> Queued\n\n<b>Time:</b> 10-20 min ⏱️\n<i>• May take longer</i>\n\n<b>Updates via:</b>\n• This chat\n• Email: <code>${data.email}</code>\n\n<b>When done:</b>\n✅ Download link sent if success\n❌ Error details sent if error\n\n<b>Email tips:</b>\n• Check spam folder\n• Mark as "Not Spam"\n\n<b>Logs to:</b>\n• This chat\n• Your email\n\n<b>No updates?</b>\n• Check My Builds\n• Check @UplynkBot\n• Verify spam folder\n\n<b>⚠️ Important:</b>\n• APKs deleted frequently\n• Download promptly\n• Keep backups`,
    parse_mode: "HTML"
  },
  reply_markup: {
    inline_keyboard: [
      [{ text: "📦 My Builds", callback_data: "my_builds" }],
      [{ text: "📱 Create Another", callback_data: "create_app" }],
      [{ text: "🔙 Back to Main", callback_data: "/start" }]
    ]
  }
})
    } else {
      Api.editMessageMedia({
        chat_id: chat.id,
        message_id: messageId,
        media: {
          type: "photo",
          media: "https://flashcomcloud.alwaysdata.net/download/1760334760_file_99.jpg",
          caption: `❌ <b>Unexpected Response</b>\n\nStatus: ${data.status || 'unknown'}\nMessage: ${data.message || 'No message'}`,
          parse_mode: "HTML"
        },
        reply_markup: {
          inline_keyboard: [
            [{ text: "🔄 Try Again", callback_data: "submit_apk" }],
            [{ text: "🔙 Back to Main", callback_data: "/start" }]
          ]
        }
      })
    }
  } else {
    Api.editMessageMedia({
      chat_id: chat.id,
      message_id: messageId,
      media: {
        type: "photo",
        media: "https://flashcomcloud.alwaysdata.net/download/1760334760_file_99.jpg",
        caption: `❌ <b>HTTP Error:</b> ${response.status || 'Unknown'}`,
        parse_mode: "HTML"
      },
      reply_markup: {
        inline_keyboard: [
          [{ text: "🔄 Try Again", callback_data: "submit_apk" }],
          [{ text: "🔙 Back to Main", callback_data: "/start" }]
        ]
      }
    })
  }
} catch (error) {
  Api.editMessageMedia({
    chat_id: chat.id,
    message_id: messageId,
    media: {
      type: "photo",
      media: "https://flashcomcloud.alwaysdata.net/download/1760334760_file_99.jpg",
      caption: `❌ <b>Network Error:</b> ${error.message}`,
      parse_mode: "HTML"
    },
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔄 Try Again", callback_data: "submit_apk" }],
        [{ text: "🔙 Back to Main", callback_data: "/start" }]
      ]
    }
  })
}