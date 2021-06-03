import express from "express";
import models from "../../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jwtVerify } from "../../middleware/authMiddleware.js";

const router = express.Router();

// Register Faculty
router.post("/", async (req, res) => {
  const body = req.body;
  if (body) {
    await models.Faculty.create({
      email: body.email,
      name: body.name,
      password: body.password,
    })
      .then(() => {
        res.json({ message: "User Created" });
      })
      .catch((err) => {
        const errors = [];
        if (err) {
          err.errors.map((x) => errors.push(x.message));
        }
        res.status(209).send(errors);
      });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await models.Faculty.findOne({ where: { email: email } });
  if (!user) {
    const error = { error: "User doesn't exists" };
    res.send(error);
  }

  bcrypt.compare(password, user.password).then(async (match) => {
    if (!match) {
      res.json({ error: "Wrong Username and password" });
    }

    const accessToken = jwt.sign(
      {
        username: user.email,
        id: user.id,
      },
      "THISISASECRET",
      {
        expiresIn: "2h",
      }
    );
    res.json({ auth: true, token: accessToken, userId: user.id });
  });
});

// create profile

router.post("/course", async (req, res) => {
  const body = req.body;
  const { name, courseId, dept, desc, room, waitlist, team, facId } = body;
  if (body) {
    await models.Course.create({
      name: name,
      courseId: courseId,
      dept: dept,
      desc: desc,
      room: room,
      waitlist: waitlist,
      team: team,
      facultyId: facId,
    })
      .then((res) => {
        res.json({ message: "Course Created" });
      })
      .catch((err) => {
        res.send(err);
      });
  }
});

// Get Faculty
router.get("/:id", jwtVerify, async (req, res) => {
  const { id } = req.params;
  const profile = await models.Faculty.findOne({ where: { id: id } });
  if (!profile) {
    res.send({ error: "No profile data found" });
  }

  res.json(profile);
});
// Get Course
router.get("/course/:id", jwtVerify, async (req, res) => {
  const { id } = req.params;
  const course = await models.Course.findAll({ where: { facultyId: id } });
  if (!course) {
    res.send({ error: "No profile data found" });
  }

  res.json(course);
});
export default router;
