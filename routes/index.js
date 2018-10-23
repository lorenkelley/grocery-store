// require express
const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const storesController = require('../controllers/stores')
const productsController = require('../controllers/products')
// tell the user to go here 
router.get('/', applicationController.index)

// go into the stores
router.get('/stores', storesController.index)
 
router.get('/stores/new', storesController.new)
router.get('/stores/:storesId', storesController.show)
// go to  a specfic store and find that store by id

 //  go into the store go to the stores id and just get that stores products only
router.get('/stores/:storesId/products', productsController.index)
// go and show one product
router.get('/stores/:storesId/product/:productsId', productsController.show)



//export the router to the other files within the application
module.exports = router