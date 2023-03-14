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

router.delete('/messages/:id', async (req, res)=> {
  const { id } = req.params;
 
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided message id is not valid");
  }

  try {
 
      //remove message
    await Message.findByIdAndRemove(id);
    res.json({ message: `Answer with the id ${id} deleted successfully` });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;