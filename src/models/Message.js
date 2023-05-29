const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
    },
    content: {
        type: String,
        trim: true
    },
},
    { timestamps: true }
);


const Message = new mongoose.model('Message', messageSchema);

module.exports = Message;