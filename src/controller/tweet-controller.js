import TweetService from "../services/tweet-service.js";
import upload from '../config/file-upload-s3-config.js'
const singleUploader=upload.single('image');

const tweetservice =new TweetService();
export const createTweet=async(req,res)=>{
    try {
        singleUploader(req,res,async function(err,data){
            if(err){
                return res.status(500).json({error:err});

            }
            console.log('Image url is ',req.file);
            const payload={...req.body};
            payload.image=req.file.location;
             const response =await tweetservice.create(payload);
        return res.status(201).json({
            success:true,
            message:'successfully created a new tweet',
            data:response,
            err:{}
        })

        });
       
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'something went wrong in tweet controller',
            data:{},
            err:error
        });
}

}

export const getTweet=async(req,res)=>{
    try {
        const response =await tweetservice.get(req.params.id);
        return res.status(200).json({
            success:true,
            message:'successfully created a new tweet',
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'something went wrong in tweet controller in get fn ',
            data:{},
            err:error
        });
}

}
