const express = require("express");
const connect = require("./config/database");
const app = express();
// const Tweet = require("./models/tweet");
const TweetRepository = require("./repository/tweet-repository");
const Comment=require('./models/comment');
app.listen(3000, async () => {
  console.log(`server started`);
  await connect();
  console.log("mongodb connected");
  // const tweet=await  Tweet.create({
  //     content:'third tweet',
  //     // userEmail:"a@b.com"
  // });
  // const tweets=await Tweet.find({userEmail:"a@b.com"});
  const tweetRepo = new TweetRepository();
//   const tweet =await tweetRepo.create({content:"tweet with comment schema"})
//   console.log(tweet);
// const comment=await Comment.create({content:'new comment'});
// tweet.comments.push(comment);
// await tweet.save();
const tweet=await tweetRepo.getWithComments('661e0b4500b140e7ef004ce3')
console.log(tweet);
  // console.log(tweets);
});

