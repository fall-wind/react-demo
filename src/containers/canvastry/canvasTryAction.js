import fetch from 'isomorphic-unfetch'

export const whyNotUnHMR = value => ({
    type: 'CANVAS_testChange',
    value
})

export const queryCanvasData = () => async () => {
    const res = await fetch('api/about')
    const result = await res.json()
    console.log(result)
}
