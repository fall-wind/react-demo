import { combineEpics } from 'redux-observable'
import {fetchEpics} from '_containers/topics/topicsEpics'
//console.log(homeEpics)
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo'

import 'rxjs/add/operator/mergeMap'

export default combineEpics(
    fetchEpics
)