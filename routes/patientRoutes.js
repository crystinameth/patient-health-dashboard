const express = require('express');
const { getPatients, getPatientById, addPatient } = require('../controllers/patientController');
const router = express.Router();

router.get('/', getPatients);
router.get('/:id', getPatientById);

router.post('/', addPatient);

module.exports = router;
