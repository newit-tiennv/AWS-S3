var AWS = require('aws-sdk');

var s3 = new AWS.S3({
    region: "ap-northeast-1",
    endpoint: "http://localhost:4566",
    accessKeyId: 'dev',
    secretAccessKey: 'dev',
    s3ForcePathStyle: true,
});

/**
 * List object
 */

const listObj = (b_name) => {
    const params = {
        Bucket: b_name
    }

    s3.listObjects(params, function (err, data) {
        if (err) console.error('Error: ', err)
        else console.log("List object: ", data)
    })
}

listObj('example02');