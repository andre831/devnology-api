import express from "express";

import * as authService from "../services/authService";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;

  const user = await authService.login(body);

  console.log(user);

  if (!user[0].authenticated) {
    return res.status(401).json({
      success: false,
      message: "No authenticated",
    });

    return res.json();

    res.sendStatus(401);
  }

  res.json({
    success: true,
    data: await user,
  });
});

module.exports = router;
