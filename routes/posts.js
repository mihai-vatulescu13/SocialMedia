const router = require('express').Router();
const User = require('../models/users');
const Post = require('../models/posts');

//get Posts
router.get('/getPosts', async (req, res) => {
  try {
    const posts = await Post.find(req.query.user);
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).send('Not login');
    console.log(err);
  }
});
//add new post
router.post('/addPost', async (req, res) => {
  const { description, image, location } = req.body;

  try {
    const user = await User.findById(req.query.user);
    const newPost = new Post({
      userId: user.id,
      description: description,
      image: image,
      location: location,
    });
    await newPost.save();
    res.status(200).send('Succes');
  } catch (err) {
    res.status(501).json(err);
    console.log(err);
  }
});
//edit specific post
router.put('/editPost', async (req, res) => {
  const { location, description, image } = req.body;
  try {
    const user = await User.findOne(req.query);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
