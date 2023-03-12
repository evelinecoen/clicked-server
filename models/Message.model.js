const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Message', messageSchema);








 


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