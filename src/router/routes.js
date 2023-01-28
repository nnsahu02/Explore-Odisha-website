const exprss = require('express')
const router = exprss.Router()
const locationController= require('../controller/userController')

const { createLocation, updateLocation, DeleteLocation } = require('../controller/adminController')


router.post('/location', createLocation)

router.put('/:locationId/updatelocation', updateLocation)

router.delete('/:locationId/deletelocation', DeleteLocation)



router.get('/findLocation',locationController.findLocation)

module.exports = router