import mongoose from 'mongoose';

const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,

    },
    userEmail:{
        type:String
    },
    // comments:[
    //     {
    //         content:{
    //             type:String,
    //             require:true
    //         }
    //     }
    // ]
},{timestamps:true});

 const Comment=mongoose.model('Comment',commentSchema);

export default Comment;
