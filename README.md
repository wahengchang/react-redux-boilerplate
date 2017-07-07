# react-redux-boilerplate
 - It is React-Redux as infrastructure boilerplate, with this developers just focus on developing component, action creator and reducer, without spending time in router, dev/pro build enviroement, wiring up file and express as HTTP server.
 
## Read more
 - [Blog](https://hackernoon.com/isomorphic-universal-boilerplate-react-redux-server-rendering-tutorial-example-webpack-compenent-6e22106ae285) : story on Medium
 - [Storybook Cheatsheet](https://github.com/wahengchang/react-redux-boilerplate/wiki/storybook-cheatsheet)
 - [Documentation](https://github.com/wahengchang/react-redux-boilerplate/wiki) : detail about test and architecture
 - [Adding a new page example](https://github.com/wahengchang/react-redux-boilerplate/wiki/Add-new-page)
 - [Thread upvote/downvote project](https://github.com/wahengchang/react-redux-boilerplate-example)
 

## Install

```
$ git clone https://github.com/wahengchang/react-redux-boilerplate
$ npm install
```

## Run (Develop Mode)
It is runnign in Development mode, enable HMR
 - http://localhost:3000/
 - http://localhost:3000/api , example of fetching data by action, and dispatch to update UI component
 - http://localhost:3000/preload , example of dispatch data before server rendering components

```
$ npm run dev
open http://localhost:3000/

```


## Run (Production Mode)
 - Compiling react/redux script to browser use lib, with webpack default optimized config.
 - Disable unnecessary funtionality which helps to debug in development mode
```
$ npm run build
$ npm run start

```

## Storybook
```
$ npm run storybook
```


## Test
[More detail](https://github.com/wahengchang/react-redux-boilerplate/wiki/Test ): about test of action creater, component, container and reducer 

```
$ npm run test


Test Suites: 4 passed, 4 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        1.824s, estimated 2s

```
or watch mode
```
$ npm run test:watch
```


# Server Rendering Structure
![Server Rendering structure](https://cdn-images-1.medium.com/max/1500/1*uu7MvpLsU-UUzYCG42M8hA.jpeg "React Redux server rendering structure")
Above is the structure of how the whole app works, the app bases on Express web framework, which serves only one route, with res.sendFile function to put index.html into the browser. Inside the scoop of the structure, what we are interested is the blue box, the interaction between react component, redux, root component, store and reducer.

# Shared Components 
![react-redux-universial-container-compont](https://user-images.githubusercontent.com/5538753/27771266-2af87dde-5f7e-11e7-9c7c-ec92b57643aa.jpg)


# React-Redux Structure
![react-helloworld-component-5-20](https://user-images.githubusercontent.com/5538753/27132284-dfaeda12-5140-11e7-9855-7681362a00f8.jpg)
_**index.js**_ , as the entry file and a high level root component, which gathers all the sub-component as the subtree of the Virtual DOM, also it is the only file entangled with many independent modules. Apart from it, different file requires independent modules, which makes clean code and work independently.


## Credit
[https://github.com/vaibhavmule/react-redux-helloworld](https://github.com/vaibhavmule/react-redux-helloworld)
