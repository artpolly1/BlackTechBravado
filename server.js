const express = require('express');

const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

//Define middleware here
app.use(cors());
app.use(bodyParser.json());

//serve up static assets (on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  // Add routes, both API and view
  app.use(routes);

  //connect to Mongo DB
  mongoose.connect(process.env.MONGODB_URI ||'mongodb://127.0.0.1:27017/user_post', { useNewUrlParser: true });

  // Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });