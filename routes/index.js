var express = require('express');
var router = express.Router();
const { DateTime } = require("luxon");

// require controllers
const msg_controller = require("../controllers/messageController");


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: DateTime.now().toLocaleString(DateTime.DATETIME_MED)
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: DateTime.now().toLocaleString(DateTime.DATETIME_MED)
  }
];

/* GET home page. */
router.get('/', msg_controller.msg_list);

router.get('/new', function(req, res, next){
  res.render('form', { title: "Add Message"})
})

router.post('/new',function(req, res, next){
  // update to ADD value to database
  messages.push({text: req.body.messageText, user: req.body.messageAuthor, added: DateTime.now().toLocaleString(DateTime.DATETIME_MED)})
  res.redirect('/')
} )

module.exports = router;
