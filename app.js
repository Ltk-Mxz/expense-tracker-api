require("express-async-errors");
const express = require("express");
const cors = require("cors");
const errorHandler = require("./handlers/errorHandler");
const mongoose = require("mongoose");
const userRoutes = require("./modules/users/users.routes");
const transactionRoutes = require("./modules/transactions/transactions.routes");

// Dotenv
require("dotenv").config();

// Express App
const app = express();
app.use(cors());
app.use(express.json());

// Mongoose DB
mongoose
  .connect(process.env.mongo_connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000, // 30 seconds
    socketTimeoutMS: 45000, // 45 seconds})
  })
  .then(() => {
    console.log("MongoDB connection successfully!");
  })
  .catch(() => {
    console.log("MongoDB connection failed!");
  });

// Models...
require("./models/users.model");
require("./models/transactions.model");

// Routes...
app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionRoutes);

app.all("*", (req, res, next) => {
  res.status(400).json({
    status: "Failed!",
    message: "Not found!",
  });
});

// Error handler Middleware!
app.use(errorHandler);

// Start the server!
app.listen(8000, () => {
  console.log("Server started successfully!");
});
