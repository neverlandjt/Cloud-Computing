# Cloud Computing Project :cloud:

### Prerequisites:
* AWS Account
* AWS CLI


### Installation :hammer:

1. Clone Project 
2. Create bucket for artifacts
3. Package and Deploy
```sh
$ sam package --template template.yaml --output-template-file output.yaml --s3-bucket <Created Bucket Name>
$ aws cloudformation deploy --template-file output.yaml --stack-name <Stack Name> --capabilities CAPABILITY_IAM
```
4. Go to the | Services --> Cloudformation --> Stack --> Outputs  
  Use `GetApiUrl` and update request url in `static/scriptPost.js` and `static/scriptGet.js`  
  Load `static/` contents to the hosting S3 bucket (default: userregistrationaws)  
  Use `Domain` as your web application domain  
  
  ### Demo  
  URL: https://dv3tm1khgyyzw.cloudfront.net/ 
  
  
