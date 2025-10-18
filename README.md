# 🤖 ApkifyBot - Telegram Custom Website to Android App Converter Bot Source

![ApkifyBot Banner](https://flashcomcloud.onelocal.host/download/1760768886_file_132.jpg)

<p align="center">
  <a href="https://t.me/ApkifyBot" target="_blank">
    <img src="https://img.shields.io/badge/Try%20Demo%20Bot-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Try Demo Bot on Telegram">
  </a>
  &nbsp;
  <a href="https://telebothost.com" target="_blank">
    <img src="https://img.shields.io/badge/Deploy%20on%20TeleBotHost-1E90FF?style=for-the-badge&logo=telegram&logoColor=white" alt="Deploy on TeleBotHost">
  </a>
</p>

A powerful Telegram bot that converts websites into Android APK files instantly.  
Built with **TBL (Tele Bot Lang)** and hosted on **TeleBotHost**.

---

## 🚀 Features

- *Website to APK Converter* — Transform any HTTPS website into a native Android app  
- *Custom App Configuration* — Set app name, package name, and custom icons  
- *Build History* — Track all your APK builds with filtering options  
- *Email Notifications* — Get build status updates via email  
- *Telegram Bot Notifications* — Receive success/error reports after completion (if configured properly)  
- *Cloud Storage* — All builds are temporarily stored on FlashCom Cloud *(auto-deleted after a few days, keep a backup)*  
- *Free Tier* — 3 builds per day per user  

---

## ⚙️ Setup Instructions

Please read `how_to_setup.md` or watch the video in the **guide_videos** folder.

---

## 🛠️ Available Commands

### 👤 User Commands
- `/start` — Main menu and bot introduction  
- `create_app` — Start APK creation process  
- `my_builds` — View build history with filters  
- `help` — Get assistance and support  
- *etc...*

### 👑 Admin Commands
- `/setadmin` — Register admin account  
- `/update_admin` — Update admin details  
- `/new_secret` — Generate a new secret key  
- `/change_admin_telegram_id` — Change admin Telegram ID to a new one  
- `/delete_admin` — Remove admin account  

> ⚠️ All admin operations except `/setadmin` require your secret key, which can be found in [@FlashComApkBuilderVerifierBot](https://t.me/FlashComApkBuilderVerifierBot).

---

## 🔧 Bot Structure

### Core Components
- `@` — Initialization and global variables  
- `!` — Error handling with user-friendly messages  
- `*` — Handles user input during the APK creation flow  
- **Callback Handlers** — Manage inline button interactions  

### User Flow
1. User starts with `/start`  
2. Clicks **Create App** and provides:
   - App Name  
   - Package Name (e.g. `com.example.format`)  
   - Website URL (HTTPS only)  
   - Icon URL *(optional)*  
   - Email for notifications  
3. System verifies and submits the build to the queue  
4. User receives the APK download link in Telegram chat and via email *(if configured)*

---

## 🔒 Security Features

- HTTPS website requirement  
- Package name validation  
- Telegram ID verification  
- Rate limiting (3 builds/day)  
- Admin authentication system  

---

## 📞 Support

- Support Chat: [@FlashComSupport](https://t.me/FlashComSupport)  
- Channel: [@TeleFlashOfficial](https://t.me/TeleFlashOfficial)  
- Cloud Storage: [@UplynkBot](https://t.me/UplynkBot)

---

## 📝 Full Docs Links

- Documentation: [https://flashcomapi.alwaysdata.net/api/docs/apk-builder#generate](https://flashcomapi.alwaysdata.net/api/docs/apk-builder#generate)

---

## 📝 Terms & Conditions

By creating your own TBL Web-to-APK converter bot, you agree to the following:

- **API Terms of Service:**  
  [https://flashcomapi.alwaysdata.net/terms](https://flashcomapi.alwaysdata.net/terms)

- **APK Builder Terms of Use:**  
  [https://telegra.ph/FlashCom-APK-Builder--Terms-of-Use-10-11](https://telegra.ph/FlashCom-APK-Builder--Terms-of-Use-10-11)

---

## 🎥 Video Guides

For full setup and usage tutorials, check the **guide_videos** folder.

---

## 💡 Compatibility

- Generated APKs compatible with **Android 5.0+ (SDK 21–35)**

---

## 📄 License

This TBL bot source is provided *as-is* for educational and development purposes.  
Includes integration with the public **FlashCom APK Builder API**.

### What's Included
- Full TBL bot script (ready to host on [TeleBotHost.com](https://telebothost.com))  
- Integration with FlashCom public API endpoints  
- Complete APK generation workflow  
- User management and build tracking  
- Admin panel functionality  

### API Endpoints Used
- `POST` https://flashcomapi.alwaysdata.net/api/generate-apk  
- `GET` https://flashcomapi.alwaysdata.net/api/apk-results  
- `POST` https://flashcomapi.alwaysdata.net/api/manageDev  

---

### Usage Rights
- ✅ You may use, modify, and distribute these TBL codes  
- ✅ You may deploy your own instance on TeleBotHost  
- ✅ You may integrate with the public FlashCom API  
- ✅ Commercial use is permitted  
- 🙏 Attribution to the original author is appreciated  

---

### Support & Docs
- 📘 [API Documentation](https://flashcomapi.alwaysdata.net/api/docs/apk-builder)  
- 💬 [Support Chat](https://t.me/FlashComSupportChat)

---

> 🧠 *Create your own custom Telegram bot that converts any website into a beautiful Android app — host it easily on TeleBotHost using this open-source code.*

