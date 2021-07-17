const { Characters } = require("../../schema/schemas")

exports.getAll = async(req, res) => {


    try {
        const characters = await Characters.find({});
        console.log(characters)
        res.send(characters);
    } catch (err) {
        throw err
    }



}

exports.getOne = async(req, res) => {

    try {
        let query = req.params.query;
        console.log(query)
        let dividido = query.split("")
        let first = dividido[0].toUpperCase();
        dividido[0] = first;
        console.log(dividido[0]);

        let palavra = "";
        for (let i = 0; i < dividido.length; i++) {
            palavra += dividido[i];
        }
        console.log(palavra);

        const characters = await Characters.findOne({ name: palavra });
        console.log(characters)
        res.send(characters);
    } catch (err) {
        throw err
    }

}

exports.pushToDB = (req, res) => {

    const freedom = require("../../../WishCounter-bot/src/week/teachings/freedom.json")
    const prosperity = require("../../../WishCounter-bot/src/week/teachings/prosperity.json")
    const resistance = require("../../../WishCounter-bot/src/week/teachings/resistance.json")
    const effort = require("../../../WishCounter-bot/src/week/teachings/effort.json")
    const ballad = require("../../../WishCounter-bot/src/week/teachings/ballad.json")
    const gold = require("../../../WishCounter-bot/src/week/teachings/gold.json")

    freedom.characters.forEach(x => {
        const item = new Characters({
            name: x.name,
            rarity: x.rarity,
            avatar: x.icon,
            portrait: x.portrait,
            teaching: freedom.icon,
            days: freedom.days
        })
        item.save()
    })
    prosperity.characters.forEach(x => {
        const item = new Characters({
            name: x.name,
            rarity: x.rarity,
            avatar: x.icon,
            portrait: x.portrait,
            teaching: prosperity.icon,
            days: prosperity.days
        })
        item.save()
    })
    resistance.characters.forEach(x => {
        const item = new Characters({
            name: x.name,
            rarity: x.rarity,
            avatar: x.icon,
            portrait: x.portrait,
            teaching: resistance.icon,
            days: resistance.days
        })
        item.save()
    })
    effort.characters.forEach(x => {
        const item = new Characters({
            name: x.name,
            rarity: x.rarity,
            avatar: x.icon,
            portrait: x.portrait,
            teaching: effort.icon,
            days: effort.days
        })
        item.save()
    })
    ballad.characters.forEach(x => {
        const item = new Characters({
            name: x.name,
            rarity: x.rarity,
            avatar: x.icon,
            portrait: x.portrait,
            teaching: ballad.icon,
            days: ballad.days
        })
        item.save()
    })
    gold.characters.forEach(x => {
        const item = new Characters({
            name: x.name,
            rarity: x.rarity,
            avatar: x.icon,
            portrait: x.portrait,
            teaching: gold.icon,
            days: gold.days
        })
        item.save()
    })
    res.send({ message: "sucesso ao enviar os personagens" })
}