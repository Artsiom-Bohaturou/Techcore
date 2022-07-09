import avatar from '../icons/Image.png';

export const DELETE_LOCATION = 'DELETE_LOCATION';
export const ADD_LOCATION = 'ADD_LOCATION'

const initialState = {
    locationsList: [
        { id: 0, countryName: 'Australia', holidaysLink: '', leavePolicies: '', users: [{ avatar }, { avatar }, { avatar }, { avatar }], isDefault: true },
        { id: 1, countryName: 'Belarus', holidaysLink: '', leavePolicies: '', users: [{ avatar }, { avatar }, { avatar }], isDefault: false },
        { id: 2, countryName: 'USA', holidaysLink: '', leavePolicies: '', users: [{ avatar }, { avatar }, { avatar }], isDefault: false },
        { id: 3, countryName: 'Canada', holidaysLink: '', leavePolicies: '', users: [{ avatar }, { avatar }, { avatar }], isDefault: false },
    ]
}

export default function LocationSettingsReducer(state = initialState, action) {
    switch (action.type) {
        case DELETE_LOCATION:
            return {
                ...state,
                locationsList: state.locationsList.filter((e) => e.id !== action.locationId),
            }
        case ADD_LOCATION:
            return {
                ...state,
                locationsList: [
                    ...state.locationsList,
                    action.data
                ]
            }
        default:
            return state;
    }
}