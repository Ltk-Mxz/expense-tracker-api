const express = require("express");
const register = require("./controller/register");
const login = require("./controller/login");
const userDashboard = require("./controller/userDashboard");
const auth = require("../../middleware/auth");
const forgotPassword = require("./controller/forgotPassword");
const resetPassword = require("./controller/resetPassword");

const userRoutes = express.Router();

// Router
userRoutes.post("/register", register);
userRoutes.post("/login", login);

userRoutes.post("/forgotPassword", forgotPassword);
userRoutes.post("/resetPassword", resetPassword);

// Middleware
userRoutes.use(auth);

// Protected routes
userRoutes.get("/dashboard", userDashboard);

module.exports = userRoutes;
