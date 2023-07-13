var express = require('express');
var router = express.Router();
const { DateTime } = require("luxon");

// require controllers
const msg_controller = require("../controllers/messageController");



/* GET home page. */
router.get('/', msg_controller.msg_list);

router.get('/new', function(req, res, next){
  res.render('form', { title: "Add Message"})
})

// router.post('/new',function(req, res, next){
//   // update to ADD value to database
//   messages.push({text: req.body.messageText, user: req.body.messageAuthor, added: DateTime.now().toLocaleString(DateTime.DATETIME_MED)})
//   res.redirect('/')
// } )

router.get('/:id/delete', msg_controller.delete_msg)

module.exports = router;
