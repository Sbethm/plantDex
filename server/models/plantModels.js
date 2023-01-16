const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'plantDex'
})
  .then(() => console.log('Connected to MongoDB!!!!'))
  .catch(err => console.log('Can\'t connect to MongoDB ;('));

const Schema = mongoose.Schema;

const plantSchema = new Schema ({
    nickname: { type: String, required: true},
    water: { type: String, required: true},
    adoptday: { type: String, required: true},
    type: { type: String, required: true}
})

const Plant = mongoose.model('plant', plantSchema);

module.exports = { Plant };
