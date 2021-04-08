const { Client, Collection, Intents } = require("discord.js")
const { readdirSync } = require('fs')
const { normalize, join } = require('path')

class Cliento extends Client{
  constructor(){
    super({ messageSweepInterval: 100, messageCacheLifetime: 180, messasgeCacheMaxSize: 200, ws: {intents: Intents.ALL}})
    this.commands = new Collection();
    this.aliases = new Collection();
    this.events = new Collection();
    this.description = new Collection();
    this.usage = new Collection()
    this.prefix = 's!'
  };
  getCommand(cmd) {
    return this.commands.get(cmd) || this.commands.get(this.aliases.get(cmd));
  };
  start(cmdPath, eventPath) {
    this.login(process.env.BOT_TOKEN);
    readdirSync(join(process.cwd(), cmdPath)).map((data) => {
      const file = require(join(process.cwd(), cmdPath, data));
      this.commands.set(file.name, file);
      if(file.aliases) file.aliases.map((alias) => this.aliases.set(alias, file.name))
    });
     readdirSync(join(process.cwd(), eventPath)).map((data) => {
      const file = require(join(process.cwd(), eventPath, data));
     this.events.set(file.name, file);
     this.on(file.name, file.run.bind(null, this))
    });
  }
}
module.exports = Cliento;