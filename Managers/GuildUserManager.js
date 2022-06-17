class GuildUserManager {
    constructor(database, message, guild) {
        this.database = database;
        this.message = message;
        this.guild = guild;
    }

   /*
  ---- ROLES ----
    */

    addRole(role) {
        return this.message.member.roles.add(role.id);
    }

    removeRole(role) {
        return this.message.member.roles.remove(role.id);
    }

    checkRole(user, role) {
        const member = this.guild.members.fetch(user);
        if (!member) return;

        let hasRole = user.roles.cache.find(r => r.id === role);
        return hasRole;
    }


    /*
   ---- MODERATION - BAN/KICK ----
     */

    banUser(user, reason) {
        const member = this.message.guild.members.fetch(user);
        if (!member) return this.message.channel.send({content: "The given user cannot be found."});

        user.ban({reason: reason})
    }

    unbanUser(user) {
        const banList = this.messag.guild.bans.fetch().then(bans => {
            let findUser = bans.has(user.id)
            if (!findUser) return this.message.channel.send({content: "This user isn't banned."});

            this.message.guild.members.unban(user.id)
        })
    }

    kickUser(user, reason) {
        const member = message.guild.members.fetch(user);
        if (!member) return message.channel.send({content: "The given user cannot be found."});

        user.kick({reason: reason})
    }

    /*
---- MODERATION - WARN ----
 */


    warnUser(user, reason){
        let warnCount = this.database.get(`${user.id}.warns.active`)
        warnCount++

        let warnHistory = this.database.get(`${user.id}.warns.history`)
        warnHistory++

        this.database.set(`${user.id}.warns.active`, warnCount)
        this.database.set(`${user.id}.warns.history`, warnHistory)

        if(warnCount === 3){
            if(!user.bannable) return this.message.channel.send({content: "This user cannot be banned."});
            this.kickUser(user, reason)
        }

        if(warnCount === 5){
            if(!user.bannable) return this.message.channel.send({content: "This user cannot be banned."});
            this.banUser(user, reason)
        }
    }

    removeWarn(user){
        let warnCount = this.database.get(`${user.id}.warns.active`)
        let newCount = Number(warnCount) - Number(1);

        this.database.set(`${user.id}.warns.active`, newCount)
    }

    checkWarns(user){
        return this.database.get(`${user.id}.warns.active`)
    }

    clearWarns(user){
        return this.database.set(`${user.id}.warns.active`, 0)
    }
}


module.exports = GuildUserManager;
