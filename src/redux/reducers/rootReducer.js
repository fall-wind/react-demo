import {combineReducers} from 'redux'
import topics from '../../containers/topics/topicsReducer'
import topicDetail from '../../containers/topicDetail/topicDetailReducer'
//import {routerReducer} from 'react-router-redux'
const rootReducer = combineReducers({
	topics,
	topicDetail,
})


export default rootReducer