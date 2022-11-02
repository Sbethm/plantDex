const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://***********@cluster0.z8aried.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'plantDex'
})
  .then(() => console.log('Connected to MongoDB!!!!'))
  .catch(err => console.log('Can\'t connect to MongoDB ;('));

const Schema = mongoose.Schema;

const plantSchema = new Schema ({
    plantName: { type: String, required: true},
    // plant_Name: { type: String, required: true},
    // plant_Name: { type: String, required: true},
    // plant_Name: { type: String, required: true},
    // plant_Name: { type: String, required: true},
})

const Plant = mongoose.model('plant', plantSchema);

module.exports = { Plant };
