const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/kids_tv_db", {
    useNewUrlParser: true
}, (err) => err ? console.error(err) : console.log("Connection to Mongo DB successful"));

const programmeSchema = new mongoose.Schema({
    'Name': {
        type: String,
        require: true
    },
    'Description': {
        type: String,
        require: true,
        maxLength: 300
    },
    'Genre': {
        type: String,
        default: 'Unknown'
    },
    'Channel': {
        type: String,
        default: 'Unknown'
    },
    'First Aired': {
        type: String,
        default: 'Unknown'
    },
    'Episode Length': {
        type: String,
        default: 'Unknown'
    },
    'Rating': {
        type: Number,
        require: true,
        min: [-1, `Come on, it can't be that bad!`],
        max: [10, `I know you like it, but please keep it within 10!`]
    },
});

const programme = mongoose.model('programme', programmeSchema);

module.exports = programme;