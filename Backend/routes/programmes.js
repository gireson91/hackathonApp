const router = require('express').Router();
const { programme } = require('../database');

router.get("/hello", (req, res) => {
    res.send("Hello World!")
});

// router.get("/get", (req, res) => programme.find({}).then(results => res.send(results)).catch(err => next(err)));

router.post("/addProgramme", (req, res, next) => {
    programme.create(req.body)
    .then(result => res.status(201).send(result))
    .catch(e => next(e));
});

let newDoc = new programme();

newDoc.save().then(() => console.log("Done!"));

module.exports = router;
