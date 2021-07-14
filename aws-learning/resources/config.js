
var AWS = require("aws-sdk");

module.export = AWS.config.update({
    region: "ap-northeast-1",
    endpoint: "http://localhost:4569",
    accessKeyId: "dev",
    secretAccessKey: "dev"
});