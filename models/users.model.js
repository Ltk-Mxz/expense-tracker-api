const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Name is required!"],
    },

    email: {
      type: String,
      require: [true, "Email is required!"],
      unique: true,
    },

    password: {
      type: String,
      require: [true, "Password is required!"],
    },

    balance: {
      type: Number,
      required: [true, "Balance is required!"],
      default: 0,
    },

    reset_code: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const usersModel = mongoose.model("users", userSchema);

module.exports = usersModel;
