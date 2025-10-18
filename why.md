## 🔗 Why RETURN_URL is Needed

`let RETURN_URL = "https://t.me/" + bot.name;`

**Purpose:**
- Provides a direct return link to your bot after verifying using https://t.me/FlashComApkBuilderVerifierBot
- Essential for user experience and navigation
- Ensures users can easily return to your bot interface
- Keep bot username less than 150 characters

**Example:**
If your bot username is `@ApkifyBot`:
- RETURN_URL = `https://t.me/ApkifyBot`
- Users click this link to return to your bot

---

## 🤖 Why BOT_TOKEN_TELEGRAM is Required

`let BOT_TOKEN_TELEGRAM = "YOUR_BOT_TOKEN_HERE";`

**Purpose:**
- Allows FlashCom API to send build notifications to users
- When APK build completes (success/error), API sends message via your bot
- Notifications appear in the same chat where user started the build

**How it works:**
1. User submits APK build request
2. FlashCom API processes the build
3. When complete, API uses your bot token to send result to user
4. User receives direct message in Telegram chat

---

## 👤 Why ADMIN_SUPPORT_URL is Important

`let ADMIN_SUPPORT_URL = "https://t.me/your_telegram_username";`

**Purpose:**
- Direct link for users to contact you for support
- When users click "Contact Admin", they open Telegram chat with you
- Essential for user support and issue resolution
- Builds trust by providing direct access to help

**Example:**
If your Telegram username is `@YourName`:
- ADMIN_SUPPORT_URL = `https://t.me/YourName`
- Users can directly message you for support

---

## 💡 Why These Variables Matter

These three URLs create a complete user experience:
1. **BOT_TOKEN** - Enables automated notifications
2. **RETURN_URL** - Provides easy navigation back to your bot
3. **ADMIN_SUPPORT_URL** - Offers direct support access

Together they ensure:
- Users get timely build updates
- Users can easily return to your bot
- Users have direct support when needed