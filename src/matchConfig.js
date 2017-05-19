
import HelloWorld from './containers/HelloWorld'
import PreloadHelloWorld from './containers/PreloadHelloWorld'
import NewPage from './containers/NewPage'
import JsonAPI from './containers/JsonAPI'

const matchConfig = [
  {
    path: '/api',
    component: JsonAPI,
    initState: JsonAPI.initState
  },
  {
    path: '/preload',
    component: PreloadHelloWorld,
    initState: PreloadHelloWorld.initState
  },
  {
    path: '/newpage',
    component: NewPage,
    initState: NewPage.initState
  },
  {
    path: '/',
    component: HelloWorld,
    initState: HelloWorld.initState,
    exact: false
  }
]

export default matchConfig
