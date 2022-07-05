const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CategorySchema = new Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    timesUsed: { type: Number, default: 0 },
    user: { type: Schema.Types.ObjectId, ref: "User" },

});
const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
