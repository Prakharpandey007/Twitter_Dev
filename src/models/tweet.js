const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "Tweet can not be more than 250 characters"], //comment will not be more than 250 words.
    },
    //every tweet has some hashtag -build seprate model for it (showw all the post with this hashtags)

    hashtags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hashtag",
      },
    ],
  },
  { timestamps: true } //timestamp add two properties created at and updated at
);

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
