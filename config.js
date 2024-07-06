
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUQ5WFE0R1JwRWpBY2o4UUFYWTdRN0V4RU81RlpTU2xFY1NLVkJRcVZWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3krM1JiVXk3eDVaQ0xqYXhrdWhWS211WVdzK2x3SWpQVjloTDFVKzdDZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSmdHTmo4YUUwNDJpZnJrTHo0cFJIM2pRU25vU0h3WmhhWHF4T3ovb244PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRzFXcXZ4SHRyUkxYVEVMMEdYMFNmcG9MbStjamwrZXJKZG1vbFM4aEVBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNFWFZLTHA2UHlDZTQ3TlNDVGMxV2J6KzRIekdrT2I3YzhvTjV2cXU3Rms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc0cVQ0VVNYZXdZY3hUcll4S0xVdVRkdVg1WHVYUUxRTm5aT283WGZBRzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkJmWUJvOUtKN1VRaGs1cGZQT2JJcEpDNitLcmZXQ252RDNNNDBKMTExVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUxPVWZHa2VERkJHVmlyR3R5MmlIbVVIelZGVzNHUUcwUEthUU9VRHNWQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1qSk1QdU5XZFlSWWFmNUtuMmQ4WG92YVNHL2JjcU1SUnlycURvYkdzdisxVmYxTjJTMDEyM09rcGoyeWJJcUgrWEhRREoxcHJHUkJhWC9nd2gza2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkyLCJhZHZTZWNyZXRLZXkiOiIxVmdmRlhrZFRkMlhVVGQ0djhxRzdINW9PcXo1aXB1OGFtUDdRVi91Y1c0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwODExNzA1NjVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTczQjNBMEU2QkRFQzMyMjRCQzBCRUZGNjI0MTI5NEYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDI1NTQ4M30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA4MTE3MDU2NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0RUU3NTZDRjc4QzhFMDhEQTdCOTUyNDQ2QjdERDJENSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMjU1NDgzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrbmZOeVBldFM0eVNfZHI5blZBV3RnIiwicGhvbmVJZCI6IjY1OWJjY2MyLWVjNmQtNDJjMC1hMDY0LTFhNmZhNDliYjhmNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjamdxa21Qem96K0o2WFF2cy9JVUxMMlpNQlE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWU3M2pxYzA0L1BVVEZReDJoT3BtQVJqQ1VVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik42WU5GSDRMIiwibWUiOnsiaWQiOiIyMzQ4MDgxMTcwNTY1OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVHVuZGV4IEVudGVycHJpc2UifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tYL2tLc0NFUGFIcExRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkM5c0dVdlZZNWExNXB2Qzg4bS93OGpKTm13ZU5EbGx6T2FzY3Q1Y29RRVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImlVTHZHTXhVVE1UVFVFZlhhZWVNbVExcEJxWkwwUGpaMlA4aEF6aHVtQ1FOK2FnSTBCZHUydDB2MDduL01hTm5nUzZYNlBEY2ppY3FoNkZ0NjVTK0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJIWUNta2QwV2V4OXVCdkdxa3BTcktCZS95WU5yZ0owM250VzY3eElGajh0VGZpbkJYcnk5dDJXSzlaRDJYY0FJVFg2ak5qZW95T1FTTHBRRFJ1b1NoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwODExNzA1NjU6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRdmJCbEwxV09XdGVhYnd2UEp2OFBJeVRac0hqUTVaY3ptckhMZVhLRUJFIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMjU1NDgxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtYZCJ9" //Make sure session id starts with Byte;;;
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "Tundex",
  packname: process.env.PACK_NAME || "tech",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "tundex",
  errorChat: process.env.ERROR_CHAT || "923072380380",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
