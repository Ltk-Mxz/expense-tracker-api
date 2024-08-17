const express = require("express");
const auth = require("../../middleware/auth");
const addIncome = require("./addIncome");
const addExpense = require("./addExpense");
const getTransactions = require("./getTransactions");
const deleteTransaction = require("./deleteTransaction");
const editTransaction = require("./editTransaction");
const transactionRoutes = express.Router();

// Routes...

transactionRoutes.use(auth);

// Protected routes

transactionRoutes.post("/addIncome", addIncome);
transactionRoutes.post("/addExpense", addExpense);
transactionRoutes.post("/", getTransactions);

transactionRoutes.delete("/:transaction_id", deleteTransaction);

transactionRoutes.patch("/", editTransaction);

module.exports = transactionRoutes;
