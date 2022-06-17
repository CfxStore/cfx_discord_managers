class GuildChannelManager {
    constructor(message) {
        this.message = message;
    }

    purge(amount){
        this.message.channel.bulkDelete(amount)
    }

    // More comming soon.
}

module.exports = GuildChannelManager;
