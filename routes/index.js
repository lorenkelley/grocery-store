// 6. 
const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')

// 7. tell the user to go here
router.get('/', applicationController.index)

// 8. export the router to the other files within the application
module.exports = router