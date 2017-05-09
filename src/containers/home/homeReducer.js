const initState = {
	name:'yt',
}


function homeReducer(state = initState,action) {
	switch(action.type){
		case 'HOME_changeName':
			return	{
				...state,
			}
		default:
			return state
	}
	return state
}

export default homeReducer