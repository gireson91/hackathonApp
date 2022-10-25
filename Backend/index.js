const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const programme = require('./routes/programmes');

app.use(bodyParser.json());

app.use('/programme', programme);

app.use((err, req, res, next) => {
    res.status(500).send(err);
})

const server = app.listen(1904, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});

