const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2
    res.send(`The result of adding ${num1} and ${num2} is ${result}`)
})

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", (req, res) => {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    res.send("posted")
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})