const initState = {
	topicsList: []
}

function homeReducer(state = initState, action) {
	switch (action.type) {
		case 'HOME_getCodeDates':
			return	{
				...state,
				topicsList: action.data
			}
		default:
			return state
	}
}

export default homeReducer
