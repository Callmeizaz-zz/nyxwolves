import express from "express";
import bcrypt from "bcrypt";
import models from "../../models/index.js";
import jwt from "jsonwebtoken";
import { jwtVerify } from "../../middleware/authMiddleware.js";

const router = express.Router();

// Register Student
router.post("/", async (req, res) => {
  const body = req.body;
  if (body) {
    await models.Student.create({
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

// create profile

router.post("/profile", async (req, res) => {
  const body = req.body;
  console.log(body.id);
  if (body) {
    const {
      name,
      email,
      image,
      phone,
      country,
      about,
      city,
      company,
      school,
      hometown,
      language,
      gender,
      id,
    } = body;
    await models.Profile.create({
      name: name,
      email: email,
      image: image,
      phone: phone,
      country: country,
      desc: about,
      city: city,
      company: company,
      school: school,
      hometown: hometown,
      language: language,
      gender: gender,
      studentId: id,
    })
      .then((res) => {
        res.json({ message: "Profile Created" });
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

// Login Student

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await models.Student.findOne({ where: { email: email } });
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

// Get profile
router.get("/profile/:id", jwtVerify, async (req, res) => {
  const { id } = req.params;
  const profile = await models.Profile.findOne({ where: { studentId: id } });
  if (!profile) {
    res.send({ error: "No profile data found" });
  }

  res.json(profile);
});

//  Get studetn
router.get("/:id", jwtVerify, async (req, res) => {
  const userId = req.params;
  const user = await models.Student.findOne({ where: { id: userId.id } });
  if (!user) {
    res.send({ error: "No user found" });
  }
  const { name, email, id } = user;
  res.json({ name, email, id });
});

// Update profile

router.post("/update/:id", jwtVerify, async (req, res) => {
  const data = req.body;
  console.log(data);
  const { id } = req.params;

  const update = await models.Profile.update(
    {
      phone: data.phone,
      desc: data.about,
      country: data.country,
      city: data.city,
      school: data.school,
      hometown: data.hometown,
      company: data.company,
      language: data.language,
      gender: data.gender,
    },
    { where: { id: id } }
  );

  if (!update) {
    res.send({ message: "Something went wrong" });
  }

  res.json({ updated: true, message: "Profile successfully updated" });
});

export default router;
