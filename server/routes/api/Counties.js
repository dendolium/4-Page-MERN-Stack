const express = require('express');
const router = express.Router();

const Country = require('../../models/CountriesModel');

router.get('/', (req, res) => {
    Country.find()
    .sort({date: -1})
    .then(countries => {
        res.json(countries)
    })
});

router.post('/', (req, res) => {
    const obj = new Country({
        name: req.body.name
    });
    obj.save().then((resp) => {
        res.json(resp)
    }).catch(err => res.json(err))

});

module.exports = router;