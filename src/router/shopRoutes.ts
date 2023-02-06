import express from "express";

// import * as service from "../service/todoService";
// import { Params } from "../types/Req";

const router = express.Router();

router.get("/teste", async (req, res) => {
  const params = req.params;

  // const userId = params.userId;

  const tasks = "aaa";

  res.json(tasks);
});

module.exports = router;
