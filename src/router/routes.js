const exprss = require('express')
const router = exprss.Router()

const { createLocation, updateLocation, DeleteLocation } = require('../controller/adminController')


router.post('/location', createLocation)

router.put('/:locationId/updatelocation', updateLocation)

router.delete('/:locationId/deletelocation', DeleteLocation)



module.exports = router