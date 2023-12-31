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
        .sort({added: -1 })
        .exec();
    res.render("index", {title: "msgboard", messages: allMsgs})
})

exports.delete_msg = asyncHandler(async (req, res, next) => {
    
    await Msg.findByIdAndDelete(req.params.id);
        res.redirect('/')
})

exports.post_msg = asyncHandler(async (req, res, next) => {
    const message = new Msg({
        text: req.body.messageText,
        user: req.body.messageAuthor,
        added: new Date()
    })
    await message.save();
    res.redirect('/')
})