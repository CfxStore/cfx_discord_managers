class GuildManager {
    constructor() {
    }

    /*
---- ROLES ----
  */
    createRole(guild, name, color){
        guild.roles.create({
            name: name,
            color: color,
        })
    }

    deleteRole(guild, role){
        guild.roles.delete(role)
    }

    createMuteRule(guild){
        guild.roles.create({
            name: "Muted",
            color: "GREY",
        })
    }

    /*
---- CHANNELS ----
  */

    createChannel(guild, name, type){
        guild.channels.create(name, {
            type: type,
        });
    }

    deleteChannel(guild, role){
        let guildRole = guild.channels.cache.find(c => c === role)

        guild.channels.delete(guildRole)
    }

    checkChannel(guild, channel){
        let findChannel = guild.channels.cache.find(c => c === channel)

        return findChannel;
    }

    /*
---- GUILD ----
*/
    setGuildName(guild, name){
        guild.setName(name)
    }

    setGuildIcon(guild, icon){
        guild.setIcon(icon)
    }

    setModerationLevel(guild, level) {
        guild.setVerificationLevel(level)
    }

    setExplicitLevel(guild, level){
        guild.setExplicitContentFilter(level)
    }

    setSlowMode(message, seconds, reason){
        message.channel.setRateLimitPerUser(seconds, reason)
    }

    /*
---- EMOJI'S ----
*/

    createEmoji(guild, url, name){
        guild.emojis.create(url, name)
    }

    deleteEmoji(guild, id){
        let emoji = guild.emojis.cache.find(emoji => emoji.name == value);

        if(emoji){
            guild.emojis.delete(emoji)
        }

        if(!emoji){
            return console.log("This emoji isnt found.")
        }
    }
}

module.exports = GuildManager;