const { Misc } = require("./../../schema/schemas")

exports.getAll = async(req, res) => {
    try {
        const misc = await Misc.find({});
        console.log(misc)
        res.send(misc);
    } catch (err) {
        throw err
    }
}

exports.getOne = async(req, res) => {
    try {
        let query = req.params.query;
        console.log(query)
        const misc = await Misc.findOne({ name: query });
        console.log(misc)
        res.send(misc);
    } catch (err) {
        throw err
    }
}

exports.pushMisc = async(req, res) => {

    const itema = new Misc({
        name: "header",
        image: "https://i.imgur.com/Rjvs1VS.png",
    })
    itema.save()
    const itemb = new Misc({
        name: "yanfei-help",
        image: "https://i.imgur.com/6V8G2TD.png",
    })
    itemb.save()

    res.send("salvo com sucesso")
}