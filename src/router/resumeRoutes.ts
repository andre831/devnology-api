import express from "express";

import * as resumeService from "../services/resumeShopService";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);

  const resume = resumeService.getResumeShop(id);

  res.json({
    success: true,
    data: await resume,
  });
});

router.post("/", async (req, res) => {
  const body = req.body;

  const resume = resumeService.postResumeShop(body);

  res.json({
    success: true,
    data: await resume,
  });
});

module.exports = router;
