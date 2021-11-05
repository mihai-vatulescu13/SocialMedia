const router = require('express').Router()
//get User model:
const UsersModel = require('../models/users');

router.get('/users', async (req, res) => {

  try {
    //.find() method find all records from the database:
    const users = await UsersModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json('nada');
  }
})

module.exports = router;