import {combineReducers, createStore, applyMiddleware} from "redux";
import {OrganisationDataReducer} from "../reducers/OrganisationDataRducer";
import createSagaMiddleware from 'redux-saga'
import RootSaga from "../sagas/RootSagas";
import {appReducer} from "../reducers/AppReducer";
import {userDataReducer} from "../reducers/UserDataReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    organisation: OrganisationDataReducer,
    app: appReducer,
    user: userDataReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);


window.store = store;
