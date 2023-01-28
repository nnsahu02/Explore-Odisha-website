const locationModel = require('../model/locationModel');


//>----------------------------CREATE-Location-API----------------------------<

const createLocation = async function (req, res) {
  try {
    let data = req.body;
    const productsData = await locationModel.create(data);
    return res.status(201).send({ status: true, data: productsData });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message })
  }
};

//>----------------------------Update-Location-API----------------------------<

const updateLocation = async (req, res) => {
  try {
    let bodyData = req.body
    let locationId = req.params.locationId

    const updateData = await locationModel.findByIdAndUpdate(
      { _id: locationId },
      { $set: bodyData },
      { new: true }
    )
    return res.status(200).send({ status: true, message: "data updated successfully", data: updateData })
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message })
  }
}

//>----------------------------Delete-Location-API----------------------------<

const DeleteLocation = async (req, res) => {
  try {
    let locationId = req.params.locationId

    const updateData = await locationModel.findByIdAndUpdate(
      { _id: locationId },
      { $set: { isDeleted: true } },
      { new: true }
    )
    return res.status(200).send({ status: true, message: "data Deleted successfully", data: updateData })
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message })
  }
}


module.exports = { createLocation, updateLocation, DeleteLocation }