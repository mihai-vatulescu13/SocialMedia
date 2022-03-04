const router = require("express").Router();
const Message = require("../models/messages");

router.post("/addMessage", async (req, res) => {
  const { message, providerId, conversationId } = req.body;
  try {
    const newMessage = new Message({
      conversationId,
      message,
      providerId,
    });

    await newMessage.save();
    res.status(200).json("success");
  } catch (err) {
    console.error(err);
    res.status(500).json("failed to get the message");
  }
});

router.get("/getMessages/:conversationId", async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });

    messages
      ? res.status(200).json(messages)
      : res.status(404).json("not found");
  } catch (err) {
    console.error(err);
    res.status(500).json("failed to get the message");
  }
});

module.exports = router;
