const express = require('express')
const ktpControllers = require('../controllers/ktp.js')

const router = express.Router();

// Create Record KTP
router.post('/', ktpControllers.createKTPRecord)

// Get All KTP
router.get('/',ktpControllers.getAllKTPRecord)

// Update KTP Record
router.patch('/:idKtp', ktpControllers.updateKTPById)

// Delete KTP Record
router.delete('/:idKtp', ktpControllers.deleteKTPRecordById)

module.exports = router