const router = require("express").Router();
const User = require("../models/users");

router.post("/register", async (req, res) => {
  const { name, email, city, password } = req.body;
  console.log('received user data:',req.body)
  
  try {
    //create a new object to store the user data and then save in the db:
    const newUser = new User({
      name: name,
      email: email,
      city: city,
      password: password,
    });

    //save the user to the database:
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json("Bad server request");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    //find the user from database by email address:
    const selectedUser = await User.findOne({ email: email });

    //the password needs to be secured->encrypt and uncrypt later on:
    if (selectedUser.email === email && selectedUser.password === password) {
      res.status(200).json(selectedUser); //return the user token with its status code:
    } else {
      res.status(403).json("Incorrect credentials");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json("Bad server request");
  }
});

module.exports = router;
