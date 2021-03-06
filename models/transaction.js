const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const TransactionSchema = new Schema({
  amount: { type: Number, required: [true, "Please add a positive or negative number"] },
  category: { type: String, required: true },
  comment: { type: String },
  date: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  repeating: { type: String, default: "no" },

});
const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;



// TODO: also populate
//   category: { type: Schema.Types.ObjectId, ref: "Category" },