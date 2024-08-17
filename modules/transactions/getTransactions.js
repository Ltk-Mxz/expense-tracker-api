const mongoose = require("mongoose");

const getTransactions = async (req, res) => {
  const transactionsModel = mongoose.model("transactions");

  const transactions = await transactionsModel.find({
    user_id: req.user._id,
    ...req.query,
  });

  res.status(200).json({
    status: "Success!",
    data: transactions,
  });
};

module.exports = getTransactions;
