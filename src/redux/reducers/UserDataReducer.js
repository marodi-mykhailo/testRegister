import {types} from "../types";

const initialState = {
    isFirstPartDone: false,
    isSecondPartDone: false,
    user: {},
}

export const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER_IS_FIRST_PART_DONE:
            return {
                ...state,
                isFirstPartDone: true,
                user: action.data
            }
        case types.SET_USER_IS_SECOND_PART_DONE:
            return {
                ...state,
                isSecondPartDone: true,
                user: {...state.user, ...action.data}
            }
        case types.SET_USER_DATA:
            return {
                ...state,
                user: {...state.user, ...action.data}
            }
        default:
            return state
    }
}

export const setUserIsFirstPartDone = (data) => ({
    type: types.SET_USER_IS_FIRST_PART_DONE, data
})

export const setUserIsSecondPartDone = (data) => ({
    type: types.SET_USER_IS_SECOND_PART_DONE, data
})

export const setUserData = (data) => ({
    type: types.SET_USER_DATA, data
})


