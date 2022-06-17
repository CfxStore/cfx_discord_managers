class GuildManager {
    constructor(guild) {
        this.guild = guild;
    }

    /*
---- ROLES ----
  */
    createRole(name, color){
        this.guild.roles.create({
            name: name,
            color: color,
        })
    }

    deleteRole(role){
        this.guild.roles.delete(role)
    }

    createMuteRule(){
        this.guild.roles.create({
            name: "Muted",
            color: "GREY",
        })
    }

    /*
---- CHANNELS ----
  */

    createChannel(name, type){
        this.guild.channels.create(name, {
            type: type,
        });
    }

    deleteChannel(channel){
        let guildChannel = this.guild.channels.cache.find(c => c === channel)

        this.guild.channels.delete(guildChannel)
    }

    checkChannel(channel){
        let findChannel = this.guild.channels.cache.find(c => c === channel)

        return findChannel;
    }

    /*
---- GUILD ----
*/
    setGuildName(name){
        this.guild.setName(name)
    }

    setGuildIcon(icon){
        this.guild.setIcon(icon)
    }

    setModerationLevel(level) {
        this.guild.setVerificationLevel(level)
    }

    setExplicitLevel(level){
        this.guild.setExplicitContentFilter(level)
    }

    setSlowMode(seconds, reason){
        this.message.channel.setRateLimitPerUser(seconds, reason)
    }

    /*
---- EMOJI'S ----
*/

    createEmoji(url, name){
        this.guild.emojis.create(url, name)
    }

    deleteEmoji(name){
        let emoji = this.guild.emojis.cache.find(emoji => emoji.name == name);

        if(emoji){
            this.guild.emojis.delete(emoji)
        }

        if(!emoji){
            return console.log("This emoji isnt found.")
        }
    }
}

module.exports = GuildManager;