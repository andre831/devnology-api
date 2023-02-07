import express from "express";
import * as env from "dotenv";

env.config();

const PORT = 3333;

const APP = express();

APP.use(express.json());

APP.use("/", require("./src/router/shopRoutes"));

APP.use((req, res, next) => {
  res.status(404);

  return res.json({
    success: false,
    payload: null,
    message: "No Loaded JSON",
  });
});

APP.listen(PORT, () =>
  console.log("API SERVER READY => http://localhost:" + PORT)
);
