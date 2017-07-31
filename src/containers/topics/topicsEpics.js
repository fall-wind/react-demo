import { ajax } from 'rxjs/observable/dom/ajax'

export const fetchEpics = action$ =>
    action$.ofType('HOME_try')
        .mergeMap(action => {
                console.log(action)
                return ajax.getJSON('https://cnodejs.org/api/v1/topics')
                .map(data => ({
                    type: 'HOME_getCodeDates',
                    data: data.data
                }))
            }
        )
