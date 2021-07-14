var AWS = require("aws-sdk");
require('../config.js');

var DynamoDB = new AWS.DynamoDB();

/**
 * Function delete item
 * @param {string} table 
 * @param {string} key 
 * @param {string} value 
 */
const deleteItemHash = (table, key, value) => {
    const params = {
        TableName: table,
        Key: {
            'hash_key': { S: key },
            'range_key': { S: value }
        }
    };

    DynamoDB.deleteItem(params, function (err, data) {
        if (err) console.error("Error", err)
        else console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
    })
};

deleteItemHash(`TableHasSearchKey`, `hash_3`, `range_3`);
