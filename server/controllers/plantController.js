const models = require('../models/plantModels.js');

const plantController = {}

plantController.getPlants = (req, res, next) => {
    console.log('You are trying to get your plants!')
    models.Plant.find({})
      .then((plants) => {
        console.log(plants)
        res.locals.plants = plants;
        return next();
      })
      .catch(err => console.log("error at getPLants middleware:", err));
}

plantController.addPlant = (req, res, next) => {
    console.log("sat")
  const { plantName } = req.body;
  models.Plant.create({ plantName })
    .then((plant) => {
        res.locals.plant = plant;
        return next();
    })
    .catch((err) => console.log("error at addPLant middleware:", err));
  
}



module.exports = plantController;