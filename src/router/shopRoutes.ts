import express from "express";

import * as shopService from "../services/shopService";

// import * as service from "../service/todoService";
// import { Params } from "../types/Req";

const router = express.Router();

router.post("/shopcart/:id", async (req, res) => {
  const params = req.params;

  const tasks = shopService.postShopCart(1);

  res.json(tasks);

  res.json(tasks);
});

module.exports = router;
