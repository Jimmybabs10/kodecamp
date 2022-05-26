const mongoose = require('mongoose');
const kodeCampSchema = require('../models/indexmodel');


function getcontroller(req, res){
    const { name, course, year } = req.body;
    kodeCampSchema.find({}, function(error, record){
        if(error) console.log(error);
        res.json({
            record
        });
    });
};

module.exports = getcontroller;