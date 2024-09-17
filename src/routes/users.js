const express = require('express')
const usersControllers = require('../controllers/users.js')

const router = express.Router();


// Create New Koordinator
router.post('/',usersControllers.createNewUser)

// Get All Koordinator
router.get('/',usersControllers.getAllUsers)

// Update koordinator
router.patch('/:idUser',usersControllers.updateUser)

// Delete koordinator
router.delete('/:idUser', usersControllers.deleteUser)

module.exports = router;