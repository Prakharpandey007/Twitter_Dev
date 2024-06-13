import multer from 'multer'
import multers3 from 'multer-s3'
import aws from 'aws-sdk'
import dotenv from 'dotenv'
dotenv.config();

aws.config.update({
    region:process.env.AWS_REGION,
    secretAccessKey:process.env.AWS_SECRETKEY,
    accesskeyId:process.env.AWS_ACCESSKEY
});
const s3=new aws.S3();

//cb->callback
//acl ->access control for file 
// key->name of the file
// metadata->metadata  object sent to s3

//multer object also have multer-s3 object 
// all parameters in multer-s3 are from documentation

const upload=multer({
    storage:multers3({
        s3:s3,
        bucket:process.env.BUCKET_NAME,
        acl:"public-read",
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
          },
          key: function (req, file, cb) {
            cb(null, Date.now().toString())
          }
    })
});

export default upload;

