const path = require('path');
const express = require('express');
const bodyParser = require ('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require ('errorhandler');
const mongoose = require ('mongoose');
const routes = require('./routes');

mongoose.promise = require('mongoose');


const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'LightBlog', cookie: { maxAge: 6000 }, resave: false, saveUninitialized: false }));

if(!isProduction){
    app.use(errorHandler());
}

mongoose.connect('mongodb://localhost/lightblog');
mongoose.set('debug',true);

//Add models 
require('./models/Articles');
//add routes 
app.use(routes);

app.use((request, response, next) =>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if(!isProduction){
    app.use((err, request, response) => {
        response.status(err.statuS || 500);

        response.json({
            errors: {
                message: err.message,
                error: err, 
            },
        });
    });
}

app.use((error, request, response) => {
    response.staus(err.status || 500);

    response.json({
        erros: {
            message: error.message,
            error: {},
        },
    });
});

const server = app.listen(8000, ()=>console.log('Server started on http://localhost:8000'));