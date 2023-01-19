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
  const { nickname } = req.body;

  models.Plant.deleteOne({
    "nickname" : nickname
  })
  .then(() => {
    return next();
  })
  .catch((err) => console.log("error at addPlant middleware:", err));
}

plantController.updatePlant = (req, res, next) => {
  console.log("update!")
  console.log(req.body)
  const { body } = req;
  const { prename } = body;
  console.log(body)

  models.Plant.findOneAndUpdate(
    { "nickname":  prename },
    body
  )
  .then((data) => {
    res.locals.plant = data;
    return next();
  })
  .catch((err) => console.log("error at addPlant middleware:", err));
}


module.exports = plantController;