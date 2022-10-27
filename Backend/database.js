const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/kids_tv_db", {
    useNewUrlParser: true
}, (err) => err ? console.error(err) : console.log("Connection to Mongo DB successful"));

const programmeSchema = new mongoose.Schema({
    'name': {
        type: String,
        required: true
    },
    'desc': {
        type: String,
        required: true,
        maxLength: 300
    },
    'genre': {
        type: String,
        default: 'Unknown'
    },
    'channel': {
        type: String,
        default: 'Unknown'
    },
    'firstAired': {
        type: String,
        default: 'Unknown'
    },
    'epLength': {
        type: String,
        default: 'Unknown'
    },
    'rating': {
        type: Number,
        require: true,
        min: [-1, `Come on, it can't be that bad!`],
        max: [10, `I know you like it, but please keep it within 10!`]
    },
});

const programme = mongoose.model('programme', programmeSchema);

module.exports = programme;