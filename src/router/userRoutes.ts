import express from "express";

import * as userService from "../services/userService";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);

  const user = userService.getUser(id);

  res.json({
    success: true,
    data: await user,
  });
});

router.post("/new", async (req, res) => {
  const body = req.body;

  const createdUser = userService.createUser(body);

  res.json({
    success: true,
    data: await createdUser,
  });
});

module.exports = router;
