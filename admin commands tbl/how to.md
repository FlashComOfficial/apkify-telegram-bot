# ⚙️ FlashCom APK Builder Api - Developer Admin Management
---

## 📋 Prerequisites
- You must already be **registered as a Developer Admin** using api read docs on how to register or video on guide videos folder
- You’ll need your **secret key** from the **FlashCom Apk Builder Verifier Bot**

---

## 🔧 Admin Management Operations

### 📖 Complete Documentation
For detailed API documentation with examples and endpoints, visit:  
👉 [FlashCom APK Builder Admin Documentation](https://flashcomapi.alwaysdata.net/api/docs/apk-builder#admin)

---

## 🛠️ Available Operations

### 1️⃣ Update Admin Details
Modify your platform, bot ID, or bot token.

**Required:**
- `secret_key`
- `dev_telegram_id`
- `action: "update"`
- At least one field to update

---

### 2️⃣ Generate New Secret Key
Revoke your old secret key and generate a new secure one.

**Required:**
- `secret_key`
- `dev_telegram_id`
- `action: "update"`
- `type: "secret_new"`

---

### 3️⃣ Change Telegram ID
Transfer your developer admin account to a new Telegram ID.

**Required:**
- `secret_key`
- `dev_telegram_id`
- `action: "change"`
- `new_telegram_id` *(must be verified) new id must start @FlashComApkBuilderVerifierBot*

---

### 4️⃣ Delete Admin Account
Permanently remove your developer admin account.

**Required:**
- `secret_key`
- `dev_telegram_id`
- `action: "delete"`

---

## 📚 Learn More
For the complete API reference, request/response examples, and error codes:  
🔗 [FlashCom APK Builder Admin Documentation](https://flashcomapi.alwaysdata.net/api/docs/apk-builder#admin)

---

## 💡 Quick Tips
- Keep your **secret key** secure  
- Use the **Verifier Bot** to view or change your keys easily
- Always start the https://t.me/FlashComApkBuilderVerifierBot with the new telegram id account to **verify new Telegram IDs** before changing
