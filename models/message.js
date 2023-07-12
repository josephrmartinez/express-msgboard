const mongoose = require("mongoose");
const { DateTime } = require("luxon")

const Schema = mongoose.Schema;

const MsgSchema = new Schema({
    text: { type: String, required: true, maxLength: 140 },
    user: { type: String, required: true, maxLength: 40 },
    added: { type: Date }
})

module.exports = mongoose.model("Msg", MsgSchema)