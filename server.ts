import express from "express";
import cors from "cors";
import * as env from "dotenv";
import prisma from "./src/database/client";

env.config();

const PORT = 3333;

const APP = express();

APP.use(express.json());

APP.use(cors());

APP.use("/login", require("./src/router/authRoutes"));
APP.use("/user", require("./src/router/userRoutes"));
APP.use("/delivery", require("./src/router/deliveryRoutes"));
APP.use("/purchase", require("./src/router/purchaseRoutes"));
APP.use("/shopcart", require("./src/router/shopRoutes"));
APP.use("/resume", require("./src/router/resumeRoutes"));

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
