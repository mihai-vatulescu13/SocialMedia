const router = require("express").Router();
const Conversation = require("../models/conversations");

router.get("/getConversations/:userId", async (req, res) => {
  try {
    const conversations = await Conversation.find({
      members: {
        $in: [req.params.userId],
      },
    });
    conversations
      ? res.status(200).json(conversations)
      : res.status(404).json("No conversations yet");
  } catch (err) {
    console.error(err);
    res.status(500).json("Failed to get conversations");
  }
});

router.post("/createConversation", async (req, res) => {
  const { userId, friendId } = req.body;
  try {
    const newConversation = new Conversation({
      members: [userId, friendId],
    });

    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation.members);
  } catch (err) {
    console.error(err);
    res.status(500).json("Failed to create conversation");
  }
});

module.exports = router;
