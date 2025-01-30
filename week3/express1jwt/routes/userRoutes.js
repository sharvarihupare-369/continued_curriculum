const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/UserModel");
const { BlackListModel } = require("../models/BlacklistModel");
const { authMiddleware } = require("../middleware/authMiddleware");
const secretKey = process.env.secret_key;
const refreshTokenKey = process.env.refresh_key;
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      res.status(400).send({ message: "User already exists!" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      ...req.body,
      password: hashPassword,
    });
    res.status(200).send({ message: "User Registered successfully!", user });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Something Went Wrong", error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      res
        .status(400)
        .send({ message: "User not found please register first!" });
    }
    const comparePassword = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!comparePassword) {
      res.status(400).send({ message: "Invalid Password" });
    }
    const token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
      },
      secretKey,
      { expiresIn: "1d" }
    );
    const refresh_token = jwt.sign(
      { userId: existingUser._id },
      refreshTokenKey,
      {
        expiresIn: "28d",
      }
    );
    res
      .status(200)
      .send({ message: "User LoggedIn Successfully!", token, refresh_token });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Something Went Wrong", error: error.message });
  }
});

router.get("/logout", authMiddleware, async (req, res) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      return res.status(400).send({ message: "No token provided" });
    }

    const isTokenBlackListed = await BlackListModel.findOne({ token });

    if (isTokenBlackListed) {
      return res
        .status("400")
        .send({ message: "Token is already blacklisted!" });
    }
    const blackListed = await BlackListModel.create({ token });
    res.status(200).send({ message: "User logged out successfully!" });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Something Went Wrong", error: error.message });
  }
});

router.get("/newtoken", (req, res) => {
  try {
    const refreshToken = req.headers["authorization"]?.split(" ")[1];
    if (!refreshToken) {
      return res.status(400).send({ message: "No token provided!" });
    }
    const decoded = jwt.verify(refreshToken, refreshTokenKey);
    if (decoded) {
      const token = jwt.sign({ userId: decoded.userId }, secretKey, {
        expiresIn: "7d",
      });
      return res.send(200).send({ token });
    }else{
      res.send("Invalid refresh token, plz login again")
    }
  } catch (error) {
    res
      .status(400)
      .send({ message: "Something Went Wrong", error: error.message });
  }
});

module.exports = { userRouter: router };
