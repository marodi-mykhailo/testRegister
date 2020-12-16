import {takeEvery, call, put} from 'redux-saga/effects'
import {types} from '../types'
import {API} from "../../api/api";
import {
    setOrganisationData
} from "../reducers/OrganisationDataRducer";
import {setAppError, setAppIsLoading, setAppSuccess} from "../reducers/AppReducer";


function* asyncFetchOrganisationDataRequest(action) {
    yield put(setAppIsLoading(true))
    try {
        const response = yield call(() => API.registration(action.payload, 'organisation'))
        console.log(response);
        console.log(action)
        yield put(setOrganisationData(response))
        yield put(setAppIsLoading(false))
        yield put(setAppSuccess())
    } catch (error) {
        yield put(setAppError(error))
        yield put(setAppIsLoading(false))
    }
}

export function* watchFetchDataSaga() {
    yield takeEvery(types.SET_ORGANISATION_DATA, asyncFetchOrganisationDataRequest)
}
