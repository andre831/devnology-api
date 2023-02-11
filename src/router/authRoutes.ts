import express from "express";

import * as authService from "../services/authService";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;

  const user = await authService.login(body);

  if (user.auth) {
    return res.json({
      success: true,
      data: user,
    });
  }

  return res.status(401).json({
    success: false,
    messsage: user.status,
  });
});

router.post("/new", async (req, res) => {
  const body = req.body;

  const createdUser = await authService.signUp(body);

  res.json({
    success: true,
    data: createdUser,
  });
});

module.exports = router;
