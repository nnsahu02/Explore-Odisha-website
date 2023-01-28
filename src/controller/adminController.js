const locationModel = require('../Models/locationModel');



//>----------------------------CREATE-PRODUCT-API----------------------------<


const createLocation = async function (req, res) {
    try {
      let data = req.body;
      
      const productsData = await locationModel.create(data);
      return res.status(201).send({ status: true, data: productsData });
    } catch (err) {
                                  }
  };



module.exports.createLocation = createLocation