const router = require('express').Router();
const programme  = require('../database');

router.get("/getAll", async (req, res) => {
    try {
        const results = await programme.find({})
        .then(results => res.send(results))
    } catch(err) {
        return next(err);
    }
});

router.post("/add", async (req, res, next) => {
    try {
        const result = await programme.create(req.body);
        res.status(201).send(result);
    } catch(err) {
        return next(err);
    }
});

router.delete("/delete/:id", async (req, res, next) => {
    try {
        const result = await programme.findByIdAndDelete(req.params.id);
        res.status(200).send(result);
    } catch(err) {
        return next(err);
    }
});

router.put("/amend/:id", async (req, res, next) => {
    try {
        const {id} = req.params;
        const newData = req.body;
        const result = await programme.findByIdAndUpdate(id, newData);
        res.status(201).send(result);
    } catch(err) {
        return next(err);
    }
});

module.exports = router;