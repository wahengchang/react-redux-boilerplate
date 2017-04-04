# react-redux-helloworld
Hello, World! app in React and Redux

## Install

```
$ git clone https://github.com/vaibhavmule/react-redux-helloworld.git
$ npm install
```

## Run
```
$ npm start
open http://localhost:3000/

```


## Must Know
`'webpack-hot-middleware/client'` 
Add 'webpack-hot-middleware/client' into the entry array. This connects to the server to receive notifications when the bundle rebuilds and then updates your client bundle accordingly.
```
// ./webpack.config.js
module.exports = {
  ...
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  ...
}
```


