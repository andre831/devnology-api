import express from "express";

import * as purchaseService from "../services/purchaseDataService";

const router = express.Router();

router.get("/:userId", async (req, res) => {
  const id = Number(req.params.userId);

  const purchaseInfos = purchaseService.getPurchaseDataUser(id);

  res.json({
    success: true,
    data: await purchaseInfos,
  });
});

router.post("/:userId/new", async (req, res) => {
  const body = req.body;

  const createdPurchaseData = purchaseService.createPurchaseDataUser(body);

  res.json({
    success: true,
    data: await createdPurchaseData,
  });
});

router.post("/:userId/update", async (req, res) => {
  const body = req.body;

  const cupdatedInfos = purchaseService.updatePurchaseInfos(body);

  res.json({
    success: true,
    data: await cupdatedInfos,
  });
});

router.delete("/delete", async (req, res) => {
  const id = Number(req.body.id);

  const deletedInfos = purchaseService.deletePurchaseInfos(id);

  res.json({
    success: true,
    data: await deletedInfos,
  });
});

module.exports = router;
