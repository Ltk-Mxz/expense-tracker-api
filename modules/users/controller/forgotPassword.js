const mongoose = require("mongoose");

const usersModel = require("../../../models/users.model");
const emailManager = require("../../../managers/emailManager");

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) throw "Email is required!";

  const getUser = await usersModel.findOne({
    email: email,
  });

  const resetCode = Math.floor(10000 + Math.random() * 90000);

  await usersModel.updateOne(
    {
      email: email,
    },
    {
      reset_code: resetCode,
    },
    { runValidators: true }
  );

  if (!getUser) throw "This Email does not exist in the system!";

  await emailManager(
    getUser.email,
    "Password reset code: " + resetCode,
    `<h1>Password reset code: ${resetCode}</h1>`,
    "Reset your password"
  );

  res.status(200).json({
    status: "Success!",
    message: "Reset code sent to the email successfully!",
  });
};

module.exports = forgotPassword;
