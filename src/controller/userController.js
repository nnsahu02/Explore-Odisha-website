const locationModel = require('../model/locationModel');

//>----------------------------fIND-Location-API----------------------------<
const findLocation = async function (req, res) {
    try {
        let queryParams = req.query
        let data = await locationModel.find({ $and: [queryParams, { isDeleted: false }] })

        if (data.length == 0) {
            return res.status(404).send({ status: false, message: "No data Found" })
        }
        return res.status(200).send({ status: true, message: 'Location list', data: data })
    }
    catch (error) {
        return res.status(500).send({ status: false, messasge: error.message })
    }
}

module.exports = { findLocation }