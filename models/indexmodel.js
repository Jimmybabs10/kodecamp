const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
   name: String,
   course: String,
   year: String 
});

const kodeCampSchema = mongoose.model('kodecampop', testSchema);

module.exports = kodeCampSchema;