var AWS = require("aws-sdk");
require('../config.js');

var DynamoDB = new AWS.DynamoDB();

/**
 * Function create new item.
 * @param {string} key
 * @param {string} value
 */
 const addItem = (table, h_key, r_key, value) => {
    const params = {
        TableName: table,
        Item: {
            "hash_key": { S: h_key },
            "range_key": { S: r_key },
            "value": { N: value }
        }
    };

    DynamoDB.putItem(params, function (err) {
        if (err) console.error("Error", err)
        else console.log("Added item:", JSON.stringify(params.Item, null, 2));
    });
}

// Add 100 item
while (true) {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            addItem(`TableHasSearchKey`, `hash_${i}`, `rg_${j}`, `${i}${j}`);
        }
    }
    break;
}
