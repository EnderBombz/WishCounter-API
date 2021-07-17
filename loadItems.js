const Canvas = require("canvas");
const { Client, MessageAttachment, Collector } = require("discord.js")

module.exports = async(message, canvas, x, cordi) => {

    const context = canvas.getContext("2d");
    console.log(x.name);

    context.restore();
    const avatarBG = await Canvas.loadImage(`./src/images/tier/${x.rarity}.png`)
    const avatar = await Canvas.loadImage(`./src/images/characters/avatar/charAvatar_${x.name}.png`) //message.author.displayAvatarURL({ format: `jpg` }))

    context.save();
    context.beginPath();
    context.arc(cordi.cutCord.x, cordi.cutCord.y, 50, 0, Math.PI * 2, true);
    context.clip();
    context.save();
    context.drawImage(avatarBG, cordi.cord.x, cordi.cord.y, 100, 100)
    context.restore();
    context.drawImage(avatar, cordi.cord.x, cordi.cord.y, 100, 100)
    context.arc(cordi.cutCord.x, cordi.cutCord.y, 50, 0, Math.PI * 2, true);
    context.clip();
    context.restore();
    context.closePath();

    for (let i = 0; i < cordi.grid; i++) {
        context.restore();
        context.save();
    }

    cordi.cord.x = cordi.cord.x + cordi.cordOffset;
    cordi.cutCord.x = cordi.cutCord.x + cordi.cutOffset;

    if (cordi.cord.x > canvas.width - 100) {
        cordi.cord.x = cordi.startCordXY;
        cordi.cord.y = cordi.cord.y + cordi.cordOffset;
        cordi.cutCord.x = cordi.startCutXY;
        cordi.cutCord.y = cordi.cutCord.y + cordi.cutOffset
    }
    if (cordi.cord.y > 200) {
        cordi.cord.x = cordi.startCordXY;
        cordi.cord.y = cordi.startCordXY;
        cordi.cutCord.x = cordi.startCutXY;
        cordi.cutCord.y = cordi.startCutXY;

        const attachment = new MessageAttachment(canvas.toBuffer(), `grid_${cordi.grid}.png`);
        message.channel.send(``, attachment).then(() => {

        });

        context.clearRect(0, 0, canvas.width, canvas.height);
        cordi.grid++;
    }
    cordi.now++
        if (cordi.now == cordi.size) {
            const attachment = new MessageAttachment(canvas.toBuffer(), 'paimon.png');
            message.channel.send(``, attachment);

            cordi.startCordXY = 25;
            cordi.startCutXY = 75;
            cordi.cord = { x: 25, y: 25 };
            cordi.cutCord = { x: 75, y: 75 };
            cordi.cordOffset = 110;
            cordi.cutOffset = 110;
            cordi.grid = 0;
            cordi.now = 0;
        }
}