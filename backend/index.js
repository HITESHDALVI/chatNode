const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.post("/authenticate", (req, res) => {
  const { username } = req.body;
  console.log({ username });
  return res.send({ username: username, secret: "sha256..." });
});

app.listen(3000);
