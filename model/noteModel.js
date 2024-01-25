const mongoose = require("mongoose");
const noteSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    userId: {
        type: mongoose.Schema.type,
        ref: "User",
        require: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Note", noteSchema);