import {takeEvery, call, put} from 'redux-saga/effects'
import {types} from '../types'
import {API} from "../../api/api";
import {fetchOrganizeDataFailure, fetchOrganizeDataSuccess} from "../reducers/fetchOrganizationDataRducer";


function* asyncFetchRequest(action) {
    try {
        const response = yield call(() => API.OrganizeRegistration(action.payload))
        console.log(response);
        console.log(action)
        yield put(fetchOrganizeDataSuccess(response))
    } catch (error) {
        yield put(fetchOrganizeDataFailure(error))
    }
}

export function* watchFetchDataSaga() {
    yield takeEvery(types.SEND_REQUEST, asyncFetchRequest)
}
