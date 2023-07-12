const Msg = require("../models/message");

// const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    const numMsgs = await Promise.all([
        Msg.countDocuments({}.exec())
    ])
})

exports.msg_list = asyncHandler(async (req, res, next) => {
    const allMsgs = await Msg.find({}, "text user added")
        .sort({added: 1 })
        .exec();
    
    res.render("index", {title: "msgboard", messages: allMsgs})

})