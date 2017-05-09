import React,{Component} from 'react'
import Home from './containers/home'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux' 
import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer'
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger))


class App extends Component {

	render(){

		return <div>hello yt</div>
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))