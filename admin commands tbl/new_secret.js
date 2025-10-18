//COMMAND NAME : /new_secret

//Please read https://flashcomapi.alwaysdata.net/api/docs/apk-builder#admin for docs

// Check if the authorized admin
if (user.id != DEV_TELEGRAM_ID) {
  Bot.sendMessage("❌ Unauthorized! Only the designated admin can use this command.");
  return;
}

let SECRET_KEY = "YOUR SECRET KEY HERE"; // ⬅️ Replace with your actual secret key

let adminResponse = await HTTP.post({
  url: MANAGE_DEV_URL,
  body: {
    secret: SECRET_KEY,
    dev_telegram_id: DEV_TELEGRAM_ID, //Define your registered admin id in @ command
    type: "secret_new",
    action: "update"
  },
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 15000
});
if (!adminResponse.ok || !adminResponse.data) {
  Bot.sendMessage("❌ Secret key generation failed: HTTP error");
  return;
}

let adminData = adminResponse.data;

if (adminData.status === "success") {
  Bot.sendMessage("✅ New secret key generated! Check @FlashComApkBuilderVerifierBot for your new key.");
} else {
  Bot.sendMessage(`❌ Secret key generation failed: ${adminData.message}`);
}