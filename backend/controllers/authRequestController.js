const AuthRequest = require('../models/authRequestModel');

// Get all prior authorization requests
const getAuthRequests = async (req, res) => {
  try {
    const requests = await AuthRequest.find().populate('patientId');
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new prior authorization request
const addAuthRequest = async (req, res) => {
  try {
    const newRequest = new AuthRequest(req.body);
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAuthRequests, addAuthRequest };
