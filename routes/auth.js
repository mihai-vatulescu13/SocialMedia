const router = require("express").Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //create a new object to store the user data and then save in the db:
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT));
    const newPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name: name,
      email: email,
      password: newPassword,
    });

    //save the user to the database:
    const user = await newUser.save();
    res.status(200).json({ name: user.name, _id: user._id });
  } catch (err) {
    console.log(err);
    res.status(500).json("Bad server request");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    //find the user from database by email address:
    const user = await User.findOne({ email: email });
    !user && res.status(404).json("User not found");
    const validPassword = await bcrypt.compare(password, user.password);
    !validPassword
      ? res.status(400).json("wrong password")
      : res.status(200).json({ name: user.name, _id: user._id });
  } catch (err) {
    console.error(err);
    res.status(500).json("Bad server request");
  }
});

module.exports = router;
