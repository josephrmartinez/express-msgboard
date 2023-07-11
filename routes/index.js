var express = require('express');
var router = express.Router();
const { DateTime } = require("luxon");

DateTime.now().toLocaleString(DateTime.DATETIME_MED)

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

module.exports = router;
