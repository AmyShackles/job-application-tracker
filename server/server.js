const express = require("express");
const helmet = require("helmet");

const db = require("./data/db.js");
const boardRouter = require("./board/boardRouter");
const listRouter = require("./list/listRouter");
const cardRouter = require("./card/cardRouter");

const server = express();
const port = process.env.PORT || 5000;

db.connectTo("mongodb", "27017", "job-application-tracker")
  .then(() => console.log("\n.... API Connected to database ....\n"))
  .catch(err =>
    console.error(`\n*** ERROR connecting to database****: ${err}\n`)
  );

server.use(helmet());
server.use(express.json());

server.use("/api/boards", boardRouter);
server.use("/api/lists", listRouter);
server.use("/api/cards", cardRouter);

server.get("/", (req, res) =>
  res.send("API is running and can be found at /api paths")
);

server.listen(port, () => console.log(`\n\nAPI running on port ${port}\n\n`));
