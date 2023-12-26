const express = require("express");
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("hello express");
});

app.get('/users', (req, res) => {
  res.send("users express");
});

app.listen(PORT, () => 
  console.log("サーバーが起動しました。"));

