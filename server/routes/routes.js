const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const Model = require('../models/models');
const PaymentModel = require('../models/paymentmodels');
const loginModel = require('../models/loginmodels');

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
        no_of_person: req.body.noOfPersons,
        status: true
    })
    try {
        const dataSaved = await data.save();
        updateStatus(dataSaved._id)
        res.status(200).json({id: dataSaved._id, message: `Tickets Generated Successfully.`});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})

const updateStatus = (objId) => {
    console.log(objId)
    setTimeout( async () => {
        try {
            const result = await Model.findById(objId);
            if(result){
                result.status = false;
                await result.save();
                console.log(`Status Updated`)
            }
        } catch (error) {
            console.log(`Error in updating status: ${error.message}`)
        }
    }, 2 * 60 * 1000);
}

router.get('/getAll', async (req,res) => {
    try {
        // const data = await Model.aggregate([
        //     {$match: {status: false}},
        //     {$group: {_id: null, no_of_person : {$sum: "no_of_person"}}}
        // ])
        const data = await Model.find()
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message: error.message})
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
                amount: parseInt(req.body.total)
            }
        )
        const paymentSaved = await paydata.save();
        res.status(200).json({message: `Payment Successful`})
    } catch(error){
        res.status(500).json({message: `Payment Failed: ${error.message}`})
    }
})

router.post('/login', async (req,res) => {
    console.log("Inside the route")
    const {username, passwordval} = req.body;
    try {
        console.log("Try Block")
        const admin = await loginModel.findOne({username});
        console.log(admin)
        if(!admin){
            res.status(404).json({message: 'Invalid Email Id'});
        }
        const comparepwd = bcrypt.compare(passwordval, admin.password);
        if(!comparepwd){
            res.status(401).json({message: 'Invalid Password'});
        }
        res.status(200).json({message: 'success'});
    } catch (error) {
        console.log("Catch Block")
        res.status(500).json({message: 'Internal Server Error'});
    }
})

module.exports = router;