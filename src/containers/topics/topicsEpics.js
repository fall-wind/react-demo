import { ajax } from 'rxjs/observable/dom/ajax'

export const fetchEpics = action$ => {
    return (
        action$.ofType('HOME_try')
                .mergeMap(action =>
                    ajax.getJSON(`https://cnodejs.org/api/v1/topics`)
                        .map(data => ({
                            type:'HOME_getCodeDates',
                            data:data.data
                        }))
                )
    )
}
