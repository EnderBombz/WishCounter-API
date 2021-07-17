const { Pieces } = require("./../../schema/schemas")

exports.getAll = async(req, res) => {


    try {
        const pieces = await Pieces.find({});
        console.log(pieces)
        res.send(pieces);
    } catch (err) {
        throw err
    }



}

exports.getOne = async(req, res) => {

    try {
        let query = req.params.query;

        const pieces = await Pieces.findOne({ name: query });
        console.log(pieces)
        res.send(pieces);
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
    const freedom = require("../../../WishCounter-bot/src/week/teachings/freedom.json")
    const prosperity = require("../../../WishCounter-bot/src/week/teachings/prosperity.json")
    const resistance = require("../../../WishCounter-bot/src/week/teachings/resistance.json")
    const effort = require("../../../WishCounter-bot/src/week/teachings/effort.json")
    const ballad = require("../../../WishCounter-bot/src/week/teachings/ballad.json")
    const gold = require("../../../WishCounter-bot/src/week/teachings/gold.json")


    const item = new Pieces({
        name: aerosiderite.srcTitle,
        icon: aerosiderite.icon,
        title: aerosiderite.title,
        type: "weapon",
        days: aerosiderite.days
    })
    item.save()

    const b = new Pieces({
        name: borealwolf.srcTitle,
        icon: borealwolf.icon,
        title: borealwolf.title,
        type: "weapon",
        days: borealwolf.days
    })
    b.save()
    const c = new Pieces({
        name: dandeliongladiator.srcTitle,
        icon: dandeliongladiator.icon,
        title: dandeliongladiator.title,
        type: "weapon",
        days: dandeliongladiator.days
    })
    c.save()
    const d = new Pieces({
        name: decarabian.srcTitle,
        icon: decarabian.icon,
        title: decarabian.title,
        type: "weapon",
        days: decarabian.days
    })
    d.save()
    const e = new Pieces({
        name: guyun.srcTitle,
        icon: guyun.icon,
        title: guyun.title,
        type: "weapon",
        days: guyun.days
    })
    e.save()
    const f = new Pieces({
        name: leadelixir.srcTitle,
        icon: leadelixir.icon,
        title: leadelixir.title,
        type: "weapon",
        days: leadelixir.days
    })
    f.save()
    const g = new Pieces({
        name: freedom.srcTitle,
        icon: freedom.icon,
        title: freedom.title,
        type: "teaching",
        days: freedom.days
    })
    g.save()
    const h = new Pieces({
        name: prosperity.srcTitle,
        icon: prosperity.icon,
        title: prosperity.title,
        type: "teaching",
        days: prosperity.days
    })
    h.save()
    const i = new Pieces({
        name: resistance.srcTitle,
        icon: resistance.icon,
        title: resistance.title,
        type: "teaching",
        days: aerosiderite.days
    })
    i.save()
    const j = new Pieces({
        name: effort.srcTitle,
        icon: effort.icon,
        title: effort.title,
        type: "teaching",
        days: effort.days
    })
    j.save()
    const k = new Pieces({
        name: ballad.srcTitle,
        icon: ballad.icon,
        title: ballad.title,
        type: "teaching",
        days: ballad.days
    })
    k.save()
    const l = new Pieces({
        name: gold.srcTitle,
        icon: gold.icon,
        title: gold.title,
        type: "teaching",
        days: gold.days
    })
    l.save()


    res.send({ message: "sucesso ao enviar as peças" })
}