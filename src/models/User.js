const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        unique: true,
        required: true
    },
    role: {
        type: String,
        required: true 
    },
    address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
);


const User = new mongoose.model("User", userSchema);

module.exports = User;