const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "hello from express",
  });
});

app.listen(8080);
