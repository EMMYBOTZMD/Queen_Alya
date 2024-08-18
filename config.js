//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2349127237506";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349127237506";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01jckZSamFuQ25zZUZZS3o0WmRFMU83OEZkWkxMdnBRemV2ZmFyUDJXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFJXdU5KZkhUeUNkWnBncTJwZGE1YjBDM0h4ZkRWRmluNjR6STRQSUZVST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSHVLc241QlZkakw0T2VSQUJyNDJGYUxpSnNHK1cyVlFlYkd2bzJRMG4wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyZ1JQY0dQbnFCZ2NybkI2TWVqcXFzdiszRlMvMmZybTc3UWJRZ1Q5RGg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNJTjY4b0Z0U3NWN1RnNmdleFhRM1c0T1ozdDhZT2VRN1VjY0g5NFRsV2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdoTTYzcE1uZm5VY3laNzVlMTBmR0RvSVBoQndoVXpBQ3lzWUtFOWh1Mmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU04Wklmdi9ZY205V0NKdGErS0VxMlVlSXVjMVpUWTNuMjRQRnRYNnVITT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmlYY2o1ZVZTNUlYcWlhMTlFRkFPUEMwcVFiYjY1QnZCYVlPa1NaaTZ4TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1BRUhMWU1DZ3QwVFBzcFNSa0xKUkJtYWZpVStLcXFXV2FSVWlSeVBoZlZaNXdvYjNIaUtEdXB2dTZsMzdvcDNpSlN5clZhWVBJZ2N6S0dxZXFDcURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJraWcrYkE4VzU2ZWhzMGZCdnNZdmRMQTM3b2s1Z1Jma2NCZUtoZWJmVGUwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4ZEFpNUU5Y1FrYVBScGk1aG5JeHRBIiwicGhvbmVJZCI6IjUyN2RiYTM2LWNjZmYtNDFlNy1iMDgyLTk2OTIxZjg3ODdmNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGTnlkdmxwbEIvaFM3NU0zMnc1RUNWWm5oMHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2JyRGk3NCtORmdoMWQ4eWppRlVqbzdKU3dRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBIRlhEM0ZTIiwibWUiOnsiaWQiOiIyMzQ5MTI3MjM3NTA2OjIwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNT042WVFHRUl6UWlMWUdHQlFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJteGJVb2JqNENURDRhd0F0YXRmeGJ0Vjd1K2JsUkVHQWIrRWNOSWZVSW1NPSIsImFjY291bnRTaWduYXR1cmUiOiJ0U0NScnVnVkowRGlwU0x4YUlyejJlcXc2SGNwdDdKR090dVhnMFE0cytXdnBBTFh5UXl3VE9BYlI4NDJNWkFTWFVKNTgyYm9mT3JRYyt5TFlWZ21CUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZENibThQZkE5N1o5RnltMUZJVVJ6N2ZTRnRxQ0hYakNNNCs2RFhvbzhQSFFqcS9uOHQvTGFkdWkvQ0FiN1JyR1RNeDJBY1pFTVF6T0Y1eFFxSE1qQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTI3MjM3NTA2OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpzVzFLRzQrQWt3K0dzQUxXclg4VzdWZTd2bTVVUkJnRy9oSERTSDFDSmoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQwMDAyODEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSjMxIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "EMMYBOTZ-MD",
  ownername: process.env.OWNER_NAME || "EMMYBOTZ-KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
