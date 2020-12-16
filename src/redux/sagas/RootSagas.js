import {take , call , all} from 'redux-saga/effects'
import {watchFetchDataSaga} from "./fetchOrganisationSaga";


export default function* RootSaga(){
    yield all([
        watchFetchDataSaga()
    ])
}

