const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userPostRoutes = express.Router();
const PORT = 8080;

let User_Post = require('./user_post.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/user_post', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

userPostRoutes.route('/').get(function(req, res) {
    User_Post.find(function(err, uPos) {
        if (err) {
            console.log(err);
        } else {
            res.json(uPos);
        }
    });
});

userPostRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User_Post.findById(id, function(err, uPos) {
        res.json(uPos);
    });
});

userPostRoutes.route('/update/:id').post(function(req, res) {
    User_Post.findById(req.params.id, function(err, uPos) {
        if (!uPos)
            res.status(404).send("data is not found");
        else
            uPos.post_title = req.body.post_title;
            uPos.post_author = req.body.post_author;
            uPos.post_content = req.body.post_content;
            

            uPos.save().then(uPos => {
                res.json('Post updated!');
            })
            .catch(err => {
                res.status(400).send("Post not possible");
            });
    });
});

userPostRoutes.route('/add').post(function(req, res) {
    let uPos = new User_Post(req.body);
    uPos.save()
        .then(uPos => {
            res.status(200).json({'uPos': 'post added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new post failed');
        });
});

app.use('/uPos', userPostRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});