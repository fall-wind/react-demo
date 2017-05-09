import {combineReducers} from 'redux'
import home from '../../containers/home/homeReducer'
//import {routerReducer} from 'react-router-redux'
const rootReducer = combineReducers({
	home
})


export default rootReducer