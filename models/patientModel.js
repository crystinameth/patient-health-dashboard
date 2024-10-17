const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  medicalHistory: { type: String },
  treatmentPlan: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
