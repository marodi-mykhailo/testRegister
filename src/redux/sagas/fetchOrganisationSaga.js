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
        yield put(setOrganisationData(response))
        yield put(setAppIsLoading(false))
        yield put(setAppSuccess())
    } catch (error) {
        yield put(setAppError(error))
        yield put(setAppIsLoading(false))
    }
}

export function* watchFetchOrganisationDataSaga() {
    yield takeEvery(types.SET_ORGANISATION_DATA, asyncFetchOrganisationDataRequest)
}
