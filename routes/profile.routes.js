/* const router = require("express").Router();
const mongoose = require("mongoose");
const Question = require("../models/Question.model")
const User = require("../models/User.model");


router.get("/profile", async (req, res, next) => {
  try {
    const profile = await User.findById();
    console.log(profile);
    res.json(profile);
  } catch (error) {
    res.json(error);
  }
});


router.post("/profile", async (req, res, next) => {

    const { question1, question2, question3, question4,question5,question6 } = req.body;
  
    try {
      const question = await Question.create({ question1, question2, question3, question4,question5,question6});
      res.json(question);
    } catch (error) {
      res.json(error);
    }
  });

router.get("/edit-profile/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const editProfile = await User.findById(id)
    res.json(editProfile);
  } catch (error) {
    res.json(error);
  }
});

router.put("/questions/:id", async (req, res, next) => {
  const { id } = req.params;
  const { username, desccription, imageURL  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided project id is not valid");
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {username, desccription, imageURL},
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/profile/:id", async (req, res, next) => {
  const { id } = req.params;
 

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided answer id is not valid");
  }

  try {
 
      //remove project
    await User.findByIdAndRemove(id);
    res.json({ message: `Answer with the id ${id} deleted successfully` });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;  */