const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const programme = require('./routes/programmes');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.use('/programme', programme);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err.message);
})

const server = app.listen(1904, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});

