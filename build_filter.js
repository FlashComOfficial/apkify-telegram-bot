//COMMAND NAME : build_filter

let filter = params
let telegramId = user.id.toString()
let page = 0

if (params && params.includes('page=')) {
    let parts = params.split(' ')
    filter = parts[0]
    let pageMatch = params.match(/page=(\d+)/)
    if (pageMatch) {
        page = parseInt(pageMatch[1]) || 0
    }
}

if (options && options.page !== undefined) {
  page = parseInt(options.page) || 0
}

Api.answerCallbackQuery({
  callback_query_id: update.callback_query.id
})

if (!filter || !['latest', 'today', 'yesterday', 'all'].includes(filter)) {
  Api.editMessageMedia({
    chat_id: chat.id,
    message_id: update.callback_query.message.message_id,
    media: {
      type: "photo",
      media: "https://flashcomcloud.onelocal.host/download-file/1760334760_file_99.jpg",
      caption: "❌ <b>Invalid Filter</b>\n\nPlease select a valid filter option.",
      parse_mode: "HTML"
    },
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔄 Try Again", callback_data: "my_builds" }],
        [{ text: "🔙 Back to Main", callback_data: "/start" }]
      ]
    }
  })
  return
}

Api.editMessageMedia({
  chat_id: chat.id,
  message_id: update.callback_query.message.message_id,
  media: {
    type: "photo",
    media: "https://flashcomcloud.onelocal.host/download-file/1760335312_file_102.jpg",
    caption: `🔍 <b>Fetching your builds...</b>\n\n<b>Filter:</b> <code>${filter.charAt(0).toUpperCase() + filter.slice(1)}</code>`,
    parse_mode: "HTML"
  }
})

try {
  let response = await HTTP.get({
    url: `${MY_BUILDS_URL}?telegram_id=${telegramId}&filter=${filter}`,
    timeout: 15000
  })

  if (response.ok && response.data) {
    let data = response.data
    
    if (data.status === "success" && data.results && data.results.length > 0) {
      let results = data.results
      results.sort((a, b) => a.ID - b.ID)
      
      const buildsPerPage = 3
      const totalPages = Math.ceil(results.length / buildsPerPage)
      const startIndex = page * buildsPerPage
      const endIndex = startIndex + buildsPerPage
      const pageResults = results.slice(startIndex, endIndex)
      
      let successCount = results.filter(build => build.buildStatus === 'success').length
      let failedCount = results.filter(build => build.buildStatus === 'failed').length
      let queuedCount = results.filter(build => build.buildStatus === 'queued').length
      let buildingCount = results.filter(build => build.buildStatus === 'building').length
      
      let resultText = `<b>📦 Your APK Builds</b>\n\n`
      resultText += `<b>Filter:</b> ${filter.charAt(0).toUpperCase() + filter.slice(1)}\n`
      resultText += `<b>Total Builds:</b> ${results.length}\n`
      resultText += `<b>Page:</b> ${page + 1}/${totalPages}\n\n`
      
      resultText += `<b>Status Summary:</b>\n`
      resultText += `✅ <b>Success:</b> ${successCount}\n`
      resultText += `❌ <b>Failed:</b> ${failedCount}\n`
      resultText += `⏳ <b>Queued:</b> ${queuedCount}\n`
      resultText += `🔨 <b>Building:</b> ${buildingCount}\n\n`
      
      resultText += `<b>Current Page Builds:</b>\n`
      resultText += `────────────────────\n`
      
      pageResults.forEach((build, index) => {
        let statusIcon = '⏳'
        if (build.buildStatus === 'success') statusIcon = '✅'
        else if (build.buildStatus === 'failed') statusIcon = '❌'
        else if (build.buildStatus === 'building') statusIcon = '🔨'
        
        let buildNumber = (startIndex + index + 1).toString().padStart(2, '0')
        
        resultText += `\n<b>${buildNumber}. Build ID: ${build.ID}</b>\n`
        resultText += `${statusIcon} <b>App Name:</b> ${build.appName || 'N/A'}\n`
        resultText += `📱 <b>Package Name:</b> <code>${build.packageName || 'N/A'}</code>\n`
        
        if (build.iconUrl) {
          resultText += `🖼 <b>Icon URL:</b> <a href="${build.iconUrl}">Click Here</a>\n`
        }
        
        if (build.websiteUrl) {
          resultText += `🌐 <b>Website URL:</b> <a href="${build.websiteUrl}">Click Here</a>\n`
        }
        
        if (build.createdAt) {
          let date = new Date(build.createdAt).toLocaleDateString()
          let time = new Date(build.createdAt).toLocaleTimeString()
          resultText += `📅 <b>Created At:</b> ${date} ${time}\n`
        }
        
        resultText += `────────────────────`
      })

      let inlineKeyboard = []
      
      let successBuilds = pageResults.filter(build => build.buildStatus === 'success' && build.apkUrl)
      if (successBuilds.length > 0) {
        successBuilds.forEach(build => {
          inlineKeyboard.push([{ 
            text: `📱 Download ${build.appName ? build.appName.substring(0, 12) + (build.appName.length > 12 ? '...' : '') : 'App'} - ${build.ID}`, 
            url: build.apkUrl 
          }])
        })
      }

      pageResults.forEach(build => {
  if (build.logMessage && build.logMessage.trim() !== '') {
    inlineKeyboard.push([{ 
      text: `📋 View Logs - Build ${build.ID}`, 
      callback_data: `view_logs ${build.ID}` 
    }])
  }
})
      
      let paginationButtons = []
      if (page > 0) {
        paginationButtons.push({ text: "⬅️ Previous Page", callback_data: `build_filter ${filter} page=${page - 1}` })
      }
      if (page < totalPages - 1) {
        paginationButtons.push({ text: "Next Page ➡️", callback_data: `build_filter ${filter} page=${page + 1}` })
      }
      if (paginationButtons.length > 0) {
        inlineKeyboard.push(paginationButtons)
      }

      let hasActiveBuilds = results.some(build => build.buildStatus === 'building' || build.buildStatus === 'queued')
      if (hasActiveBuilds) {
        inlineKeyboard.push([{ text: "🔄 Refresh Status", callback_data: `build_filter ${filter} page=${page}` }])
      }
      
      inlineKeyboard.push([{ text: "🔄 Change Filter", callback_data: "my_builds" }])
      inlineKeyboard.push([{ text: "🔙 Main Menu", callback_data: "/start" }])

      Api.editMessageMedia({
        chat_id: chat.id,
        message_id: update.callback_query.message.message_id,
        media: {
          type: "photo",
          media: "https://flashcomcloud.onelocal.host/download-file/1760334880_file_100.jpg",
          caption: resultText,
          parse_mode: "HTML"
        },
        reply_markup: {
          inline_keyboard: inlineKeyboard
        }
      })
    } else {
      Api.editMessageMedia({
        chat_id: chat.id,
        message_id: update.callback_query.message.message_id,
        media: {
          type: "photo",
          media: "https://flashcomcloud.onelocal.host/download-file/1760335093_file_101.jpg",
          caption: `📭 <b>No Builds Found</b>\n\nNo APK builds found for filter: <b>${filter}</b>\n\nCreate your first APK using the button below.`,
          parse_mode: "HTML"
        },
        reply_markup: {
          inline_keyboard: [
            [{ text: "📱 Create App", callback_data: "create_app" }],
            [{ text: "🔄 Try Another Filter", callback_data: "my_builds" }],
            [{ text: "🔙 Back to Main", callback_data: "/start" }]
          ]
        }
      })
    }
  } else {
    let errorMsg = response.data?.message || "Failed to fetch builds"
    Api.editMessageMedia({
      chat_id: chat.id,
      message_id: update.callback_query.message.message_id,
      media: {
        type: "photo",
        media: "https://flashcomcloud.onelocal.host/download-file/1760334760_file_99.jpg",
        caption: `❌ <b>Error Fetching Builds</b>\n\n${errorMsg}`,
        parse_mode: "HTML"
      },
      reply_markup: {
        inline_keyboard: [
          [{ text: "🔄 Try Again", callback_data: "my_builds" }],
          [{ text: "🔙 Back to Main", callback_data: "/start" }]
        ]
      }
    })
  }
} catch (error) {
  Api.editMessageMedia({
    chat_id: chat.id,
    message_id: update.callback_query.message.message_id,
    media: {
      type: "photo",
      media: "https://flashcomcloud.onelocal.host/download-file/1760334760_file_99.jpg",
      caption: "❌ <b>Network Error</b>\n\nFailed to connect to build service.",
      parse_mode: "HTML"
    },
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔄 Try Again", callback_data: "my_builds" }],
        [{ text: "🔙 Back to Main", callback_data: "/start" }]
      ]
    }
  })
}
