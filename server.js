const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();

dotenv.config({ path: "./config/config.env" });

const transactions = require("./routes/transactions");

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

//////////

const MONGODB_URI = process.env.MONGODB_URI;

//connection to database
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    mongoose.connection.on("connected", () => {
      console.log("Mongoose is connected!");
    })
  )
  .catch((error) => console.log(error.message));

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// HTTP request logger
app.use(morgan("tiny"));
