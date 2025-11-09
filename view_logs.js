//COMMAND NAME: view_logs
let buildId = params

// Fetch all builds to find the specific one
let response = await HTTP.get({
  url: `${MY_BUILDS_URL}?telegram_id=${user.id}&filter=all`,
  timeout: 15000
})

if (response.ok && response.data && response.data.status === "success") {
  let builds = response.data.results
  let targetBuild = builds.find(build => build.ID == buildId)
  
  if (targetBuild) {
    let logText = `📋 <b>Build Logs</b>\n\n`
    logText += `🆔 <b>Build ID:</b> ${targetBuild.ID}\n`
    logText += `📱 <b>App Name:</b> ${targetBuild.appName || 'N/A'}\n`
    logText += `📦 <b>Package:</b> <code>${targetBuild.packageName || 'N/A'}</code>\n`
    logText += `📅 <b>Created:</b> ${new Date(targetBuild.createdAt).toLocaleString()}\n\n`
    logText += `📝 <b>Log Message:</b>\n<code>${targetBuild.logMessage || 'No logs available'}</code>`

    Api.editMessageMedia({
      chat_id: chat.id,
      message_id: update.callback_query.message.message_id,
      media: {
        type: "photo",
        media: "https://flashcomcloud.onelocal.host/download-file/5796950228_1762565624_file_182.jpg",
        caption: logText,
        parse_mode: "HTML"
      },
      reply_markup: {
        inline_keyboard: [
          [{ text: "🔙 Back to Builds", callback_data: `build_filter all` }],
          [{ text: "🏠 Start Menu", callback_data: "/start" }]
        ]
      }
    })
  } else {
    Api.editMessageMedia({
      chat_id: chat.id,
      message_id: update.callback_query.message.message_id,
      media: {
        type: "photo", 
        media: "https://flashcomcloud.onelocal.host/download-file/5796950228_1762565836_file_183.jpg",
        caption: "❌ Build not found",
        parse_mode: "HTML"
      },
      reply_markup: {
        inline_keyboard: [
          [{ text: "🔙 Back", callback_data: "my_builds" }],
          [{ text: "🏠 Start Menu", callback_data: "/start" }]
        ]
      }
    })
  }
}
