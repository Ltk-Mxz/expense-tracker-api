const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const usersModel = require("../../../models/users.model");
const jwtManager = require("../../../managers/jwtManager");
const emailManager = require("../../../managers/emailManager");

const register = async (req, res) => {
  const userModel = mongoose.model("users");

  const { email, password, confirm_password, name, balance } = req.body;

  // Validation...

  if (!name) throw "Name is required!";
  if (!email) throw "Email must be provided!";
  if (!password) throw "Password must be provided!";
  if (password.length <= 7) throw "Password must be at least 8 character long!";
  if (!(password === confirm_password)) throw "Passwords does not match!";

  const getDuplicateEmail = await userModel.findOne({
    email: email,
  });

  if (getDuplicateEmail) throw "This email already exists!";

  const hashedPassword = await bcrypt.hash(password, 15);

  const createUser = await usersModel.create({
    name: name,
    email: email,
    password: hashedPassword,
    balance: balance,
  });

  const accessToken = jwtManager(createUser);

  await emailManager(
    createUser.email,
    "Welcome to expense tracker! We hope you can manage your expenses easily from our platform!",
    "<h1>Welcome to expense tracker! We hope you can manage your expenses easily from our platform!</h1>",
    "Welcome to Expense Tracker!"
  );

  res.status(201).json({
    status: "Success!",
    message: "User registered successfully!",
    accessToken: accessToken,
  });
};

module.exports = register;
