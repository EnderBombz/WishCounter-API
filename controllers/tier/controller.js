const path = require("path")
const { Tier } = require("./../../schema/schemas")

exports.getTier = async(req, res) => {
    const tier = parseInt(req.params.tier)
    const item = await Tier.findOne({ rarity: tier })
    res.send(item);
}

exports.pushTiers = (req, res) => {

    const a = new Tier({
        rarity: 1,
        icon: "https://i.imgur.com/c6pXkNE.png"
    })
    a.save()
    const b = new Tier({
        rarity: 2,
        icon: "https://i.imgur.com/2wx8LG9.png"
    })
    b.save()
    const c = new Tier({
        rarity: 3,
        icon: "https://i.imgur.com/aKL7wrT.png"
    })
    c.save()
    const d = new Tier({
        rarity: 4,
        icon: "https://i.imgur.com/IXGS4Me.png"
    })
    d.save()
    const e = new Tier({
        rarity: 5,
        icon: "https://i.imgur.com/C6bz9Rh.png"
    })
    e.save()

    res.send({ message: "salvo com sucesso" })
}