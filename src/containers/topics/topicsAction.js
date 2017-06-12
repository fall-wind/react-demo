import fetch from 'isomorphic-unfetch'

export const getcnodeData = () => async (dispatch,getState) => {

    const res = await fetch('https://cnodejs.org/api/v1/topics')
    const result = await res.json()
    
    if(result.success){
        dispatch({
            type:'HOME_getCodeDates',
            data:result.data
        })
    }
}