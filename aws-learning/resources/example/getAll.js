var AWS = require("aws-sdk");
require('../config.js');

var DynamoDB = new AWS.DynamoDB();

/**
 * Function get items
 * @param {string} table 
 */
const getItems = (table) => {
    const params = {
        TableName: table
    }

    DynamoDB.scan(params, function (err, data) {
        if (err) console.error("Error: ", err)
        else {
            console.log(data.Items);
            return data.Items;
        }
    })
}
getItems(`TableHasSearchKey`);