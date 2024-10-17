import axios from 'axios';
import { ADD_PATIENT, GET_PATIENTS, SET_LOADING, GET_PATIENT_BY_ID } from './types';

// Action to add a patient
export const addPatient = (patient) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/patients/', patient);
            dispatch({
                type: ADD_PATIENT,
                payload: response.data, 
            });
        } catch (error) {
            console.error('Error adding patient:', error);
        }
    };
};

// Action to get all patients
export const getPatients = () => {
    return async (dispatch) => {
        dispatch(setLoading(true)); 
        try {
            const response = await axios.get('http://localhost:5000/patients/');
            dispatch({
                type: GET_PATIENTS,
                payload: response.data, 
            });
        } catch (error) {
            console.error('Error fetching patients:', error);
        } finally {
            dispatch(setLoading(false)); 
        }
    };
};

// Action to get a patient by ID
export const getPatientById = (patientId) => {
    return async (dispatch) => {
        dispatch(setLoading(true)); 
        try {
            const response = await axios.get(`http://localhost:5000/patients/${patientId}`);
            dispatch({
                type: GET_PATIENT_BY_ID,
                payload: response.data, 
            });
        } catch (error) {
            console.error('Error fetching patient by ID:', error);
        } finally {
            dispatch(setLoading(false)); 
        }
    };
};

// Action to set loading state
export const setLoading = (isLoading) => {
    return {
        type: SET_LOADING,
        payload: isLoading,
    };
};
