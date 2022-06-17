class DatabaseManager {
    constructor(db) {
        this.db = db;
    }


    /*
---- TICKETS ----
 */

    setTicketLimit(guild, limit){
        return this.db.set(`${guild.id}.settings.tickets.limit`, parseInt(limit))
    }

    blacklistUser(guild, user){
        if(!this.db.get(`${guild.id}.${user.id}.ticket.blacklist`)){
            this.db.set(`${guild.id}.${user.id}.ticket.blacklist`, true)

        } else {
            this.db.set(`${guild.id}.${user.id}.ticket.blacklist`, false)
        }
    }

    checkBlacklist(guild, user){
        if(!this.db.get(`${user.id}.ticket.blacklist`)){
            return false;

        } else {
            return true;
        }
    }

}

module.exports = DatabaseManager;