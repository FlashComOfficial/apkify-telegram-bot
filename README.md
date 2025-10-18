# ApkifyBot - Telegram Custom Website to Android App Converter Bot Source

A powerful Telegram bot that converts websites into Android APK files instantly\. Built with TBL \(Tele Bot Lang\)

## 🚀 Features

• *Website to APK Converter* \- Transform any HTTPS website into a native Android app  
• *Custom App Configuration* \- Set app name, package name, and custom icons  
• *Build History* \- Track all your APK builds with filtering options  
• *Email Notifications* \- Get build status updates via email  
• *Telegram Bot Notifications* \- Get success/error report via telegram bot after complete ( if configured properly )  
• *Cloud Storage* \- All builds stored temporarily on FlashCom Cloud ( It may get deleted after few days so keep backup )
• *Free Tier* \- 3 builds per day per user  

## ⚙️ Setup Instructions

Please read `how\_to\_setup\.md` or watch the video in guide videos folder

## 🛠️ Available Commands

### User Commands
• `/start` \- Main menu and bot introduction  
• `create\_app` \- Start APK creation process  
• `my\_builds` \- View build history with filters  
• `help` \- Get assistance and support  
• *etc\.\.\.*

### Admin Commands
• `/setadmin` \- Register admin account  
• `/update\_admin` \- Update admin details  
• `/new\_secret` \- Generate new secret key  
• `/change\_admin\_telegram\_id` \- Change admin telegram id to new one
• `/delete\_admin` \- Remove admin account  

*All Admin Operations Except setadmin required secret key you can find in* [@FlashComApkBuilderVerifierBot](https://t\.me/FlashComApkBuilderVerifierBot)

## 🔧 Bot Structure

### Core Components
• `@` Command \- Initialization and global variables  
• `!` Command \- Error handling with user\-friendly messages  
• `*` Command \- Handles user input during APK creation flow  
• Callback Handlers \- Manage inline button interactions  

### User Flow
• User starts with `/start`  
• Clicks "Create App" and provides:  
  • App Name  
  • Package Name \(com\.example\.format\)  
  • Website URL \(HTTPS only\)  
  • Icon URL \(optional\)  
  • Email for notifications  
• System verifies and submits to build queue  
• User receives APK download link when complete in telegram chat & email \(Only if configured properly\)

## 🔒 Security Features

• HTTPS website requirement  
• Package name validation  
• Telegram ID verification  
• Rate limiting \(3 builds/day\)  
• Admin authentication system  

## 📞 Support

• Support Chat: [@FlashComSupport](https://t\.me/FlashComSupport)  
• Channel: [@TeleFlashOfficial](https://t\.me/TeleFlashOfficial)  
• Cloud Storage: [@UplynkBot](https://t\.me/UplynkBot)  

## 📝 Full Docs Links

• Docs Links: https://flashcomapi\.alwaysdata\.net/api/docs/apk\-builder#generate

## 📝 Terms & Conditions

By creating your tbl own web to apk converter bot, you agree to the following terms:

• *API Terms of Service:*  
https://flashcomapi\.alwaysdata\.net/terms

• *APK Builder Terms of Use:*  
https://telegra\.ph/FlashCom\-APK\-Builder\-\-Terms\-of\-Use\-10\-11

## 🎥 Video Guides

For complete setup and usage tutorials\. Please see guide videos folder

## 💡 Compatibility Details For Generated Apk

• Compatibility: Android 5\.0\+ \(SDK 21\-35\)

## 📄 License

This TBL bot source is provided as\-is for educational and development purposes\. The complete source code includes integration with the public FlashCom APK Builder API\.

### What's Included:
• Full TBL bot script for you can directly host on telebothost\.com  
• Integration with public FlashCom API endpoints  
• Complete APK generation workflow  
• User management and build tracking  
• Admin panel functionality  

### API Endpoints Used:
• POST https://flashcomapi\.alwaysdata\.net/api/generate\-apk  
• GET https://flashcomapi\.alwaysdata\.net/api/apk\-results  
• POST https://flashcomapi\.alwaysdata\.net/api/manageDev  

### Usage Rights:
• You may use, modify, and distribute these TBL codes  
• You may deploy your own instance on TeleBotHost  
• You may integrate with the public FlashCom API  
• Commercial use is permitted  
• Attribution to original author is appreciated  

### Support:
• API Documentation: https://flashcomapi\.alwaysdata\.net/api/docs/apk\-builder  
• Support Chat: [@FlashComSupportChat](https://t\.me/FlashComSupportChat)  

This is a complete, functional APK builder bot that anyone can deploy and use immediately on telebothost.com\.