import express from "express";
import cors from "cors";
import * as env from "dotenv";
import prisma from "./src/database/client";

env.config();

const PORT = 8082;

const APP = express();

APP.use(express.json());

APP.use(cors());

APP.use("/user", require("./src/router/userRoutes"));

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

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit();
});
