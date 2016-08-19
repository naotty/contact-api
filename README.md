# Contact API

Contact API by using [serverless/serverless: Serverless Framework – Build web, mobile and IoT applications with serverless architectures using AWS Lambda, Azure Functions, Google CloudFunctions & more\! –](https://github.com/serverless/serverless).


# Install
This manual is running at "dev" stage and "ap-northeast-1" region.   
  
requires Node v4.

```
$ node -v
v4.2.1
```

## 1. Create a default AWS profile, if you don't have one set locally
see [serverless/provider\-account\-setup\.md at master · serverless/serverless](https://github.com/serverless/serverless/blob/master/docs/guide/provider-account-setup.md#amazon-web-services).


## 2. Create SNS topic and subscription(Protocol is email).


## 3. Install Serverless Framework.

```
$ npm install serverless@0.5.6 -g

$ sls -v
0.5.6
```

**[Notice]** Run only Serverless Framework version 0.5.x.


## 4. Git clone this repo.

```
$ git clone https://github.com/naotty/contact-api.git
```


## 5. Install npm packages.

```
$ cd contact-api
$ npm install
```

## 6. Project Init.
Create "dev" stage and select "ap-northeast-1" region.

```
$ sls project create -c true
```

## 7. Add variables.

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
+  "snsTopicArn": "<your topic arn>"
}
```

## 8. Create CloudFormation resources.

```
$ sls resources deploy -s dev
```

## 9. Deploy Lambda Function.

```
$ sls function deploy -s dev
```

## 10. Deploy Endpoint to AWS API Gateway.

```
$ sls endpoint deploy -a -s dev

Serverless: Successfully deployed endpoints in "dev" to the following regions:
Serverless: ap-northeast-1 ------------------------
Serverless:   POST - v1/contacts - https://hogehoge.execute-api.ap-northeast-1.amazonaws.com/dev/v1/contacts
Serverless:   OPTIONS - v1/contacts - https://hogehoge.execute-api.ap-northeast-1.amazonaws.com/dev/v1/contacts
```

## 11. Set endpoint to js file.

```
$ vi client/dist/index.html

$.ajax({
-    url: "<your api gateway endpoint>",
+    url: "https://hogehoge.execute-api.ap-northeast-1.amazonaws.com/dev/v1/contacts",
```


## 11. Deploy contact form to S3 bucket.

```
$ sls client deploy -s dev
```

## 12. Access your contact form.

Url is ``` http://<your bucket name prefix>-dev.s3-website-ap-northeast-1.amazonaws.com ```.


# Uninstall

```
$ sls project remove -s dev
```

And remove API Gateway resources and Lambda functions manually.


# Licence

MIT

