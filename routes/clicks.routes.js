const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");

/* router.get("/clicks",  async (req, res, next) => {

  try {
    const response = await User.find();
    res.json(response);
    response.filter()
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });  
  }
}); */

/* router.get("/clicks", isAuthenticated, async (req, res, next) => {
  const { _id } = req.payload;
  try {
    const response = await User.find();

    const filteredResponse = response.filter(
      (user) => user._id.toString() !== _id.toString()
    );

    // res.json(filteredResponse);

    const match = filteredResponse.map((user) => {
      const matchUsers = [];
      let count = 0;
      for (let i = 0; i < user.questionnaire.length; i++) {
        if (user.questionnaire[i]) {
          count++;
        }
        if (count >= 3) {
          matchUsers.push(user);
        }
      }
    }); 

    res.json(match);
    console.log(match);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});  */

router.get("/clicks", isAuthenticated, async (req, res, next) => {
  const { _id } = req.payload;
  try {
    const response = await User.find({ _id: { $ne: _id } }); // exclude current user from the search

    const match = response
      .map((user) => {
        let count = 0;
        for (let i = 0; i < user.questionnaire.length; i++) {
          if (user.questionnaire[i]) {
            count++;
          }
          if (count >= 3) {
            return user;
          }
        }
        return null;
      })
      .filter((user) => user !== null);

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
