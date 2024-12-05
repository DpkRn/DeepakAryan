const { sendMessage } = require('../controller/messageController.js');

const router=require('express').Router();
router.post('/sendMessage',sendMessage)

module.exports=router;