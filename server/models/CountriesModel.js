const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CountrySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    Areas: [{
        type: String
    }]
})

module.exports = Country = mongoose.model('Country', CountrySchema);
