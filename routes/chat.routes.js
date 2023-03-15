const router = require("express").Router();
const mongoose = require("mongoose");
const ChatRoom = require("../models/ChatRoom.model");
const User = require("../models/User.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

router.post("/chat/:user1/:user2", async (req, res, next) => {
  try {
    const { user1, user2 } = req.params;
    let response = [];

    const chatRoom = await ChatRoom.find({ userIds: { $in: user1 } })
      .populate("messages")
      .populate({
        path: "messages",
        populate: {
          path: "author",
        },
      });

    const thisChatRoom = chatRoom.map((chat) => {
      if (chat.userIds.includes(user2)) {
        return response.push(chat);
      }
    });

    if (response.length > 0) {
      res.json(response);
    } else {
      const newChat = await ChatRoom.create({ userIds: [user1, user2] });

      console.log(newChat);

      res.json(newChat);
    }
  } catch (error) {
    res.json(error);
  }
});

router.get("/chats/:userId", isAuthenticated, async (req, res, next) => {
  const userId = req.payload._id;
  try {
    /*  const { userId } = req.params; */
    console.log(userId);
    const chatRooms = await ChatRoom.find({ userIds: { $in: userId } })
      .populate("userIds")
      .populate({
        path: "userIds",
        populate: {
          path: "imageUrl",
        },
      });
    console.log(chatRooms);
    res.json(chatRooms);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
