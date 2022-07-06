const config = require("../config.json");

module.exports = {
    name: "market",
    aliases: ["süper-market"],
    execute: async (client, message, args, embed) => {
      if (message.channel.id !== (config.channel.commandchannel)) return message.channel.send(embed.setDescription(`Bu komutu sadece <#${config.channel.commandchannel}> kanalında kullanabilirsin!`))
        const embeddescrim = `#1 ${config.shopping.product.one} "${config.shopping.prices[1]}" dolar.\n#2 ${config.shopping.product.two} "${config.shopping.prices[2]}" dolar.\n#3 ${config.shopping.product.three} "${config.shopping.prices[3]}" dolar.\n#4 ${config.shopping.product.four} "${config.shopping.prices[4]}" dolar. \n#5 ${config.shopping.product.five} "${config.shopping.prices[4]}" dolar. \n#6 ${config.shopping.product.six} "${config.shopping.prices[4]}" dolar.`
        message.channel.send(embed.setDescription(`\`\`\`${embeddescrim}\`\`\``))
    }
}const config = require("../config.json");

module.exports = {
    name: "result",
    aliases: ["içerik"],
    execute: async (client, message, args, embed) => {
      if (message.channel.id !== (config.channel.commandchannel)) return message.channel.send(embed.setDescription(`Bu komutu sadece <#${config.channel.commandchannel}> kanalında kullanabilirsin!`))
        const embedinfo = `${config.shopping.product.one}: ${config.shopping.result[1]}\n${config.shopping.product.two}: ${config.shopping.result[2]}\n${config.shopping.product.three}: ${config.shopping.result[3]}\n${config.shopping.product.four}: ${config.shopping.result[4]}\n${config.shopping.product.five}: ${config.shopping.result[5]}\n${config.shopping.product.six}: ${config.shopping.result[6]}`
        message.channel.send(embed.setDescription(`\`\`\`${embedinfo}\`\`\``))
    }
}