/* const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");

router.get("/clicks", async (req, res, next) => {



  try {


    const response = await User.find();

    const userInfo = {
      name: response.name,
      description: response.email,
      imageURL: response.imageURL,
      questionnaire: response.questionnaire
    }; 

    

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
  }
});
module.exports = router; */



const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");

router.get("/users", async (req, res, next) => {
  const { page = 1, limit = 10, sortBy = "createdAt", sortDir = "desc" } =
    req.query;
  const skip = (page - 1) * limit;
  const sortOptions = { [sortBy]: sortDir === "desc" ? -1 : 1 };

  try {
    const users = await User.find({}, { password: 0 })
      .skip(skip)
      .limit(parseInt(limit))
      .sort(sortOptions);

    const count = await User.countDocuments();

    res.json({
      users,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;


