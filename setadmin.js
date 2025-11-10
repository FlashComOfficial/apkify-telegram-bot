//COMMAND NAME : /setadmin

//Please read https://flashcomapi.alwaysdata.net/api/docs/apk-builder#admin for docs

//The reason i kep this code here without moving to manage admins commands folder since this is important 

//Before setting please configure your admin id, bot token and platform on @ command
// Check if the user is the authorized admin
if (user.id != DEV_TELEGRAM_ID) {
  Bot.sendMessage("❌ Unauthorized! Only the designated admin can use this command.");
  return;
}

// Prepare admin registration payload
let adminPayload = {
  dev_telegram_id: DEV_TELEGRAM_ID,
  platform: PLATFORM,
  bot_token_telegram: BOT_TOKEN_TELEGRAM,
  bot_id: BOT_ID
};

let adminResponse = await HTTP.post({
  url: MANAGE_DEV_URL,
  body: adminPayload,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 15000
});

if (!adminResponse.ok || !adminResponse.data) {
  Bot.sendMessage("❌ Admin setup failed: HTTP error");
  return;
}

let adminData = adminResponse.data;

if (adminData.status === "success") {
  Bot.sendMessage("✅ Admin registered successfully!");
} else if (adminData.message && adminData.message.includes("already exists")) {
  Bot.sendMessage("ℹ️ Admin already registered - updated if needed");
} else {
  Bot.sendMessage(`❌ Admin setup failed: ${adminData.message}`);

}
