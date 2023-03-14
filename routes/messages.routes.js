const express = require('express');
const router = express.Router();
const ChatRoom = require("../models/ChatRoom.model")
const Message = require('../models/Message.model');

router.post('/messages/:chatId/:user', async (req, res) => {
  try {
const {chatId, user} = req.params
const {text} = req.body

const chatRoom = await ChatRoom.findById(chatId)

const createMsg = await Message.create({
    author: user,
    text: text
})

const savedMsg = await createMsg.save()
const updateChat = await chatRoom.messages.push(savedMsg)
const saveChat = await chatRoom.save()

    res.json(createMsg);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;