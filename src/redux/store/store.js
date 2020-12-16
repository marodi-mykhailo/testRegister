import {combineReducers, createStore} from "redux";
import {organizationRegisterReducer} from "../reducers/organization-register-reducer";

const rootReducer = combineReducers({
    organization: organizationRegisterReducer
})

export const store = createStore(rootReducer);

window.store = store;
