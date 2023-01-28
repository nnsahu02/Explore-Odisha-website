const exprss = require('express')
const router = exprss.Router()
const { findLocation } = require('../controller/userController')
const { createLocation, updateLocation, DeleteLocation } = require('../controller/adminController')

//CREATE LOCATION
router.post('/location', createLocation)

//GET LOCATION
router.get('/findLocation', findLocation)

//UPDATE LOCATION
router.put('/:locationId/updatelocation', updateLocation)

//DELETE LOCATION
router.delete('/:locationId/deletelocation', DeleteLocation)


module.exports = router