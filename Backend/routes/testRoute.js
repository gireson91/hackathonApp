const router = require('express').Router(); // makes a new Router

router.get("/hello", (req, res) => {
    res.send("Hello World!")
});

module.exports = router; // exports the new Router
