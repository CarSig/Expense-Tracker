const express = require("express");
const router = express.Router();

const userController = require("./userController");
const transactionController = require("./transactionController");

//USER
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/users/:id", userController.findOneUser);
router.delete("/users/:id", userController.deleteUser);
router.put("/users/:id", userController.updateUser);

//TRANSACTION

router.post("/transaction", transactionController.postTransaction);
router.delete("/transaction/:id", transactionController.deleteTransaction);
router.put("/transaction/:id", transactionController.updateTransaction);
router.get("/transactions", transactionController.getAllTransactions);
router.get("/transaction/:id", transactionController.getOneTransaction);

module.exports = router;
