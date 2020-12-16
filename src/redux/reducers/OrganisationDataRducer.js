import {types} from '../types'


const initialState = {
    organisation: {},
}

export const OrganisationDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ORGANISATION_DATA:
            return {
                ...state,
                organisation: action.organisation,
            }
        default:
            return state
    }
}

export const setOrganisationData = (organisation) => ({
    type: types.SET_ORGANISATION_DATA, organisation
})
