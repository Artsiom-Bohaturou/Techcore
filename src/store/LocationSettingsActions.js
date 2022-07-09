import { ADD_LOCATION, DELETE_LOCATION } from "./LocationSettingsReducer"

export const deleteLocationAC = (locationId) => {
    return {
        type: DELETE_LOCATION,
        locationId
    }
}

export const addLocationAC = (data) => {
    return {
        type: ADD_LOCATION,
        data
    }
}