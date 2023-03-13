const { Schema, model } = require("mongoose");

const chatRoomSchema = new Schema(
    {
      userIds: [{type: Schema.Types.ObjectId, ref:"User"}],
      messages: [{type: Schema.Types.ObjectId, ref:"Message"}]
    },
    {
      timestamps: true,
    }
  );

  const ChatRoom = model("ChatRoom", chatRoomSchema);

module.exports = ChatRoom;
