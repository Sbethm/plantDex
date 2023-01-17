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
    console.log(req.body)
  const { nickname,
    water,
    adoptday,
    type      } = req.body;
  models.Plant.create({ nickname,
    water,
    adoptday,
    type      })
    .then((plant) => {
        res.locals.plant = plant;
        return next();
    })
    .catch((err) => console.log("error at addPlant middleware:", err));
  
}

plantController.deletePlant = (req, res, next) => {
  console.log("delete!")
  console.log(req.body)
  const { nickname } = req.body;

  models.Plant.deleteOne({
    "nickname" : nickname
  })
  .then(() => {
    return next();
  })
  .catch((err) => console.log("error at addPlant middleware:", err));
}


module.exports = plantController;