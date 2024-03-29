const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Model = require('../models/models');
const PaymentModel = require('../models/paymentmodels');

router.post('/book', async (req, res) => {
    console.log(req.body)
    const data = new Model({
        name: req.body.username,
        gender: req.body.gender,
        age: req.body.age,
        mobile: req.body.mobilenum,
        email: req.body.email,
        idname: req.body.idname,
        idnum: req.body.idnum,
        no_of_person: req.body.noOfPersons
    })
    try {
        const dataSaved = await data.save();
        res.status(200).json({id: dataSaved._id, message: `Tickets Generated Successfully.`});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

router.get('/getData/:idnum', async (req,res) => {
    try {
        const data = await Model.find({idnum: req.params.idnum});
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/payment', async (req,res) => {
    try{
        console.log(req.body);
        const paydata = new PaymentModel(
            {
                userid: req.body.user_id,
                razorid: req.body.rzr_pay_id,
                amount: parseInt(req.body.amount)
            }
        )
        const paymentSaved = await paydata.save();
        res.status(200).json({message: `Payment Successful`})
    } catch(error){
        res.status(500).json({message: `Payment Failed: ${error.message}`})
    }
})

module.exports = router;