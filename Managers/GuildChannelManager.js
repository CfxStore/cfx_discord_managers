class GuildChannelManager {
    constructor() {
    }

    purge(message, amount){
        message.channel.bulkDelete(amount)
    }

}

module.exports = GuildChannelManager;
