import TweetService from "../services/tweet-service.js";
const tweetservice =new TweetService();
export const createTweet=async(req,res)=>{
    try {
        const response =await tweetservice.create(req.body);
        return res.status(201).json({
            success:true,
            message:'successfully created a new tweet',
            data:response,
            err:{}
        })
    } catch (error) {
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
