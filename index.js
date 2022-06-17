const GuildChannelManager = require("./Managers/GuildChannelManager.js")
const GuildUserManager = require("./Managers/GuildUserManager.js")
const GuildManager = require("./Managers/GuildManager.js")


function getGuildChannelManager(message){
    return new GuildChannelManager(message)
}

function getGuildUserManager(database, message, guild){
    return new GuildUserManager(database, message, guild)
}

function getGuildManager(guild){
    return new GuildManager(guild)
}

module.exports = {
    getGuildChannelManager,
    getGuildUserManager,
    getGuildManager
}