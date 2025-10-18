//COMMAND NAME : /update_admin_details

//Please read https://flashcomapi.alwaysdata.net/api/docs/apk-builder#admin for docs


if (user.id != DEV_TELEGRAM_ID) {
  Bot.sendMessage("❌ Unauthorized! Only the designated admin can use this command.");
  return;
}

let SECRET_KEY = "YOUR SECRET KEY HERE"; // ⬅️ Replace with your actual secret key Get it from https://t.me/FlashComApkBuilderVerifierBot

let updatePayload = {
  secret: SECRET_KEY,
  dev_telegram_id: DEV_TELEGRAM_ID,
  platform: PLATFORM,
  bot_token_telegram: BOT_TOKEN_TELEGRAM,
  bot_id_telegram: BOT_ID_TELEGRAM,
  action: "update"
};

let adminResponse = await HTTP.post({
  url: MANAGE_DEV_URL,
  body: updatePayload,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 15000
});

if (!adminResponse.ok || !adminResponse.data) {
  Bot.sendMessage("❌ Admin update failed: HTTP error");
  return;
}

let adminData = adminResponse.data;

if (adminData.status === "success") {
  Bot.sendMessage("✅ Admin details updated successfully!");
} else {
  Bot.sendMessage(`❌ Admin update failed: ${adminData.message}`);
}