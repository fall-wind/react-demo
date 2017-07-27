import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../redux/reducers/rootReducer'
import createLogger from 'redux-logger'
import rootEpic from '../epics'
import { createEpicMiddleware } from 'redux-observable'

const epicMiddleware = createEpicMiddleware(rootEpic)



function configureStore() {
	const store = createStore(
		rootReducer, 
		compose(
			applyMiddleware(
				epicMiddleware,
				thunkMiddleware,
				createLogger,
			)
		)
		
	)
    return store;
}

export default configureStore()