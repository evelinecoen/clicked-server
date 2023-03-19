const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");
const fileUploader = require("../config/cloudinary.config");

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


router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
 
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  
  res.json({ fileUrl: req.file.path });
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



module.exports = router;
