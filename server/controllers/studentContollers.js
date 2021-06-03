import express from "express";
import models from "../../models/index.js";

const router = express.Router();

// Login Student
router.post("/", async (req, res) => {
  const body = req.body;
  if (body) {
    await models.Student.create({
      email: body.email,
      name: body.name,
      password: body.password,
    }).then((res) => {
      res.JSON(res);
    });
  }
});

export default router;
