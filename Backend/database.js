const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/kids_tv_db", {
    useNewUrlParser: true
}, () => console.log("Connection successful"));

const programmeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

const programme = mongoose.model('programme', programmeSchema);

module.exports = programme;
// 1 sec