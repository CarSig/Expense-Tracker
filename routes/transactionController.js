const express = require("express");
const router = express.Router();
const Transaction = require("../models/transaction");
const User = require("../models/user");

exports.postTransaction = (req, res) => {
  console.log("Body: ", req.body);
  const data = req.body;
  const newTransaction = new Transaction(data);

  // . save()
  newTransaction.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Ooops, something happened with the server" });
    } else {
      res.status(200).json({ msg: "Your data has been saved!!!" });
    }
  });
};

exports.deleteTransaction = (req, res) => {
  Transaction.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
    if (error) {
      res.send(error);
    }
    return res.json(deletedItem);
  });
};

exports.updateTransaction = async (req, res) => {
  Transaction.findByIdAndUpdate(req.params.id, req.body.transaction, { new: true }, (error, updatedData) => {
    if (error) {
      console.log("error" + error);
    } else {
      console.log("data" + req.params);
    }
  });
};

exports.findOneTransaction = async (req, res) => {
  console.log("params: ", req.params.id);
  await Transaction.findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
      res.json(data);
    });
};

exports.getAllTransactions = async (req, res) => {
  await Transaction.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};
