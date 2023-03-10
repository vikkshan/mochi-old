const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const row = new Discord.ActionRowBuilder()
        .addComponents(
            new Discord.StringSelectMenuBuilder()
                .setCustomId('Bot-linkspanel')
                .setPlaceholder('โโNothing selected')
                .addOptions([
                    {
                        label: `Support server`,
                        description: `Join the suppport server`,
                        emoji: "โ",
                        value: "support-linkspanel",
                    },
                    {
                        label: `Invite Bot`,
                        description: `Invite Bot to your server`,
                        emoji: "๐จ",
                        value: "invite-linkspanel",
                    },
                    {
                        label: `Invite Bot 2`,
                        description: `Invite Bot 2 to your server`,
                        emoji: "๐",
                        value: "invite2-linkspanel",
                    },
                    {
                        label: `Community Server`,
                        description: `Join the community server!`,
                        emoji: "๐",
                        value: "community-linkspanel",
                    },
                    {
                        label: `Top.gg`,
                        description: `Show the top.gg link`,
                        emoji: "๐",
                        value: "top.gg-linkspanel",
                    },
                ]),
        );

    client.embed({
        title: `๐ใปLinks`,
        desc: `Get access to all Bot links! Choose the link you need in the menu below`,
        image: "https://cdn.discordapp.com/attachments/843487478881976381/874694194474668052/Bot_banner_invite.jpg",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 