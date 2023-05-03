const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

app.get("/thing", (req, res) => {
  res.status(200).send({
    color: "yellow",
    texture: "void",
  });
});

app.post("/thing/:id", (req, res) => {
  const { id } = req.params;
  const { info } = req.body;

  if (!info) {
    req.status(418).send({ message: "No info!" });
  }

  res.send({
    thing: `ID = ${id} | INFO = ${info}`,
  });
});
