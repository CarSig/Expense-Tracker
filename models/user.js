const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    username: { type: String, required: true, min: 3, max: 20, unique: true },
    email: { type: String, required: true, max: 50, unique: true },
    password: { type: String, required: true, min: 6 },
    transactions: [{ type: mongoose.Types.ObjectId, ref: 'Transaction' }], // array of transaction objects with _id, amount, category, comment, date
    categories: { type: Array, default: [] },
    comments: [{ type: mongoose.Types.ObjectId, ref: 'Comment' }],
    theme: { type: String, default: "light" },
    settings: { type: Object, default: {} }, //settings for user
  },
  // {
  //   toObject: { virtuals: true },
  //   toJSON: { virtuals: true },
  //   timestamp: true,
  // }
);
const User = mongoose.model("User", UserSchema); // User is the name of the collection in the database (users)

// // virtual property
// UserSchema.virtual("transactions", {
//   ref: "Transaction",
//   foreignField: "user",
//   localField: "_id",
// });

module.exports = User;
