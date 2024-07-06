import multer from 'multer'
import multerS3 from 'multer-s3'
import aws from 'aws-sdk'
import dotenv from 'dotenv'
dotenv.config();


aws.config.update({
    region:process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESSKEY,
      secretAccessKey: process.env.AWS_SECRETKEY,
    }
   
});
const s3=new aws.S3();

//cb->callback
//acl ->access control for file 
// key->name of the file
// metadata->metadata  object sent to s3

//multer object also have multer-s3 object 
// all parameters in multer-s3 are from documentation

const upload=multer({
    storage:multerS3({
        s3:s3,
        acl: 'public-read',
        bucket:process.env.BUCKET_NAME,
        
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
          },
          key: function (req, file, cb) {
            cb(null, Date.now().toString())
          }
    })
});

export default upload;


