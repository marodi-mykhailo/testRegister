import {types} from '../types'


const initialState = {
    loading: false,
    user: {},
    error: {}
}

export const fetchOrganiseReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEND_REQUEST:
            return{
                ...state,
                loading:true
            }
        case types.SEND_REQUEST_SUCCESS:
            return{
                ...state,
                loading:false,
                user: action.user,
                error: {}
            }
        case types.SEND_REQUEST_FAILURE:
            return{
                ...state,
                loading:false,
                user:{},
                error: action.error
            }
        default:
            return state
    }
}

export const fetchOrganiseData = (data) => ({
    type: types.SEND_REQUEST,
    data
})


export const fetchOrganiseDataSuccess = (user) => ({
    type: types.SEND_REQUEST_SUCCESS,
    user
})

export const fetchOrganiseDataFailure = (error) => ({
    type: types.SEND_REQUEST_FAILURE,
    error
})
