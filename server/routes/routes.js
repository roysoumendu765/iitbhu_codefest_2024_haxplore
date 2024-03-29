const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Model = require('../models/models');

router.post('/book', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        mobile: req.body.mobile,
        email: req.body.email,
        idname: req.body.idname,
        idnum: req.body.idnum,
        no_of_person: req.body.no_of_person
    })
    try {
        const dataSaved = await data.save();
        res.status(200).json({message: `Tickets Generated Successfully for ${dataSaved.data.name}`});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

router.get('/getData', async (req,res) => {
    try {
        const data = await Model.find();
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router;