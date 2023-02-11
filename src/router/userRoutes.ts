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

module.exports = router;
