const express = require('express')
const ktpControllers = require('../controllers/ktp.js')
const upload = require('../middlewares/multer.js')

const router = express.Router();

// Create Record KTP
router.post('/', ktpControllers.createKTPRecord)

// Get All KTP
router.get('/',ktpControllers.getAllKTPRecord)

// Get KTP BY ktpId
router.get('/:idKtp',ktpControllers.getKTPRecordByKtpId)

// Update KTP Record
router.patch('/:idKtp', ktpControllers.updateKTPById)

// Delete KTP Record
router.delete('/:idKtp', ktpControllers.deleteKTPRecordById)

// Extract KTP Photo
router.post('/extract', upload.single('ktp'), ktpControllers.extractKTPPhoto)

module.exports = router