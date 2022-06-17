const GCM = require("./Managers/GuildChannelManager.js")
const GUM = require("./Managers/GuildUserManager")
const GM = require("./Managers/GuildManager")

function initGCM(){
    return new GCM();
}

function initGUM(db){
    return new GUM(db);
}

function initGM(){
    return new GM()
}


module.exports = {
    initGCM,
    initGUM,
    initGM
}