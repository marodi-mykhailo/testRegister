import {types} from "../types";

const appInitialState = {
    loading: false,
    error: []
}

export const appReducer = (state = appInitialState, action) => {
    switch (action.type) {
        case types.SET_IS_LOADING:
            return {
                ...state,
                loading: action.isLoading
            }
        case types.SET_FAILURE:
            return {
                ...state,
                error: [action.error]
            }
        case types.SET_SUCCESS:
            return {
                ...state,
                error: []
            }
        default:
            return state
    }
}

export const setAppError = (error) => ({
    type: types.SET_FAILURE, error
})

export const setAppSuccess = () => ({
    type: types.SET_SUCCESS
})

export const setAppIsLoading = (isLoading) => ({
    type: types.SET_IS_LOADING, isLoading
})
