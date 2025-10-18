//COMMAND NAME : @

// Api Endpoint Urls
let API_ENDPOINT = "https://flashcomapi.alwaysdata.net/api/generate-apk"; // https://flashcomapi.alwaysdata.net/api/docs/apk-builder#generate
let MY_BUILDS_URL = "https://flashcomapi.alwaysdata.net/api/apk-results"; // https://flashcomapi.alwaysdata.net/api/docs/apk-builder#results
let MANAGE_DEV_URL = "https://flashcomapi.alwaysdata.net/api/manageDev"; //https://flashcomapi.alwaysdata.net/api/docs/apk-builder#admin

// Admin/Dev credentials required
let DEV_TELEGRAM_ID = ADMIN_TELEGRAM_ID_HERE; // Replace with actual admin Telegram ID - BEFORE THAT PLEASE START @FlashComAPkBuilderVerifierBot in telegram to verify admin just start the bot that's enough
let BOT_TOKEN_TELEGRAM = "YOUR_BOT_TOKEN_HERE"; // Replace with actual bot token - Required to send success/error build notifications to users via Telegram bot please read why.md
let PLATFORM = "telegram"; // Platform identifier

let BOT_ID_TELEGRAM = bot.bot_id;

let RETURN_URL = "https://t.me/" + bot.name; //please read why.md for more details

let ADMIN_SUPPORT_URL = "https://t.me/your_telegram_username"; // Replace with your telegram username whenever someone clicks contact admin will be taken to this url
let OFFICIAL_CHANNEL = "https://t.me/mychannel"; //YOUR OFFICIAL TELEGRAM CHANNEL IF AVAILABLE