const initState = {
    topic: {}
}

export default function topicDetail(state = initState, action) {
    switch (action.type) {
        case 'TOPIC_DETAIL_getTopicDetail':
            return {
                ...state,
                topic: {
                    ...action.data
                }
            }
        default :
            return state
    }
}
