import { ADD_PATIENT, GET_PATIENTS, SET_LOADING, GET_PATIENT_BY_ID } from './types';

const initialState = {
    patients: [],
    patient: null,
    loading: false,
};

const patientReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PATIENT_BY_ID:
            return {
                ...state,
                patient: action.payload, 
                loading: false,
            };
        case GET_PATIENTS:
            return {
                ...state,
                patients: action.payload,
                loading: false,
            };
        case ADD_PATIENT:
            return {
                ...state,
                patients: [...state.patients, action.payload],
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};

export default patientReducer;
