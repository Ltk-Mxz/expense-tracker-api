const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const usersModel = require("../../../models/users.model");
const emailManager = require("../../../managers/emailManager");

const resetPassword = async (req, res) => {
  const { email, new_password, reset_code } = req.body;

  if (!email) throw "Email is required!";
  if (!new_password) throw "Password is required!";
  if (!reset_code) throw "Reset code is required!";
  if (new_password.length <= 7)
    throw "Password must be at least 8 characters long!";

  const getUser = await usersModel.findOne({
    email: email,
    reset_code: reset_code,
  });

  if (!getUser) throw "Reset code does not exist!";

  const hashedPassword = await bcrypt.hash(new_password, 15);

  await usersModel.updateOne(
    {
      email: email,
    },
    {
      password: hashedPassword,
    },
    { runValidators: true }
  );

  if (!getUser) throw "This Email does not exist in the system!";

  await emailManager(
    getUser.email,
    "Password reset successfully!",
    `<h1>Your password is reset successfully!</h1>`,
    "Password is reset!"
  );

  res.status(200).json({
    status: "Success!",
    message: "Password reset successfully!",
  });
};

module.exports = resetPassword;
