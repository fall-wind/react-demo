import PropTypes from 'prop-types'
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux' 

//to fixed regeneratorRuntime is not defined
import 'babel-polyfill'
import './styles/index.less'
import RootRouter from './router'
import store from './store'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {

	render(){
		return (
			<Provider store={store} >
				 <RootRouter />
			</Provider>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('root'))