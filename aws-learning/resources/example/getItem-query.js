var AWS = require("aws-sdk");
require('../config.js');

var DynamoDB = new AWS.DynamoDB();

const getItems = (table, h_key) => {
    const params = {
        TableName: table,
        KeyConditionExpression: 'hash_key = :h_key',
        ExpressionAttributeValues: {
            ':h_key': {S: h_key},
        }
    };

    DynamoDB.query(params, function (err, data) {
        if(err) console.error("Error: ", err)
        else console.log("Get items success: ", data.Items)
    })
};

getItems(`TableHasSearchKey`, `hash_7`);