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

router.post('/new', msg_controller.post_msg)

router.get('/:id/delete', msg_controller.delete_msg)

module.exports = router;
