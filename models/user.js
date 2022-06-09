const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: { type: String, required: true, min: 3, max: 20, unique: true },
  email: { type: String, required: true, max: 50, unique: true },
  password: { type: String, required: true, min: 6 },
  transactions: { type: Array, default: [] }, // array of transaction objects with _id, amount, category, comment, date
  categories: { type: Array, default: [] },
  comments: { type: Array, default: [] }, //comments for transactions
  theme: { type: String, default: "light" },
  settings: { type: Object, default: {} }, //settings for user
});
const User = mongoose.model("UserExpense", UserSchema); // UserExpense is the name of the collection in the database (users)

module.exports = User;
