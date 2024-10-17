import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Adjust if necessary

export const fetchPatients = async () => {
  const response = await axios.get(`${API_BASE_URL}/patients`);
  return response.data;
};

export const submitAuthRequest = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/prior-auth`, data);
  return response.data;
};
