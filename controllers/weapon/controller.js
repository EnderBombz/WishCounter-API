const { Weapons } = require("./../../schema/schemas")

exports.getAll = async(req, res) => {


    try {
        const weapons = await Weapons.find({});
        console.log(weapons)
        res.send(weapons);
    } catch (err) {
        throw err
    }



}

exports.getOne = async(req, res) => {

    try {
        let query = req.params.query;

        const weapons = await Weapons.findOne({ name: query });
        console.log(weapons)
        res.send(weapons);
    } catch (err) {
        throw err
    }

}

exports.pushToDB = (req, res) => {

    const aerosiderite = require("../../../WishCounter-bot/src/week/weapons/Aerosiderite.json")
    const borealwolf = require("../../../WishCounter-bot/src/week/weapons/BorealWolf.json")
    const dandeliongladiator = require("../../../WishCounter-bot/src/week/weapons/DandelionGladiator.json")
    const decarabian = require("../../../WishCounter-bot/src/week/weapons/Decarabian.json")
    const guyun = require("../../../WishCounter-bot/src/week/weapons/Guyun.json")
    const leadelixir = require("../../../WishCounter-bot/src/week/weapons/LeadElixir.json")

    aerosiderite.itens.forEach(x => {
        const item = new Weapons({
            name: x.name,
            rarity: x.rarity,
            icon: x.icon,
            type: x.type
        })
        item.save()
    })
    borealwolf.itens.forEach(x => {
        const item = new Weapons({
            name: x.name,
            rarity: x.rarity,
            icon: x.icon,
            type: x.type
        })
        item.save()
    })
    dandeliongladiator.itens.forEach(x => {
        const item = new Weapons({
            name: x.name,
            rarity: x.rarity,
            icon: x.icon,
            type: x.type
        })
        item.save()
    })
    decarabian.itens.forEach(x => {
        const item = new Weapons({
            name: x.name,
            rarity: x.rarity,
            icon: x.icon,
            type: x.type
        })
        item.save()
    })
    guyun.itens.forEach(x => {
        const item = new Weapons({
            name: x.name,
            rarity: x.rarity,
            icon: x.icon,
            type: x.type
        })
        item.save()
    })
    leadelixir.itens.forEach(x => {
        const item = new Weapons({
            name: x.name,
            rarity: x.rarity,
            icon: x.icon,
            type: x.type
        })
        item.save()
    })
    res.send({ message: "sucesso ao enviar as armas" })
}