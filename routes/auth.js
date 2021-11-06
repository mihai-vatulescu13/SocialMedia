const router = require('express').Router()
const User = require('../models/users');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //create a new object to store the user data and then save in the db:
    const newUser = new User({
      name: name,
      email: email,
      password: password
    })

    //save the user to the database:
    const user = await newUser.save();
    res.status(200).json(user);

  } catch (err) {
    console.log(err);
    res.status(500).json('Bad server request');
  }

})

module.exports = router