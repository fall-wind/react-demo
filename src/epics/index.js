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
import { fetchEpics } from '_containers/topics/topicsEpics'

export default combineEpics(
    fetchEpics
)
