const { Schema, model } = require("mongoose");

const chatMessageSchema = new Schema(
    {
      _id: {
        type: String,
      },
      chatRoomId: String,
      message: mongoose.Schema.Types.Mixed,
      type: {
        type: String,
      },
      postedByUser: String,
    },
    {
      timestamps: true,
      collection: "chatmessages",
    }
  );

  const ChatMessage = model("ChatMessage", chatMessageSchema);

  module.exports = ChatMessage;