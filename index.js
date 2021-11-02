const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

// svg and varient
app.get("/:coin", (req, res) => {
  const { coin } = req.params;
  const file = path.join(__dirname, "Assets", "svg", "color", coin + ".svg");
  const stream = fs.createReadStream(file);

  stream.on("open", function () {
    res.writeHead(200, {
      "Content-Type": "image/svg+xml",
      "Content-disposition": "inline; filename=" + coin,
    });
    stream.pipe(res);
  });
  stream.on("error", (err) => {
    res.status(404);
    res.send({ error: "Image not found" });
  });
});

// svg and varient
app.get("/svg/:varient/:coin", (req, res) => {
  const { coin, varient } = req.params;
  const file = path.join(__dirname, "Assets", "svg", varient, coin + ".svg");
  const stream = fs.createReadStream(file);

  stream.on("open", function () {
    res.writeHead(200, {
      "Content-Type": "image/svg+xml",
      "Content-disposition": "inline; filename=" + coin,
    });
    stream.pipe(res);
  });
  stream.on("error", (err) => {
    res.status(404);
    res.send({ error: "Image not found" });
  });
});

// size
app.get("/:size/:coin", (req, res) => {
  const { coin, size } = req.params;
  const file = path.join(__dirname, "Assets", size, "color", coin + ".png");
  const stream = fs.createReadStream(file);

  stream.on("open", function () {
    res.writeHead(200, {
      "Content-Type": "image/png",
      "Content-disposition": "inline; filename=" + coin,
    });
    stream.pipe(res);
  });
  stream.on("error", (err) => {
    res.status(404);
    res.send({ error: "Image not found" });
  });
});

// size and varient
app.get("/:size/:varient/:coin", (req, res) => {
  const { coin, size, varient } = req.params;
  const file = path.join(__dirname, "Assets", size, varient, coin + ".png");
  const stream = fs.createReadStream(file);

  stream.on("open", function () {
    res.writeHead(200, {
      "Content-Type": "image/png",
      "Content-disposition": "inline; filename=" + coin,
    });
    stream.pipe(res);
  });

  stream.on("error", (err) => {
    res.status(404);
    res.send({ error: "Image not found" });
  });
});

app.listen(3000, function () {
  console.log("Listening on http://localhost:3000/");
});
