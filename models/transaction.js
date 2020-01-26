const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: "Please Enter transaction name"
    },
    value: {
        type: Number,
        required: "Please Enter a value for the transaction"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Transaction = mongoose.model("transaction", transactionSchema);

module.exports = Transaction;