//COMMAND NAME : /change_admin_telegram_id

//Please read https://flashcomapi.alwaysdata.net/api/docs/apk-builder#admin for docs

if (user.id != DEV_TELEGRAM_ID) {
  Bot.sendMessage("❌ Unauthorized! Only the designated admin can use this command.");
  return;
}

// Replace with your actual secret key
let SECRET_KEY = "YOUR SECRET KEY HERE"; // ⬅️ Replace with your actual secret key Get it from https://t.me/FlashComApkBuilderVerifierBot

// Define new admin Telegram ID directly here
let NEW_ADMIN_ID = your_new_telegram_id; // ⬅️ Change this to the new admin ID


let updatePayload = {
  secret: SECRET_KEY,
  dev_telegram_id: DEV_TELEGRAM_ID,
  action: "change",
  new_dev_telegram_id: NEW_ADMIN_ID
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
  Bot.sendMessage("❌ Admin ID change failed: HTTP error");
  return;
}

let adminData = adminResponse.data;

if (adminData.status === "success") {
  Bot.sendMessage(`✅ Admin ID changed from ${DEV_TELEGRAM_ID} to ${NEW_ADMIN_ID}`);
} else {
  Bot.sendMessage(`❌ Admin ID change failed: ${adminData.message}`);
}