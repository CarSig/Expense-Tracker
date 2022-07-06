const User = require("../models/user");
const Transaction = require("../models/transaction");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const toId = mongoose.Types.ObjectId;

exports.findOneUser = async (req, res) => {

    console.log("params: ", req.params.id);
    await User.findById(req.params.id).populate("transactions").then((data) => {
        // console.log("data user JEE: ", data);
        return res.json(data);
    })
        .catch((error) => {
            console.log("Error: ", error);

        });
};

exports.findAllUsers = async (req, res) => {

    await User.find().populate("transactions").then((data) => {
        res.json(data);
    })
        .catch((error) => {
            console.log("Error: ", error);
            res.json(data);
        });
};


exports.context = async (req, res) => {
    const user = await User.findOne({ username: "lb" }).populate("transactions").then((data) => {
        res.json(data);
    }).catch((error) => {
        console.log("Error: ", error);
        res.json(data);
    })
}



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




exports.getUserData = async (req, res) => {
    console.log("params: ", typeof req.params.id);

    const user = await User.findOne({
        _id: req.params.id,

    }).populate("transactions")
    return res.json(user);
}


exports.login = async (req, res) => {
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password,
    }).populate("transactions")

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

    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedData) => {
        if (error) {
            console.log("error" + error);
        } else {
            console.log("data" + JSON.stringify(req.params));
            console.log("data" + JSON.stringify(req.body));
        }
    });

};
exports.addNewTransaction = async (req, res) => {
    const data = req.body;
    const newTransaction = new Transaction(data);
    await newTransaction.save((error) => {
        if (error) {
            res.status(500).json({ msg: "Ooops, something happened with the server" });
            console.log(error);
        } else {
            User.findByIdAndUpdate(req.params.id, { $push: { transactions: newTransaction } }, { new: true }, (error, updatedData) => {

                if (error) { console.log("error" + error); } else {
                    res.status(200).json({ msg: "Your data has been saved!!!", newTransaction: newTransaction, updatedUser: updatedData });

                }
            }).populate("transactions");


        }
    })
}


exports.deleteTransaction = async (req, res) => {
    await User.findByIdAndUpdate(req.params.uId, { $pull: { transactions: req.params.tId } }, { new: true }).populate("transactions").then((data) => {
        if (data) {

            res.json(data);
        }
    });
}




