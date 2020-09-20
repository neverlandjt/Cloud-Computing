console.log('function starts');

const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

exports.getUsers = function (event, context, callback) {
    console.log('processing event: %j', event);

    let scanningParameters = {
        TableName: 'customers',
        Limit: 100
    };

    db.scan(scanningParameters, function (err, data) {
        if (err) {
            callback(err, null);
        } else {
            let response = {
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                "statusCode": 200,
                "body": JSON.stringify(data),
                "isBase64Encoded": false
            };
            callback(null, response);
        }
    });
};

exports.postUsers = function (event, context, callback) {
    console.log('processing event: ' + JSON.stringify(event, null, 2))
    const data = JSON.parse(event.body);
    let params = {
        Item: {
            Name: data.name ? data.name : "Anonymous",
            Email: data.email,
            Phone: data.phone,
        },

        TableName: 'customers'
    };


    db.put(params, function (err, data) {
        if (err) {
            callback(err, null)
        } else {

            let response = {
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                "statusCode": 200,
                "body": "Added successfully",
                "isBase64Encoded": false
            };
            callback(null, response);
        }
    });
};

