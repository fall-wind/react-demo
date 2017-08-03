import { combineEpics } from 'redux-observable'
// console.log(homeEpics)
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo'
import 'rxjs/add/operator/mergeMap'
import * as topicsAllEpics from '_containers/topics/topicsEpics'

// 将所有的epic combineEpics进来
export default combineEpics(
    ...Object.values(topicsAllEpics)
)
