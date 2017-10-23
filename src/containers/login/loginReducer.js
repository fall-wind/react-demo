const loginInitialState = {
    a: 'hwllo',
    isLogin: true,
}
const login = (state = loginInitialState, action) => {
    switch (action.type) {
        case 'login_setState': {
            return {
                ...state,
                ...action.state,
            }
        }
        default:
            return state
    }
}

export default login