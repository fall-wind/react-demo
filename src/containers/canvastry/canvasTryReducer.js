const initState = {
    change:false
}

export default function canvasTest(state = initState,action){

    switch(action.type){
        case "CANVAS_testChange":{
            return {
                ...state,
                change:action.value
            }
        }
        default :
            return state
    }
}