//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════//

88888888888 .d88888b.           8888888b.  888     888     888  .d8888b.         888b     d888 8888888b.  
    888    d88P" "Y88b          888   Y88b 888     888     888 d88P  Y88b        8888b   d8888 888  "Y88b 
    888    888     888          888    888 888     888     888 888    888        88888b.d88888 888    888 
    888    888     888 88888b.  888   d88P 888     888     888 888               888Y88888P888 888    888 
    888    888     888 888 "88b 8888888P"  888     888     888 888  88888        888 Y888P 888 888    888 
    888    888     888 888  888 888        888     888     888 888    888 888888 888  Y8P  888 888    888 
    888    Y88b. .d88P 888 d88P 888        888     Y88b. .d88P Y88b  d88P        888   "   888 888  .d88P 
    888     "Y88888P"  88888P"  888        88888888 "Y88888P"   "Y8888P88        888       888 8888888P"  
                       888                                                                                
                       888                                                                                
                       888                                                                                
    //
//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'zokk',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "TOpPLUG PIRATES",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "254112767921",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "oui",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'TOpPLUG-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || 'sk-proj-YfcNzdUKxlPr4yOkKYRQT3BlbkFJB0dbLsM9gWNTh52M3hAw',
    URL : process.env.BOT_MENU_LINKS || 'https://i.imgur.com/Gw7jtD0.jpeg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
