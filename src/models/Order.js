const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    to: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    transporter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    manufacturerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

},
    { timestamps: true }
);


const Order = new mongoose.model("Order", orderSchema);

module.exports = Order;