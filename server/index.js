const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const api = require("./routes/api");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.post("/user", async (res, req) => {
  const user = await prisma.user.create({ data: req.body });
  res.json(user);
});
app.get("/", async (req, res) => {
  const user = await prisma.user.findMany();
  res.json(user);
});

app.use("/api", api);
app.get("/", function (req, res) {
  res.send("Server is up and running!");
});

// replace 3000 with (process.env.PORT)
app.listen(3000, function () {
  console.log("Server is listening");
});
