import express from "express";

import * as deliveryLocalService from "../services/deliveryLocalService";

const router = express.Router();

router.get("/local/:userId", async (req, res) => {
  const userId = Number(req.params.userId);

  const local = deliveryLocalService.getLocal(userId);

  res.json({
    success: true,
    data: await local,
  });
});

router.post("/local/:userId/create", async (req, res) => {
  const body = req.body;

  const newLocal = deliveryLocalService.createLocal(body);

  res.json({
    success: true,
    data: await newLocal,
  });
});

router.post("/local/:userId/:id", async (req, res) => {
  const body = req.body;

  const updatedLocal = deliveryLocalService.updateLocal(body);

  res.json({
    success: true,
    data: await updatedLocal,
  });
});

module.exports = router;
