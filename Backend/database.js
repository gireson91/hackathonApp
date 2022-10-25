const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:1904/kids_tv_db", {
    useNewUrlParser: true
}).then(() => console.log("connected to mongo db")).catch(err => console.error(err));

const programmeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
});

const programme = mongoose.model('programme', programmeSchema);

module.exports = {
    programme
}
