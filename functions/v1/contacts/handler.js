'use strict';

process.env.TZ = "Asia/Tokyo";
var aws = require('aws-sdk');
var sns = new aws.SNS({apiVersion: '2012-11-05', region: process.env.SERVERLESS_REGION});
var topicArn = process.env.SNS_TOPIC_ARN;

module.exports.handler = function(event, context) {
  var params = {
    Message: JSON.stringify(event, null, '  '),
    Subject: "お問い合わせがありました",
    TopicArn: topicArn
  };
  sns.publish(params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
      context.done("error");
    } else {
      context.succeed('send message.');
    }
  });
};
