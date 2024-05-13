const mongoose=require('mongoose');
const hashtagsSchema=new mongoose.Schema({
title:{
    type:String,
    required:true
},

//what all tweet belonging to this hashtags

tweets:[
    {
        type:mongoose.Schema.Types.ObjectId,     
        //store tweet id 
        ref:'Tweet'
    }
]
},{timestamps:true})

const Hashtag=mongoose.model('hashtag',hashtagsSchema);
module.exports =Hashtag;
