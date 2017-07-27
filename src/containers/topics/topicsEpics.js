import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';

// export function getCnodeTopics(action$) {
//     console.log(action$)
//     return action$.filter(action => action.type === 'HOME_getCodeDates')
//                     .mapTo({type:''})
//         .switchMap(user => {
//                 console.log(user)
//                 ajax.getJSON(`https://cnodejs.org/api/v1/topics`)
//                     .map((a,b) => console.log(a,b))
//             }
//         )
// }

console.log('a hah')
export const fetchEpics = action$ => {
    console.log(action$)
    return action$.ofType('HOME_try')
           .mergeMap(action =>
                ajax.getJSON(`https://cnodejs.org/api/v1/topics`)
                    .map((data) => ({
                        type:'HOME_getCodeDates',
                        data:data.data
                    }))
                )
}

console.log('hahah')