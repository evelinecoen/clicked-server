const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");


router.get("/clicks", isAuthenticated, async (req, res, next) => {
  const { _id } = req.payload;
  try {
    const currentUser = await User.findById(_id);
    const response = await User.find({ _id: { $ne: _id } }); // exclude current user from the search

    const match = response.filter((user) => {
      let count = 0;
      for (let i = 0; i < currentUser.questionnaire.length; i++) {
        const currentUserAnswer = currentUser.questionnaire[i];
        const otherUserAnswer = user.questionnaire[i];
        if (currentUserAnswer && otherUserAnswer && currentUserAnswer === otherUserAnswer) {
          count++;
        }
      }
      return count >= 3;
    });

    res.json(match);
    console.log(match);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});



router.get("/clicks/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await User.findById(id);

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
