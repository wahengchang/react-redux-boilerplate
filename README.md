# react-redux-boilerplate
 - It is a boilerplate of React-Redux as the infrastructure, which helps to setup a Web APP quickly Edit
 - [Blog](https://hackernoon.com/isomorphic-universal-boilerplate-react-redux-server-rendering-tutorial-example-webpack-compenent-6e22106ae285) : story on Medium
 - [Documentation](https://github.com/wahengchang/react-redux-boilerplate/wiki) : detail about test and architecture
 - [Tutorial](https://github.com/wahengchang/react-redux-boilerplate/wiki/Add-new-page) : add a new page


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
$ ./node_modules/jest/bin/jest.js --watchAll #runs all tests
```


# Server Rendering Structure
![Server Rendering structure](https://cdn-images-1.medium.com/max/1500/1*uu7MvpLsU-UUzYCG42M8hA.jpeg "React Redux server rendering structure")
Above is the structure of how the whole app works, the app bases on Express web framework, which serves only one route, with res.sendFile function to put index.html into the browser. Inside the scoop of the structure, what we are interested is the blue box, the interaction between react component, redux, root component, store and reducer.

# React-Redux Structure
![React-Redux Structure](https://cdn-images-1.medium.com/max/1500/1*OueT3QJ51YGt2lwCdkw2sQ.jpeg "React Redux Structure of data, store, props, state and component")
_**index.js**_ , as the entry file and a high level root component, which gathers all the sub-component as the subtree of the Virtual DOM, also it is the only file entangled with many independent modules. Apart from it, different file requires independent modules, which makes clean code and work independently.

## Must Know
#### `<Provider>` 
It magically make the store available to all container components in the application without passing it explicitly. You only need to use it once when you render the root component:
```
import { Provider } from 'react-redux'
let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

#### `connect( ... )`
Connecting a React component to Redux allows the component to use the top-level store without having to pass the store down as a prop through its parent components

#### `combineReducers( ... )`
It turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

#### `createStore( ... )`
To create a store the createStore(reducer, [initialState], [enhancer]) which will be passed in <Provider>:

#### `Container Components VS Presentational Components`
Components could be divided into two categories, I also heard Fat and Skinny, Smart and Dumb, Stateful and Pure, Screens and Components:
1. Container Components: Provide the data and behavior to presentational or other container components.
2. Presentational Components: 1) Have no dependencies on the rest of the app, 2) Are concerned with how things look.


## Credit
[https://github.com/vaibhavmule/react-redux-helloworld](https://github.com/vaibhavmule/react-redux-helloworld)
