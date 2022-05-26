const express = require('express');
const app = express();
const indexRouter = require('./router/index');
const getRouter = require('./router/getRoute');
var mongoose = require('mongoose');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', indexRouter);
app.use('/getRoute', getRouter);

mongoose.connect('mongodb://localhost:27017/kodecampop', {}, function(error){
    if (error) console.log(error);
    console.log('connected to database succefully');
});


let port = 3000;
app.listen(port, () => {
    console.log(`This server is running on port ${port}`);
});