const express = require('express');

const app = new express();

app.get("/", (req, res) => {
  res.send("Bot is Online !");
})

app.listen(3000, () => console.log(" "))