const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    topic: { type: mongoose.Schema.Types.ObjectId, ref: "ChatTopic" },
    senderId: String,
    messageType: String,
    message: String,
    image: { type: String, default: null },
    giftImage: { type: String, default: null },
    giftsvgaImage: { type: String, default: null },
    giftType: { type: Number, default: 0 },
    giftCount: { type: Number, default: 0 },
    isRead: { type: Boolean, default: false },
    date: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

chatSchema.index({ topic: 1 });

module.exports = mongoose.model("Chat", chatSchema);
