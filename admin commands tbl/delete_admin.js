//COMMAND NAME : /delete_admin

//Please read https://flashcomapi.alwaysdata.net/api/docs/apk-builder#admin for docs

if (user.id != DEV_TELEGRAM_ID) {
  Bot.sendMessage("❌ Unauthorized! Only the designated admin can use this command.");
  return;
}

let SECRET_KEY = "YOUR SECRET KEY HERE"; // ⬅️ Replace with your actual secret key Get it from https://t.me/FlashComApkBuilderVerifierBot

let updatePayload = {
  dev_telegram_id: DEV_TELEGRAM_ID,
  action: "delete"
};

let adminResponse = await HTTP.post({
  url: MANAGE_DEV_URL,
  body: {
    secret: SECRET_KEY,
    dev_telegram_id: DEV_TELEGRAM_ID,
    action: "delete"
  },
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 15000
});

if (!adminResponse.ok || !adminResponse.data) {
  Bot.sendMessage("❌ Admin deletion failed: HTTP error");
  return;
}

let adminData = adminResponse.data;

if (adminData.status === "success") {
  Bot.sendMessage("✅ Admin deleted successfully! Associated APK builds preserved.");
} else {
  Bot.sendMessage(`❌ Admin deletion failed: ${adminData.message}`);
}