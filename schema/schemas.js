const mongoose = require("./../database/index");

const Characters = mongoose.model("characters", {
    name: String,
    element: String,
    rarity: Number,
    avatar: String,
    portrait: String,
    teaching: String,
    days: Array,
})

const Weapons = mongoose.model("weapons", {
    name: String,
    rarity: Number,
    icon: String,
    type: String,
})

const Pieces = mongoose.model("pieces", {
    name: String,
    title: String,
    icon: String,
    type: String,
    days: Array,
})

const Tier = mongoose.model("tiers", {
    rarity: Number,
    icon: String,
})




module.exports = { Characters, Weapons, Pieces, Tier };