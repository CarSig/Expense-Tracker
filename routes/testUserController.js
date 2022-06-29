const User = require("../models/user");
const Transaction = require("../models/transaction");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const toId = mongoose.Types.ObjectId;

exports.findOneUser = async (req, res) => {

    console.log("params: ", req.params.id);
    await User.findOne({ _id: req.params.id }).then((data) => {
        // console.log("data user JEE: ", data);
        return res.json(data);
    })
        .catch((error) => {
            console.log("Error: ", error);

        });
};

exports.findAllUsers = async (req, res) => {

    await User.find().then((data) => {
        res.json(data);
    })
        .catch((error) => {
            console.log("Error: ", error);
            res.json(data);
        });
};

exports.register = async (req, res) => {

    const data = req.body;
    const newUser = new User(data);

    await newUser.save((error) => {
        if (error) {
            res.status(500).json({ msg: "Ooops, something happened with the server" });
            console.log(error);
        } else {
            res.status(200).json({ msg: "Your data has been saved!!!" });
        }
    });
};

exports.login = async (req, res) => {
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password,
    });

    // AUTHORIZATION 1:)

    if (user) {
        const token = jwt.sign(
            {
                username: user.username,
                email: user.email,
            },
            "secretKey"
        );

        return res.json({ status: "ok", user: token, userData: user });
    } else {
        return res.json({ status: "error", user: false });
    }
};

exports.deleteUser = (req, res) => {
    User.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
        if (error) {
            res.send(error);
        }
        return res.json(deletedItem);
    });
};

exports.updateUser = async (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body.user, { new: true }, (error, updatedData) => {
        if (error) {
            console.log("error" + error);
        } else {
            console.log("data" + req.params);
        }
    });
};