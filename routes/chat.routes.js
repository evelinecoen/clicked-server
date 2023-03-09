
const router = require("express").Router();
const mongoose = require("mongoose");
const ChatRoom = require("../models/ChatRoom.model")
const User = require("../models/User.model");

router.post("/chat", async (req, res, next) => {

    const { } = req.body;
  
    try {
      const question = await ChatRoom.create({});
      res.json(question);
    } catch (error) {
      res.json(error);
    }
  });