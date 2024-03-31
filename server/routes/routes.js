const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
const Model = require('../models/models');
const PaymentModel = require('../models/paymentmodels');
const loginModel = require('../models/loginmodels');
const IntegerModel = require('../models/IntegerModel');
const dotenv = require('dotenv');
dotenv.config();

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

router.post('/sendmail', async (req, res) => {
    const transport = nodemailer.createTransport("SMTP",{
        service: 'gmail',
        auth: {
            user: 'codinggroup98@gmail.com',
            pass: 'CodingGroup@456'
        }
    })
    try {
        const {username, email, subject, query} = req.body;
        transport.sendMail({
            from: email,
            to: process.env.USER_EMAIL,
            subject: subject,
            text: query
        });
        res.status(200).json({message: "Mail Sent SuccessFully"});
    } catch (error) {
        console.log(`Error: ${error}`)
        res.status(500).json({message: "Error Sending Mail"});
    }
})

router.post('/postcount', async (req, res) => {
    try {
        const UpdateNum = new IntegerModel({
            field1: req.body.a,
            field2: req.body.b,
            field3: req.body.c,
        })
        const NumSaved = await UpdateNum.save();
        res.status(200).json({message: 'Updated Successfully.'});
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({message: 'Server Error'});
    }
});

router.get('/getcount', async(req, res) => {
    try {
        const NumData = await IntegerModel.find();
        res.status(200).json({data: NumData, message: 'Data'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
})

module.exports = router;