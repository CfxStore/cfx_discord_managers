# <p align="center"><a>CFX Discord Managers</a></p>

<p align="center"><a href="https://nodei.co/npm/cfx_discord_managers/"><img alt="npm package stats" src="https://nodei.co/npm/cfx_discord_managers.png"></a></p>

# Features

* GuildUserManager <br>
``
addRole, removeRole, banUser, unbanUser, kickUser, warnUser, unWarn, checkWarns, cleanWarns.
``

* GuildManager <br>
 ``
 createRole, deleteRole, createMuteRole, createChannel, deleteChannel, checkChannel, setGuildName, setGuildIcon,
 setModerationLevel, setExplicitLevel, setSlowMode, createEmoji, deleteEmoji
 ``
 
 # Install from [NPM](https://www.npmjs.com/package/cfx_discord_managers)

`$ npm i cfx_discord_managers --save`

# Example Usage

```js
// Asign a variable to the module to acces it..
const _cfx = require('cfx_discord_managers');

// In this example we will use "quick.db"
const db = require('quick.db')

// Asign a variable to the GuildUserManager! 
let guildUserManager = new _cfx.getGuildUserManager(db, message, guild)

// Use the module.
let user = message.guild.members.cache.find(member => member == message.mentions.users.first())
guildUserManager.warnUser(user, "You have broke rule: #1")
```

# Contributing

Feel free to create any issues and PRs in our [github repository](https://github.com/CfxStore/cfx_discord_managers) if
you want to contribute.

© CFX Store | 2022.