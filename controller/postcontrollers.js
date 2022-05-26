const mongoose = require('mongoose');
const kodeCampSchema = require('../models/indexmodel');


function postcontroller(req, res){
    const { name, course, year } = req.body;
    const addRecord = new kodeCampSchema({
        name, course, year
    });
    addRecord.save(function(error, record){
        if(error)console.log(error);
        res.json({
            record
        });
    });
};

module.exports = postcontroller;