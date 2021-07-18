const express = require('express');
const app = express();
const cors = require('cors')
const routers = require('./routes/router')
const handlebars = require("express-handlebars")
const path = require('path');

app.use(cors({
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.use(express.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, '/public')));

app.get("/", (req, res) => {
    res.send("WishCounter rest API - 2021");
    //res.render("inicio")
})


app.use(routers);

app.listen(process.env.PORT || 5000, () => {
    console.log('running on port 3000')
})