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
    !user && res.status(404).send('Not found');
    const newPost = new Post({
      userId: user.id,
      description: description,
      image: image,
      location: location,
    });
    await newPost.save();
    res.status(200).send('Succes');
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});
//edit specific post
router.put('/editPost', async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      { userId: req.query.user },
      {
        $set: req.body,
      }
    );
    post ? await post.save() : res.status(404).send('Not found');
    res.status(200).send('Succes');
  } catch (err) {
    res.status(500).send('Faill');
    console.log(err);
  }
});

//delete post
router.delete('/deletePost', async (req, res) => {
  try {
    const user = await User.findById(req.query.user);
    !user && res.status(404).send('Not found');
    await Post.findOneAndDelete({ userId: user.id });
    res.status(200).send('Succes');
  } catch (err) {
    res.status(500).send('Faill');
    console.log(err);
  }
});
//Like post
router.put('/likePost', async (req, res) => {
  try {
    const post = await Post.findById(req.query.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).send('Like');
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).send('Dislike');
    }
  } catch (err) {
    res.status(500).send('Faill');
    console.log(err);
  }
});

module.exports = router;
