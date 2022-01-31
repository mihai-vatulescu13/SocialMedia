const router = require("express").Router();
//get User model:
const UsersModel = require("../models/users");

router.get("/getUser/:id", async (req, res) => {
  try {
    const user = await UsersModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json("User not found");
  }
});

router.get("/users", async (req, res) => {
  try {
    //.find() method find all users records from the database:
    const users = await UsersModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json("Not found");
  }
});

router.put("/editUser/:user", async (req, res) => {
  try {
    //before save data into database encrypt the new(edited) password:
    const user = await UsersModel.findByIdAndUpdate(req.params.user, {
      $set: req.body,
    });

    //save the new user informations:
    await user.save();

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

//follow user endpoint:
router.put("/followUser/:id", async (req, res) => {
  const { _id, name, profilePicture } = req.body.foundUser;
  const { userFollowed } = req.body;

  try {
    //if the user is not followed yet then, follow them:
    if (userFollowed === false) {
      //push inside of current user follows array the selected user that will be followed:
      const userFollow = await UsersModel.updateOne(
        { _id: req.params.id },
        {
          $push: {
            following: {
              $each: [{ _id, name, profilePicture }],
            },
          },
        }
      );

      const userFollowed = await UsersModel.updateOne(
        { _id: _id },
        {
          $push: {
            followed: {
              $each: [{ ...req.body.connectedUser }],
            },
          },
        }
      );

      return res.send("Success follow request");
    } else {
      const userUnfollow = await UsersModel.updateOne(
        {
          _id: req.params.id,
        },
        {
          $pull: {
            following: {
              _id: _id,
            },
          },
        }
      );

      const userUnfollowed = await UsersModel.updateOne(
        {
          _id: _id,
        },
        {
          $pull: {
            followed: {
              _id: req.body.connectedUser._id,
            },
          },
        }
      );

      return res.send("Success unfollow request");
    }
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
});

router.delete("/deleteUser/:user", async (req, res) => {
  try {
    //findByIdAndDelete method find the selected object by id from db and delete it:
    await UsersModel.findByIdAndDelete(req.params.user);
    res.status(200).json("deleted");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
