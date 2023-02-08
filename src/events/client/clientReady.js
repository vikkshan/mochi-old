const Discord = require('discord.js');
const chalk = require('chalk');

module.exports = async (client) => {
    const startLogs = new Discord.WebhookClient({
        id: client.webhooks.startLogs.id,
        token: client.webhooks.startLogs.token,
    });

    console.log(`\u001b[0m`);
    console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.red(`Shard #${client.shard.ids[0] + 1}`), chalk.green(`is ready!`))
    console.log(chalk.blue(chalk.bold(`Bot`)), (chalk.white(`>>`)), chalk.green(`Started on`), chalk.red(`${client.guilds.cache.size}`), chalk.green(`servers!`))

    let embed = new Discord.EmbedBuilder()
        .setTitle(`🆙・Finishing shard`)
        .setDescription(`A shard just finished`)
        .addFields(
            { name: "🆔┆ID", value: `${client.shard.ids[0] + 1}/${client.options.shardCount}`, inline: true },
            { name: "📃┆State", value: `Ready`, inline: true },
        )
        .setColor(client.config.colors.normal)
    startLogs.send({
        username: 'Bot Logs',
        embeds: [embed],
    });


    setInterval(async function () {
      const promises = [
        client.shard.fetchClientValues('guilds.cache.size'),
      ];
      return Promise.all(promises)
        .then(results => {
          const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
          
          const activities = [
            `in ${totalGuilds} servers!`,
            `with ${client.users.cache.size} users!`,
            `in ${client.channels.cache.size} channels!`
        ];
        const statuses = ["dnd", "idle", "online"];
        let activityIndex = 0;
    
        setInterval(() => {
          const activity = activities[Math.floor(Math.random() * activities.length)];
          const status = statuses[activityIndex];
          client.user.setPresence({
              status: status,
              activities: [{ name: `${activity}`}]
          });
    
          activityIndex = (activityIndex + 1) % statuses.length;
        }, 5000);
      });
    }, 5000);
    

      

    client.player.init(client.user.id);
  // Check if is up to date
const { version } = require(process.cwd() + '/package.json');
require("axios").get('https://api.github.com/repos/CorwinDev/Discord-Bot/releases/latest').then(res => {
  if (res.data.tag_name !== version) {
    console.log(chalk.red.bgYellow(`Your bot is not up to date! Please update to the latest version!`, version + ' -> ' + res.data.tag_name));
  }
}).catch(err => {
  console.log(chalk.red.bgYellow(`Failed to check if bot is up to date!`));
});

}

