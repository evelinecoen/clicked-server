const { Schema, model } = require("mongoose");

const messageSchema = new Schema(
  {
  author: {type: Schema.Types.ObjectId, ref:"User"},
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});



const Message = model("Message", messageSchema);

module.exports = Message;





 


   /* 
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
    }, */