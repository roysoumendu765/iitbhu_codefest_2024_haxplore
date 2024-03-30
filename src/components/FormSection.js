import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import './FormSection.css';
import bhulogo from '../components/assests/bhulogo.png';
import useRazorpay from "react-razorpay";

export default function FormSection() {

    const [username, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [mobilenum, setMobileNum] = useState('');
    const [idname, setIdname] = useState('');
    const [idnum, setIdNum] = useState('');
    const [noOfPersons, setNoOfPersons] = useState('');
    const [Razorpay] = useRazorpay();
    const [total, setTotal] = useState(0);
    const [waiting, setWaiting] = useState('calculating...');

    const handlename = (e) => {
        setName(e.target.value);
        // waitingTime();
    }

    const handlegender = (e) => {
        setGender(e.target.value);
    }

    const handleAge = (e) => {
        let val = e.target.value;
        if (val > 100) {
            e.target.value = val.slice(0, 2);
            setAge(val.slice(0, 2));
        } else {
            setAge(val);
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleMobile = (e) => {
        let val = e.target.value;
        if (val <= 9999999999) {
            setMobileNum(val);
        } else {
            e.target.value = val.slice(0, 10);
            setMobileNum(val.slice(0, 10));
        }
    }

    const handleIdName = (e) => {
        setIdname(e.target.value);
    }

    const handleIdNum = (e) => {
        let val = e.target.value;
        if (val.length > 12) {
            setIdNum(e.target.value.slice(0, 12));
            e.target.value = e.target.value.slice(0, 12);
        } else {
            setIdNum(val);
        }
    }

    const handlePersons = (e) => {
        setNoOfPersons(e.target.value);
        setTotal(e.target.value * 10);
    }

    const sendData = (e) => {
        e.preventDefault();
        const data = {
            "name": username,
            "gender": gender,
            "age": age,
            "email": email,
            "mobile": mobilenum,
            "idname": idname,
            "idnum": idnum,
            "no_of_person": noOfPersons
        }
        console.log(data);
        if (username.length <= 4) {
            alert('Please enter a valid name');
            setName('');
            return;
        } else if (age <= 4) {
            alert("Invalid Age");
            setAge('');
            return;
        }
        axios.post(`http://localhost:8000/booking/book`, { username, gender, age, email, mobilenum, idname, idnum, noOfPersons })
            .then(res => {
                console.log(res.data.id);
                rzr_pay_action(username, email, mobilenum, res.data.id);
            })
            .catch(err => err && err.message ? sweetAlertError() : "")

        setName('');
        setGender('');
        setAge(0);
        setEmail('');
        setMobileNum(0);
        setIdname('');
        setIdNum('');
        setNoOfPersons('');
    }

    const clearForm = () => {
        setName('');
        setGender('');
        setAge(0);
        setEmail('');
        setMobileNum(0);
        setIdname('');
        setIdNum('');
        setNoOfPersons('');
    }

    const sweetAlertSuccess = () => {
        Swal.fire({
            title: "Success",
            text: "Ticket Generated SuccessFully.",
            icon: "success"
        })
    }

    const sweetAlertError = () => {
        Swal.fire({
            title: "Error",
            text: "Error Occurred. Try Again.",
            icon: "error"
        })
    }


    const rzr_pay_action = (username, email, mobilenum, user_id) => {
        console.log("clicked on rzr");
        var options = {
            "key": "rzp_test_XbZeljHYPVwHVJ", // Enter the Key ID generated from the Dashboard
            "amount": total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "TempleTicket",
            "description": "Test Transaction",
            "image": bhulogo,
            "handler": function (response) {
                var rzr_pay_id = response.razorpay_payment_id;
                console.log("response after payment" + rzr_pay_id);
                const data = {
                    "user_id": user_id,
                    "rzr_pay_id": rzr_pay_id,
                    "amount": total
                }
                console.log(data);
                axios.post(`http://localhost:8000/booking/payment`, { user_id, rzr_pay_id, total })
                    .then(res => res.data ? sweetAlertSuccess() : "")
                    .catch(err => err && err.message ? sweetAlertError() : "")

                setName('');
                setGender('');
                setAge(0);
                setEmail('');
                setMobileNum(0);
                setIdname('');
                setIdNum('');
                setNoOfPersons('');
                setTotal('');

                console.log(response);
            },
            "prefill": {
                "name": username,
                "email": email,
                "contact": mobilenum
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        var rzp1 = new Razorpay(options);
        rzp1.on('payment.failed', function (response) {
            console.log(response.error.description);
            //   alert(response.error.code);
            //   alert(response.error.description);
            //   alert(response.error.source);
            //   alert(response.error.step);
            //   alert(response.error.reason);
            //   alert(response.error.metadata.order_id);
            //   alert(response.error.metadata.payment_id);
        });
        rzp1.open();
    }

    useEffect(() => {
        let sum = 0;
        let totalPeople = 0;
        axios.get('http://localhost:8000/booking/getAll')
            .then(res => {
                let data = res.data;
                // console.log(data);
                data.forEach(data => {
                    if (data.status === true) {
                        sum++;
                    }
                    totalPeople++;
                });
                // console.log(sum);
                setWaiting(`${Math.floor(sum / 2) + 1} minutes`);
            }).catch((err) => { console.log(err) });
    }, []);

    return (
        <div className="wrapper">
            <div className="information">


            </div>
            <div className="container px-0 my-4" style={{ 'height': 'auto' }}>
                <div className="col-12 col-md-6 mx-auto formContainer">
                    <fieldset className="neumorphic-fieldset">
                        <legend className="heading text-center mb-3">Personal Details</legend>
                        <legend className="heading text-center mb-3">Approx Waiting Time: {waiting}</legend>
                        <form className="form-section">
                            <div className="row ">
                                <label htmlFor="name" required className="neumorphic-label col-sm-4 col-form-label">Name: &nbsp;</label>
                                <div className="col-sm-8">
                                    <input className="form-control nameInput neumorphic-input" placeholder="Enter Your Name" type="text" id="name" minLength="4" value={username} onChange={handlename} required /><br />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="gender" required className="neumorphic-label col-sm-4 col-form-label">Gender: &nbsp;</label>
                                <div className="col-sm-8 d-flex align-items-center">
                                    <input className="gendermale me-2" type="radio" name="gender" value="male" onChange={handlegender} /> Male
                                    <input className="genderfemale ms-4 me-2" type="radio" name="gender" value="female" onChange={handlegender} /> Female
                                    <input className="ms-4 me-2" type="radio" name="gender" value="Others" onChange={handlegender} /> Others&nbsp;<br />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label htmlFor="age" required className="neumorphic-label col-sm-4 col-form-label">Age: &nbsp;</label>
                                <div className="col-sm-8">
                                    <input className="form-control ageInput neumorphic-input" type="number" name="age" maxLength="2" id="age" value={age} onChange={handleAge} /><br />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label htmlFor="mobile" required className="neumorphic-label col-sm-4 col-form-label">Mobile: &nbsp;</label>
                                <div className="col-sm-8">
                                    <input className="form-control mobileInput neumorphic-input" placeholder="(+91) 0000000000" type="number" name="amobilege" id="mobile" maxLength="10" minLength="10" value={mobilenum} onChange={handleMobile} /><br />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label htmlFor="id-name" required className="neumorphic-label col-sm-4 col-form-label">Id Name: &nbsp;</label>
                                <div className="col-sm-8">
                                    <input className="form-control idInput neumorphic-input" placeholder="eg:Aadhar,Passport..." type="text" id="id-name" value={idname} onChange={handleIdName} /><br />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label htmlFor="id-no" required className="neumorphic-label col-sm-4 col-form-label">Id Number: &nbsp;</label>
                                <div className="col-sm-8">
                                    <input className="form-control idnumber-input neumorphic-input" placeholder="0000-0000-0000-0000" type="text" id="id-no" value={idnum} onChange={handleIdNum} /><br />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label htmlFor="noOfPerson" required className="neumorphic-label col-sm-4 col-form-label">Number Of Persons: &nbsp;</label>
                                <div className="col-sm-8">
                                    <input className="form-control numberofperson-input neumorphic-input" min={0} type="number" id="noOfPerson" value={noOfPersons} onChange={handlePersons} /><br />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <label htmlFor="email" required className="neumorphic-label col-sm-4 col-form-label">Email Address: &nbsp;</label>
                                <div className="col-sm-8">
                                    <input className="form-control emailInput neumorphic-input" placeholder="abcd@gmail.com" type="email" name="email" id="email" data-validate="email" value={email} onChange={handleEmail} /><br />                </div>
                            </div>
                            <div className="row mb-1">
                                <label htmlFor="total" required className="neumorphic-label col-sm-4 col-form-label">Total (10Rs per person): &nbsp;</label>
                                <div className="col-sm-8">
                                    <input className="form-control total neumorphic-input" type="number" name="total" id="total" value={total} disabled /><br />
                                </div>
                            </div>
                            <div className="row mb-1">
                                <div className="col-12 d-flex justify-content-around">
                                    <button className="submitbtn neumorphic-button" type="submit" onClick={sendData}>Buy</button>
                                    <button className="Resetbtn neumorphic-button" onClick={clearForm}>Reset</button>
                                </div>
                            </div>
                        </form>
                    </fieldset>
                </div>
            </div>
        </div>
    );
}