const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        var kelimeler = [
'Sevdiğin Kişi Kim?',
'Bu masadan birinin senin yerine tweet/instagram gönderisi atmasına izin ver.',
'Bu masadan birinin senin yerine birine mesaj atmasına izin ver.',
'Bu masadan birinin taklidini yap ama kim olduğunu söyleme.',
'Herkesin önünde kendi kareografinle dans et.',
'Aile bireylerinden birini ara ve onu çok korkutacak bir şaka yap.',
'Bir dakika boyunca plank pozisyonunda dur.',
'Çok kötü çıktığını düşündüğün bir fotoğrafı sosyal medyada paylaş.',
'En son attığın 5 mesajı yüksek sesle oku.',
'Masadaki insanların en sevmediğin özelliklerini söyle.',
'Hoşlandığın kişinin en eski instagram gönderilerinden birini beğen.',
'Hakkında bir doğru ve bir yanlış bilgi paylaş. Masadakiler hangisinin doğru olduğunu tahmin etsin.',
'Gizli yeteneğini göster.',
'Rastgele bir numara çevir ve karşıdaki kişiye bir fıkra anlat.',
'En sevdiğin kıyafetlerinden birini bir arkadaşına hediye et.',
'Eski sevgilini ara ve onu çok özlediğini söyle.',
'Telefonunu bu masadan birine ver ve tüm gün boyunca gelen mesajları/aramaları o yanıtlasın.',
'Herkesin önünde en sevdiğin şarkıyı baştan sona söyle.',
'Instagramda karşına çıkan ilk 5 hikayeye cevap ver.',
'Sıradaki 5 dakika boyunca masadakiler ne derse onu yap.',
'Bir gün boyunca sadece arkadaşlarının zevkine göre giyin.,',
        ]

        let kelimerandom = kelimeler[Math.floor(Math.random() * kelimeler.length)]

        const kelime = new Discord.MessageEmbed()
        .setDescription("**" + kelimerandom + "**")
        .setColor('RANDOM')
        message.channel.send(kelime)
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [ 'cesaret' ],
    permLevel: 0
}

exports.help = {
    name: 'cesaret'
}