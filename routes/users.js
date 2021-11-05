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

router.put('/editUser/:user', async (req, res) => {
  try {
    const user = await UsersModel.findByIdAndUpdate(req.params.user, {
      $set: req.body
    });

    //save the new user informations:
    await user.save()

    res.status(200).json(user)
  } catch (err) {
    console.log(err)
  }
})

router.delete('/deleteUser/:user', async (req, res) => {
  try {
    await UsersModel.findByIdAndDelete(req.params.user);
    res.status(200).json('deleted');
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;