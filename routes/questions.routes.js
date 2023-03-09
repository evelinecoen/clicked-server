const router = require("express").Router();
const mongoose = require("mongoose");
const Question = require("../models/Question.model")
const User = require("../models/User.model");

// get the user and update with the questionnaire 

router.put("/questions/:id", async (req, res, next) => {
  const { id } = req.params;
  const { questionnaire  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided user id is not valid");
  }

  try {
    const updatedAnswer = await User.findByIdAndUpdate(
      id,
      {questionnaire},
      { new: true }
    );
    res.json(updatedAnswer);
  } catch (error) {
    res.json(error);
  }
});



module.exports = router; 