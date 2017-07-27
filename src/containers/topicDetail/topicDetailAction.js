import fetch from 'isomorphic-unfetch'

export const getTopicDetailData = (id) => async (dispatch) => {
    const res = await fetch(`https://cnodejs.org/api/v1/topic/${id}`)
    const result = await res.json()
    if (result.success) {
        dispatch({
            type: 'TOPIC_DETAIL_getTopicDetail', 
            data: result.data
        })
    }
}