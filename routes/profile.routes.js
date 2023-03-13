const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");

router.get("/profile/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await User.findById(id);
    console.log(response);
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.put("/profile/:id", async (req, res, next) => {
  const { id } = req.params;
  const { imageUrl, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided user id is not valid");
  }

  try {
    const updatedProfile = await User.findByIdAndUpdate(
      id,
      { imageUrl, description },
      { new: true }
    );
    res.json(updatedProfile);
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
 
      //remove profile
    await User.findByIdAndRemove(id);
    res.json({ message: `Answer with the id ${id} deleted successfully` });
  } catch (error) {
    res.json(error);
  }
});


/* const userInfo = {
  name: response.name,
  description: response.email,
  imageURL: response.imageURL,
  questionnaire: response.questionnaire
}; */



  /*


  router.post("/profile", async (req, res, next) => {

    const { name, imageURL, description, questionnaire } = req.body;
  
    try {
      const response = await User.create({ name, imageURL, description, questionnaire});
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
*/
module.exports = router;
