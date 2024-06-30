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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Delboy Aniey " 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254 773 440758";




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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_07_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgODQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgODIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIwLFxuICAgICAgICAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM1LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY1LFxuICAgICAgICAzLFxuICAgICAgICA0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyLFxuICAgICAgICA3NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDQ4LFxuICAgICAgICA3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqVk5ReHVwaG12c29WVXN1akVNeHNBZTlYeDNQNk9mOFpzaFlLaWNlQ2RBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc3MzQ0MDc1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODcyMDAwNjk0OEU1RThDNzU1REQ1NzQwRkVFMTk2QTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NzY3MjIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzczNDQwNzU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzMzdDNjBEOUFEMENCM0M2QUNCMzBDNzU4Qzg4QURBRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk3NjcyMjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwid1Btay1PZS1RT0dGNHVYaVJaV0FUUVwiLFxuICBcInBob25lSWRcIjogXCIyMWZkYWFiOS00ZjMxLTQ0NTQtOWJmYS01MTBhYWMxZTgxZTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgMjE1LFxuICAgICAgOTMsXG4gICAgICAyMDMsXG4gICAgICAxMjYsXG4gICAgICAzOSxcbiAgICAgIDE1MixcbiAgICAgIDY2LFxuICAgICAgMjMsXG4gICAgICA1MyxcbiAgICAgIDg0LFxuICAgICAgMjE3LFxuICAgICAgMjE0LFxuICAgICAgMTkwLFxuICAgICAgMTM4LFxuICAgICAgMTI5LFxuICAgICAgMyxcbiAgICAgIDg4LFxuICAgICAgNDEsXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAyLFxuICAgICAgMTc0LFxuICAgICAgNixcbiAgICAgIDExNSxcbiAgICAgIDc4LFxuICAgICAgMzAsXG4gICAgICA2MixcbiAgICAgIDE1NSxcbiAgICAgIDY2LFxuICAgICAgNzksXG4gICAgICAxNzMsXG4gICAgICAwLFxuICAgICAgNDEsXG4gICAgICA1OSxcbiAgICAgIDIzMCxcbiAgICAgIDEyNixcbiAgICAgIDE5NCxcbiAgICAgIDEwMCxcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRXWlk2UEhCXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NzM0NDA3NTg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1JTUlFXCIsXG4gICAgXCJsaWRcIjogXCIyNDk4OTg3NDYyOTQ0MDY6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMQ1Vsc3dFRUs2aGhyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImNKT1U1SHVYVUV5OEU4NFVLMGtNcWtFSzF2cjJnbkM1d1NWWk1SaEZMbUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSVU5TXViWjVIbHBEcTNab0ZDY2NTajRwelZTOVpQdFQ2eXNXUllPMjVzL1djKzQ4MWxBNG8vT294WURQNWIvY1JhZVRCNGZUbkxnQmxmZFN5cm9QQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN1FGV1Ava2ExS0dYODR5VWNuKzBxRU43dHkyelZmM1BsWDRkM3hyWCtualBlMURpcXNyTGJjaGpGWmhNRnpPUTI0dy80RW9WSDR0ZHlzNUd5WWx5aWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzczNDQwNzU4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTc2NzIxNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1VOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTVU4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwieEZuL1BvczlXaVliN0czNUVySUZYeElVTEdiM2Q1UHJzTFMwMlZlOENnVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjMzNDg4NDMyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3NjcyMjEyNTJcIn0iCn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
