import { combineReducers } from 'redux'
import topics from '../../containers/topics/topicsReducer'
import topicDetail from '../../containers/topicDetail/topicDetailReducer'
import canvasTest from '../../containers/canvastry/canvasTryReducer'
// import {routerReducer} from 'react-router-redux'
const rootReducer = combineReducers({
	topics,
	topicDetail,
	canvasTest
})

export default rootReducer
