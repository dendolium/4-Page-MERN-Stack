const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AreaScehma = new Schema ({
    name: {
        type: String,
        required: true 
    },
    date: {
        type: Date,
        default: Date.now
    }
})


const CountrySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Country = mongoose.model('Country', CountrySchema);
