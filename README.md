# Contact API

Contact API by using [serverless/serverless: Serverless Framework – Build web, mobile and IoT applications with serverless architectures using AWS Lambda, Azure Functions, Google CloudFunctions & more\! –](https://github.com/serverless/serverless).


# Install
Run at "dev" stage and "ap-northeast-1" region. 

## 1. Install Serverless Framework.

```
$ npm install serverless -g
```

**Notice** Run only Serverless Framework version 0.5.x.

## 2. Create SNS topic and subscription(Protocol is email).
## 3. Git clone this repo.
## 4. Create CloudFormation resources.

```
$ cd project-dir
$ sls resources deploy -s dev
```

## 5. Add variables.

Add S3 bucket name prefix.

```
$ vi _meta/variables/s-variables-dev.json

{
  "stage": "dev",
+  "bucketNamePrefix": "<your bucket name prefix>"
}
```

Add SNS topic arn.

```
$ vi _meta/variables/s-variables-dev-apnortheast1.json

{
  "region": "ap-northeast-1",
  "resourcesStackName": "contact-api-dev-r",
  "iamRoleArnLambda": "arn:aws:iam::00000:role/contact-api-dev-r-IamRoleLambda-xxxxx",
  "apiGatewayApi": "contact-api",
+  "snsTopicArn": "<your topic arn>"
}
```


## 6. Deploy Lambda Function.

```
$ sls function deploy -s dev
```


## 7. Deploy Endpoint to AWS API Gateway.

```
$ sls endpoint deploy -s dev
```


## 8. Access your contact form.


Url is ``` http://<your bucket name prefix>-dev.s3-website-ap-northeast-1.amazonaws.com ```.


# Licence

MIT

