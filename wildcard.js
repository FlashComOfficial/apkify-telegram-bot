//COMMAND NAME : *

if (!msg || !msg.text) return

let step = User.get("step")
let apkData = User.get("apk_data") || {}

if (step === "app_name") {
  if (msg.text.length > 50) {
    Api.sendPhoto({
      chat_id: chat.id,
      photo: "https://flashcomcloud.alwaysdata.net/download/1760334760_file_99.jpg",
      caption: "<b>❌ App Name Too Long</b>\n\nYour app name is <b>" + msg.text.length + "</b> characters.\nMaximum allowed is <b>50 characters</b>.\n\nPlease enter a shorter app name.",
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🔙 Back to Home", callback_data: "/start" }]
        ]
      }
    })
    return
  }
  
  apkData.app_name = msg.text.trim()
  User.set("apk_data", apkData, "json")
  User.set("step", "package_name")
  
  Api.sendPhoto({
    chat_id: chat.id,
    photo: "https://flashcomcloud.alwaysdata.net/download/1760329048_file_91.jpg",
    caption: `<b>✅ App Name Saved:</b> <code>${apkData.app_name}</code>\n\nNow enter your <b>Package Name</b>:\n• Must follow format: <code>com.example.app</code>\n• Must be under 100 characters\n• Use only lowercase letters, numbers, and dots\n• Must be unique (cannot be used by others)\n\n<b>Example:</b> <code>com.${apkData.app_name.toLowerCase().replace(/[^a-z0-9]/g, '')}.app</code>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔙 Back", callback_data: "/start" }]
      ]
    }
  })
  
} else if (step === "package_name") {
  let packageName = msg.text.trim()
  
  // Check length
  if (packageName.length > 100) {
    Api.sendPhoto({
      chat_id: chat.id,
      photo: "https://flashcomcloud.alwaysdata.net/download/1760334760_file_99.jpg",
      caption: "<b>❌ Package Name Too Long</b>\n\nYour package name is <b>" + packageName.length + "</b> characters.\nMaximum allowed is <b>100 characters</b>.",
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🔙 Back to Home", callback_data: "/start" }]
        ]
      }
    })
    return
  }
  
  // Check format - only lowercase letters, numbers, and dots
  if (!/^[a-z0-9]+\.[a-z0-9]+\.[a-z0-9]+$/.test(packageName)) {
    Api.sendPhoto({
      chat_id: chat.id,
      photo: "https://flashcomcloud.alwaysdata.net/download/1760334760_file_99.jpg",
      caption: `<b>❌ Invalid Package Name Format</b>\n\nMust follow pattern: <code>com.example.app</code>\n\n<b>Requirements:</b>\n• Only lowercase letters, numbers, and dots\n• Must have exactly 2 dots\n• No special characters or uppercase letters\n\n<b>Examples:</b>\n✅ <code>com.myapp.android</code>\n✅ <code>org.website.app</code>\n❌ <code>MyApp</code>\n❌ <code>com.my-app</code>\n❌ <code>com.my_app</code>`,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🔙 Back to Home", callback_data: "/start" }]
        ]
      }
    })
    return
  }
  
  apkData.package_name = packageName
  User.set("apk_data", apkData, "json")
  User.set("step", "website_url")
  
  Api.sendPhoto({
    chat_id: chat.id,
    photo: "https://flashcomcloud.alwaysdata.net/download/1760329291_file_92.jpg",
    caption: `<b>✅ Package Name Saved:</b> <code>${apkData.package_name}</code>\n\nNow enter your <b>Website URL</b>:\n• Must start with <code>https://</code>\n• Must be accessible and working\n• No blocked domains allowed\n\n<b>Example:</b> <code>https://mywebsite.com</code>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔙 Back", callback_data: "/start" }]
      ]
    }
  })
  
} else if (step === "website_url") {
  let websiteUrl = msg.text.trim()
  
  // Check HTTPS
  if (!/^https:\/\//i.test(websiteUrl)) {
    Api.sendPhoto({
      chat_id: chat.id,
      photo: "https://flashcomcloud.alwaysdata.net/download/1760334760_file_99.jpg",
      caption: "<b>❌ Only HTTPS Websites Supported</b>\n\nYour URL must start with <code>https://</code>\n\nHTTP websites are not allowed for security reasons.",
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🔙 Back to Home", callback_data: "/start" }]
        ]
      }
    })
    return
  }
  
  // Check for blocked domains
  let blockedDomains = ["rf.gd", "000webhostapp.com", "infinityfreeapp.com", "freecluster.eu", "epizy.com", "byet.host", "freewebhostingarea.com"]
  let isBlocked = blockedDomains.some(domain => websiteUrl.toLowerCase().includes(domain))
  
  if (isBlocked) {
    let blockedDomain = blockedDomains.find(domain => websiteUrl.toLowerCase().includes(domain))
    Api.sendPhoto({
      chat_id: chat.id,
      photo: "https://flashcomcloud.alwaysdata.net/download/1760334760_file_99.jpg",
      caption: `<b>❌ Blocked Domain Detected</b>\n\nWebsites hosted on <code>${blockedDomain}</code> are not allowed.\n\nPlease use a trusted domain for your website.`,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🔙 Back to Home", callback_data: "/start" }]
        ]
      }
    })
    return
  }
  
  apkData.website_url = websiteUrl
  User.set("apk_data", apkData, "json")
  User.set("step", "icon_url")
  
  Api.sendPhoto({
    chat_id: chat.id,
    photo: "https://flashcomcloud.alwaysdata.net/download/1760331261_file_93.jpg",
    caption: `<b>✅ Website URL Saved:</b> <code>${apkData.website_url}</code>\n\nNow enter your <b>Icon URL</b> (optional):\n\n<b>Requirements:</b>\n• Must be hosted on <code>flashcomcloud.alwaysdata.net</code>\n• Must end with <code>.jpg</code>, <code>.jpeg</code>, or <code>.png</code>\n• Maximum 20MB file size\n\n<b>How to get icon URL:</b>\n1. Go to @UpLynkBot\n2. Upload your image\n3. Copy the direct link\n4. Paste it here\n\nOr send <b>skip</b> to use default icon`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔗 Get Icon URL", url: "https://t.me/UpLynkBot" }],
        [{ text: "⏭️ Skip Icon", callback_data: "skip_icon" }],
        [{ text: "🔙 Back", callback_data: "/start" }]
      ]
    }
  })
  
} else if (step === "icon_url") {
  if (msg.text.toLowerCase() !== "skip") {
    let iconUrl = msg.text.trim()
    
    // Check if hosted on allowed domain
    if (!/^https:\/\/flashcomcloud\.onelocal\.host/i.test(iconUrl)) {
      Api.sendPhoto({
        chat_id: chat.id,
        photo: "https://flashcomcloud.alwaysdata.net/download/1760334760_file_99.jpg",
        caption: "<b>❌ Invalid Icon Host</b>\n\nIcons must be hosted on <b>FlashCom Cloud</b>.\n\nGo to @UplynkBot upload the icon image and then direct link will be sent copy and send the direct link and send it to me",
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [{ text: "🔙 Back to Home", callback_data: "/start" }]
          ]
        }
      })
      return
    }
    
    // Check file extension
    let iconExtension = iconUrl.toLowerCase().split('.').pop()
    if (!['jpg', 'jpeg', 'png'].includes(iconExtension)) {
      Api.sendPhoto({
        chat_id: chat.id,
        photo: "https://flashcomcloud.alwaysdata.net/download/1760334760_file_99.jpg",
        caption: "<b>❌ Invalid Icon Format</b>\n\nIcon URL must end with:\n• <code>.jpg</code>\n• <code>.jpeg</code>\n• <code>.png</code>\n\nOther image formats are not supported.",
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [{ text: "🔙 Back to Home", callback_data: "/start" }]
          ]
        }
      })
      return
    }
    
    apkData.icon_url = iconUrl
  }
  
  User.set("apk_data", apkData, "json")
  User.set("step", "email")
  
  Api.sendPhoto({
    chat_id: chat.id,
    photo: "https://flashcomcloud.alwaysdata.net/download/1760332104_file_94.jpg",
    caption: `<b>✅ Icon ${apkData.icon_url ? "Saved" : "Skipped"}</b>\n\nNow enter your <b>Email Address</b>:\n• For build notifications and status updates\n• Must be valid email format\n\n<b>Example:</b> <code>example@email.com</code>`,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔙 Back", callback_data: "/start" }]
      ]
    }
  })
  
} else if (step === "email") {
  let email = msg.text.trim()
  
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    Api.sendPhoto({
      chat_id: chat.id,
      photo: "https://flashcomcloud.alwaysdata.net/download/1760334760_file_99.jpg",
      caption: "<b>❌ Invalid Email Format</b>\n\nPlease enter a valid email address.\n\n<b>Examples:</b>\n✅ <code>user@example.com</code>\n✅ <code>name@gmail.com</code>\n❌ <code>invalid-email</code>\n❌ <code>user@.com</code>",
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🔙 Back to Home", callback_data: "/start" }]
        ]
      }
    })
    return
  }
  
  apkData.email = email
  apkData.telegram_id = user.id.toString()
  User.set("apk_data", apkData, "json")
  User.set("step", "review")
  
  // Show review and verification
let reviewText = `<b>📋 Review Your APK Details</b>\n\n`
reviewText += `<b>App Name:</b> <code>${apkData.app_name}</code>\n`
reviewText += `<b>Package Name:</b> <code>${apkData.package_name}</code>\n`
reviewText += `<b>Website:</b> <a href="${apkData.website_url}">Click Here</a>\n`
reviewText += `<b>Icon:</b> ${apkData.icon_url ? `<a href="${apkData.icon_url}">Click Here</a>` : "Default icon will be used"}\n`
reviewText += `<b>Email:</b> <code>${apkData.email}</code>\n`
reviewText += `<b>Telegram ID:</b> <code>${apkData.telegram_id}</code>\n\n`
reviewText += `<b>Everything looks good? Let's verify and submit!</b>`

Api.sendPhoto({
  chat_id: chat.id,
  photo: "https://flashcomcloud.alwaysdata.net/download/1760332182_file_95.jpg",
  caption: reviewText,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [{ text: "✅ Verify & Submit", callback_data: "submit_apk" }],
      [{ text: "🔙 Back", callback_data: "/start" }],
      [{ text: "🔄 Start Over", callback_data: "create_app" }]
    ]
  }
})
}