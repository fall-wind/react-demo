const initState = {
    change: false
}

function canvasTest(state = initState, action) {
    switch (action.type) {
        case 'CANVAS_testChange': {
            return {
                ...state,
                change: action.value
            }
        }
        default :
            return state
    }
}

export default canvasTest
