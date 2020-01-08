# mattrememberedproject

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Troubleshooting
1. Travis CI
If you get the error as below:
```
API request failed.
Message: Invalid credentials provided.
Reference: 
failed to deploy
```
Try the steps below:
Go to Heroku Account
Manually copy the API Key and then paste it into command line:
For the ones hosted at travis-ci.com:
travis encrypt pasteAPIKeyHere --add deploy.api_key --pro
For the ones hosted at travis-ci.org:
travis encrypt pasteAPIKeyHere --add deploy.api_key --org