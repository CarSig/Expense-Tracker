const express = require("express");
const router = express.Router();

const transactionController = require("./transactionController");
const userController = require("./userController");

//USER
router.post("/register", userController.register);
router.post("/login", userController.login);
// router.get("/users/:id", userController.findOneUser);
router.put("/users/:id", userController.updateUser);

//TRANSACTION

router.post("/transaction", transactionController.postTransaction);
router.delete("/transaction/:id", transactionController.deleteTransaction);
router.put("/transaction/:id", transactionController.updateTransaction);
router.get("/transactions", transactionController.getAllTransactions);
router.get("/transaction/:id", transactionController.findOneTransaction);

module.exports = router;
