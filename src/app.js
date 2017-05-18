import React,{Component} from 'react'
import Home from './containers/home'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux' 
import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer'

import './styles/index.less'

import RootRouter from './router'
//import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
//import createHistory from 'history/createBrowserHistory'

//const history = createHistory()
//const middleware = routerMiddleware(history)

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const store = createStore(
	rootReducer, 
	applyMiddleware(
		thunkMiddleware, 
		createLogger,
	)
)


class App extends Component {

	render(){
		return <Provider store={store}>
			 <RootRouter />
		</Provider>
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))