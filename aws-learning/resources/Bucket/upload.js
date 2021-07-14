var AWS = require('aws-sdk');
const fs = require('fs');
var path = require('path');

var s3 = new AWS.S3({
    endpoint: "http://localhost:4566",
    accessKeyId: 'dev',
    secretAccessKey: 'dev',
    s3ForcePathStyle: true,
});

const uploadFile = (bucket, file_name) => {
    const fileName = file_name;
    var fileStream = fs.createReadStream(fileName);
    const params = {
        Body: fileStream,
        Bucket: bucket,
        Key: path.basename(fileName),
    }

    s3.putObject(params, (err, results) => {
        if (err) console.error("Error: ", err)
        else console.log("Success", results)
    })
};
uploadFile('example02', 'json-data.json');
