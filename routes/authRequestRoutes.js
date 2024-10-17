const express = require('express');
const { getAuthRequests, addAuthRequest } = require('../controllers/authRequestController');
const router = express.Router();

router.get('/', getAuthRequests);

router.post('/', addAuthRequest);

module.exports = router;
