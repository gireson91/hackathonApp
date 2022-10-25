const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const programmeRoutes = require('./routes/programmes');

// app.use(bodyParser.json());
const testRoute = require("./routes/testRoute");

app.use('/test', testRoute);


// app.use('/programmes', programmeRoutes);


const server = app.listen(1904, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});

