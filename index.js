const express = require('express');

const admins = require("./json/admins.json");
const commands = require("./json/commands.json");

const app = express();

app.get("/", (req, res) => {
  res.json("RoCore Api")
})

app.get("/admin", (req, res) => {
  console.log(admins)
  res.json(admins)
  
})


app.get("/commands", (req, res) => {
  const data = JSON.stringify(commands, 4)
  res.json(data)
  
})

app.listen(8080)