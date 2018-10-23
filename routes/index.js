// require express
const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const storesController = require('../controllers/stores')

// tell the user to go here 
router.get('/', applicationController.index)

// to see the stores
router.get('/stores', storesController.index)
router.get('/stores/new', storesController.new)
router.get('/stores/:storesId', storesController.show)



//export the router to the other files within the application
module.exports = router