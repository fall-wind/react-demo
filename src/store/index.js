import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable'
import createLogger from 'redux-logger'
import rootReducer from '../redux/reducers/rootReducer'
import rootEpic from '../epics'

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
    return store
}

export default configureStore()
