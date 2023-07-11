var express = require('express');
var router = express.Router();
const { DateTime } = require("luxon");

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
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Msg Board', messages: messages });
});

router.get('/new', function(req, res, next){
  // res.send("ADD A NEW MESSAGE")
  res.render('form', { title: "Add Message"})
})

router.post('/new',function(req, res, next){
  messages.push({text: messageText, user: messageAuthor, added: DateTime.now().toLocaleString(DateTime.DATETIME_MED)})
} )

module.exports = router;
