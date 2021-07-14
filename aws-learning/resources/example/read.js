var AWS = require("aws-sdk");
require('../config.js');

var DynamoDB = new AWS.DynamoDB();

/**
 * Function get item.
 * @param {string} table 
 * @param {string} key 
 * @param {string} value 
 */
const getItem = (table, h_key = null, r_key = null) => {
    const params = {
        TableName: table,
        Key: {
            'hash_key': { S: h_key },
            'range_key': { S: r_key }
        }
    };
    DynamoDB.getItem(params, function (err, data) {
        if (err) console.error("Error: ", err)
        else console.log("Get item success: ", data.Item.value);
    });
}

getItem(`TableHasSearchKey`, `hash_5`, `rg_5`);