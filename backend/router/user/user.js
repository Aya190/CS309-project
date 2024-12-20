const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUser, getUserByEmail, getUserById } = require("../../db/user");
const { uploadHandler } = require("../upload/upload");

const router = express.Router();

const JWT_SECERT = "aya";

const getTokenFromHeaders = (req) => {
  const header = req.headers["authorization"];
  if (!header) {
    return null;
  }

  const parts = header.split(" ");
  if (parts.length === 2) {
    return parts[1];
  }

  return null;
};

const authenticated = async (req, res, next) => {
  const token = getTokenFromHeaders(req);

  try {
    const payload = jwt.verify(token, JWT_SECERT);
    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({
      message: "invalid token",
    });
  }
};

const userAdmin = async (req, res, next) => {
  const token = getTokenFromHeaders(req);

  try {
    const payload = jwt.verify(token, JWT_SECERT);
    const userId = payload.id;
    const user = await getUserById(userId);
    if (!user.isAdmin) {
      throw new Error("not admin");
    }
    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({
      message: "invalid token",
    });
  }
};

const createUserToken = (user) =>
  jwt.sign(
    { email: user.email, id: user.id, isAdmin: user.isAdmin },
    JWT_SECERT,
    {
      expiresIn: "10h",
    },
  );

router.get("/me", authenticated, async (req, res) => {
  res.json(req.user);
});

router.post(
  "/signup",
  uploadHandler.single("profileImage"),
  async (req, res) => {
    const { email, name, password } = req.body;
    if (!email || !name || !password || !req.file) {
      res.status(400).json({
        message: "invalid input",
      });
      return;
    }

    const userExists = await getUserByEmail(email);
    if (userExists) {
      res.status(400).json({
        message: "user already exists",
      });
      return;
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await createUser(email, name, passwordHash, req.file.filename);
    const token = createUserToken(user);

    res.json({
      token,
    });
  },
);

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      message: "invalid input",
    });
    return;
  }

  let user = await getUserByEmail(email);
  if (!user) {
    res.status(400).json({
      message: "user not found",
    });
    return;
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    res.status(401).json({
      message: "unautorized",
    });
    return;
  }

  const token = createUserToken(user);

  res.json({
    token,
  });
});

module.exports = {
  router,
  authenticated,
  userAdmin,
};