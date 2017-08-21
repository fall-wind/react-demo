const initState = {
	topicsList: [],
	loadingValue: false,
}

function homeReducer(state = initState, action) {
	switch (action.type) {
		case 'HOME_try': {
			return {
				...state,
				loadingValue: true
			}
		}
		case 'HOME_getCodeDates':
			return	{
				...state,
				topicsList: action.data,
				loadingValue: false
			}
		case 'HOME_changeLoadingStatus': {
			return {
				...state,
				loadingValue: action.loadingValue
			}
		}
		default:
			return state
	}
}

export default homeReducer
