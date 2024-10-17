import axios from 'axios';
import { ADD_PATIENT, GET_PATIENTS, SET_LOADING, GET_PATIENT_BY_ID, ADD_AUTH_REQUEST, GET_AUTH_REQUESTS, SET_AUTH_LOADING } from './types';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Action to add a patient
export const addPatient = (patient) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/patients/`, patient);
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
            const response = await axios.get(`${API_BASE_URL}/patients/`);
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
            const response = await axios.get(`${API_BASE_URL}/patients/${patientId}`);
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

// Action to add a new authorization request
export const addAuthRequest = (authRequest) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/prior-auth/`, authRequest);
            dispatch({
                type: ADD_AUTH_REQUEST,
                payload: response.data, 
            });
        } catch (error) {
            console.error('Error adding authorization request:', error);
        }
    };
};

// Action to get all authorization requests
export const getAuthRequests = () => {
    return async (dispatch) => {
        dispatch(setAuthLoading(true)); 
        try {
            const response = await axios.get(`${API_BASE_URL}/prior-auth/`);
            dispatch({
                type: GET_AUTH_REQUESTS,
                payload: response.data, 
            });
        } catch (error) {
            console.error('Error fetching authorization requests:', error);
        } finally {
            dispatch(setAuthLoading(false)); 
        }
    };
};

// Action to set loading state for authorization requests
export const setAuthLoading = (isLoading) => {
    return {
        type: SET_AUTH_LOADING,
        payload: isLoading,
    };
};