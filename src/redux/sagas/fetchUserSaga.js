import {takeEvery, call, put} from 'redux-saga/effects'
import {types} from '../types'
import {API} from "../../api/api";
import {setAppError, setAppIsLoading, setAppSuccess} from "../reducers/AppReducer";
import {setUserData} from "../reducers/UserDataReducer";


function* asyncFetchUserDataRequest(action) {
    yield put(setAppIsLoading(true))
    try {
        const response = yield call(() => API.registration(action.payload, 'user'))
        yield put(setUserData(response))
        yield put(setAppIsLoading(false))
        yield put(setAppSuccess())
    } catch (error) {
        yield put(setAppError(error))
        yield put(setAppIsLoading(false))
    }
}

export function* watchFetchUserDataSaga() {
    yield takeEvery(types.SET_USER_DATA, asyncFetchUserDataRequest)
}
