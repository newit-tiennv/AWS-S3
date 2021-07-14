var AWS = require('aws-sdk');
const fs = require('fs');

var s3 = new AWS.S3({
    region: "ap-northeast-1",
    endpoint: "http://localhost:4566",
    s3ForcePathStyle: true,
    accessKeyId: 'dev',
    secretAccessKey: 'dev',
});

const createBucket = (bucket_name) => {
    const params = {
        Bucket: bucket_name,
    }

    s3.createBucket(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data); // successful response
    });
}

createBucket('example02');