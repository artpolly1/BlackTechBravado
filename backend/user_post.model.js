const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User_Post = new Schema({
    post_title: {
        type: String
    },
    post_author: {
        type: String
    },
    post_content: {
        type: String
    },
    post_priority: {
        type: String
    }
});

module.exports = mongoose.model('User_Post', User_Post);