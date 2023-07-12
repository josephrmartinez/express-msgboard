const mongoose = require("mongoose");
const { DateTime } = require("luxon")

const Schema = mongoose.Schema;

const MsgSchema = new Schema({
    text: { type: String, required: true, maxLength: 140 },
    user: { type: String, required: true, maxLength: 40 },
    added: { type: Date }
})

MsgSchema.virtual("date_formatted").get(function (){
    return DateTime.fromJSDate(this.added).toLocaleString(DateTime.DATE_MED)
})

// Export model
module.exports = mongoose.model("Msg", MsgSchema)