const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Route for refreshing a specific service
router.get('/refresh', serviceController.refreshService);

module.exports = router;
