const { Schema, model } = require("mongoose");

const chatRoomSchema = new Schema(
    {
      _id: {
        type: String,
        default: () => uuidv4().replace(/\-/g, ""),
      },
      userIds: Array,
      type: String,
      chatInitiator: String,
    },
    {
      timestamps: true,
      collection: "chatrooms",
    }
  );

  const ChatRoom = model("ChatRoom", chatRoomSchema);

module.exports = ChatRoom;
