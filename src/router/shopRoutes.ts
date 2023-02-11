import express from "express";

import * as shopService from "../services/shopService";

const router = express.Router();

router.get("/:userId", async (req, res) => {
  const userId = Number(req.params.userId);

  const cart = shopService.getShopCart(userId);

  if ((await cart).length > 0) {
    return res.json({
      success: true,
      data: await cart,
    });
  }

  return res.status(200).json({
    success: false,
    message: "This user no has products in shop cart",
  });
});

router.post("/", async (req, res) => {
  const body = req.body;

  const cart = shopService.postShopCart(body);

  res.json({
    success: true,
    data: await cart,
  });
});

router.post("/", async (req, res) => {
  const body = req.body;

  const cart = shopService.updateShopCart(body);

  res.json({
    success: true,
    data: await cart,
  });
});

module.exports = router;
