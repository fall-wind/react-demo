import fetch from 'isomorphic-unfetch'
import { message } from 'antd'

const rKey = 'login'

export const addUser = (args, callback) => async (dispatch, getState) => {
    const store = getState()[rKey]
    const { isLogin } = store
    if (!isLogin) {
        const res = await fetch(
            '/api/add/user',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...args
                })
            }
        )
        const result = await res.json()
        console.log(result, '????')
        if (result.code == 100) {
            message.info(result.message)
            dispatch({
                type: 'login_setState',
                state: {
                    isLogin: true,
                }
            })
        }
    } else {
        console.log(args, 'rrr')
        const res = await fetch(
            '/xauth/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...args
                })
            }
        )
        const result = await res.json()
        if (result && result.code == '100') {
            message.success('登录成功！')
            callback && callback()
        } else {
            message.error(result.message)
        }
    }
}

export const queryUsers = () => async (dispatch, getState) => {
    const res = await fetch('/api/query/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify({
        //     ...args
        // })
      }
    )
    const result = await res.json()
}