const express = require("express");
const router = express.Router();

const transactionController = require("./transactionController");
const userController = require("./testUserController");

//USER
router.post("/register", userController.register);
router.post("/login", userController.login);
// router.get("/getUserData/:id", userController.getUserData);
router.get("/users/new/:id", userController.findOneUser);
router.get("/logged", userController.findOneUser);
router.put("/users/:id", userController.updateUser);
router.patch("/users/new/:id", userController.addNewTransaction);
router.delete("/users/deleteTransaction/:uId/:tId", userController.deleteTransaction);
router.get("/users", userController.findAllUsers);
router.get("/context", userController.context);
//TRANSACTION

router.post("/transaction", transactionController.postTransaction);
router.delete("/transaction/:id", transactionController.deleteTransaction);
router.put("/transaction/:id", transactionController.updateTransaction);
router.get("/transactions", transactionController.getAllTransactions);
router.get("/transaction/:id", transactionController.findOneTransaction);

module.exports = router;
