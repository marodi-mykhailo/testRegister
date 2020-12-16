import {take, call, all} from 'redux-saga/effects'
import {watchFetchOrganisationDataSaga} from "./fetchOrganisationSaga";
import {watchFetchUserDataSaga} from "./fetchUserSaga";


export default function* RootSaga() {
    yield all([
        watchFetchOrganisationDataSaga(),
        watchFetchUserDataSaga()
    ])
}

