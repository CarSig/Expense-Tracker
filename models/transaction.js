const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const TransactionSchema = new Schema({
  amount: { type: Number, required: [true, "Please add a positive or negative number"] },
  category: { type: String, required: true },
  comment: { type: String },
  date: { type: Array, default: [] },
});
const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
