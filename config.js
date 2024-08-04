const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Zimbabwe";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Delboy Aniey " 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263 78 539 6010";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'online' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_01_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQwLFxuICAgICAgICA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg1LFxuICAgICAgICA2MixcbiAgICAgICAgMjM3LFxuICAgICAgICA3MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY4LFxuICAgICAgICA4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDYyLFxuICAgICAgICA4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1LFxuICAgICAgICA0MSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxODUsXG4gICAgICAgIDUwLFxuICAgICAgICA4NCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY1LFxuICAgICAgICA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDk2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg3LFxuICAgICAgICA1NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVTUFvMlB3U0NPUDdNbzd1NjVPb0FMZ0laK2FsQlM1cG1ZaU8yaUg4MlVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyOC13WWN4ZlR6aUxRby10N1RGdEdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVlN2Q3NjJjLWU1NGItNDA0OC05ZjI0LWExY2EzNTZiYzc4MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDc1LFxuICAgICAgMTMzLFxuICAgICAgMTUwLFxuICAgICAgMjUyLFxuICAgICAgMTc1LFxuICAgICAgMTk3LFxuICAgICAgODYsXG4gICAgICAxNixcbiAgICAgIDE2OSxcbiAgICAgIDIxMyxcbiAgICAgIDE3MCxcbiAgICAgIDkzLFxuICAgICAgMTY5LFxuICAgICAgMzIsXG4gICAgICAxNjQsXG4gICAgICAxNjMsXG4gICAgICAxODUsXG4gICAgICA5NCxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDIsXG4gICAgICAyMjQsXG4gICAgICAxMixcbiAgICAgIDU3LFxuICAgICAgMTUzLFxuICAgICAgMTU2LFxuICAgICAgMTQ2LFxuICAgICAgODIsXG4gICAgICAxNDksXG4gICAgICA0NSxcbiAgICAgIDk4LFxuICAgICAgMjQzLFxuICAgICAgODcsXG4gICAgICAxMDQsXG4gICAgICA1OSxcbiAgICAgIDE2MixcbiAgICAgIDIxLFxuICAgICAgMjE5LFxuICAgICAgMTgxLFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNGR1g0U0NMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3ODUzOTYwMTA6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJESiBERUxCT1kgQU5JRVkgTUlYVEFQRVNcIixcbiAgICBcImxpZFwiOiBcIjE5NDQ4NTE3ODkwODgxMzo0OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMYVVsc3dFRUxHeXZMVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNKT1U1SHVYVUV5OEU4NFVLMGtNcWtFSzF2cjJnbkM1d1NWWk1SaEZMbUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNGFDMExWQ3IzczlDK05QWHdFaWRZajlGTmN4ZFZEcDlrL0tONnlpRVZjZEZQT3p5ajg1SnBBM214NHo0bSt0VWFtUWxhVlVhcGxudGgvcFlRNVdvQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSVFRRW9TaE1TWHhQcTlPQStyeDBqWVIvaFNPWThJeUlwNGRRSzFjQlY2YWVvRG16TzlOcmFROUNzejM3WVdHMXFkeGtTOTU5dWQweENtYm1yYnYvZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzg1Mzk2MDEwOjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3NTEyODUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBRWhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFFaC5qc29uIjogIntcImtleURhdGFcIjpcInljRzRHZVJWWGdtMmhxT0xoYWRLVmUzMFRZWGtCR2RLdjVUN3MyZkRPcFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIzMzQ4ODQzNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
