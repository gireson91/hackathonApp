const router = require('express').Router();
const programme  = require('../database');

router.get("/hello", (req, res) => {
    res.send("Hello World!")
});

// router.get("/get", (req, res) => programme.find({}).then(results => res.send(results)).catch(err => next(err)));

router.post("/add", async (req, res, next) => {
    try {
        const result = await programme.create(req.body);
        res.status(201).send(result);
    } catch(err) {
        return next(err);
    }
});


module.exports = router;
// it was t