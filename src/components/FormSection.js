import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import './FormSection.css';

export default function FormSection() {

    const [username, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [mobilenum, setMobileNum] = useState('');
    const [idname, setIdname] = useState('');
    const [idnum, setIdNum] = useState('');
    const [noOfPersons, setNoOfPersons] = useState('');

    const handlename = (e) => {
        setName(e.target.value)
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
        if(val <= 9999999999 ){
            setMobileNum(val);
        }else{
            e.target.value = val.slice(0, 10);
            setMobileNum(val.slice(0,10));
        }
    }

    const handleIdName = (e) => {
        setIdname(e.target.value);
    }

    const handleIdNum = (e) => {
        setIdNum(e.target.value);
    }

    const handlePersons = (e) => {
        setNoOfPersons(e.target.value);
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
        if(username.length<=4){
            alert('Please enter a valid name');
            setName('');
            return;
        }else if(age<=4){
            alert("Invalid Age");
            setAge('');
            return ;
        }
        axios.post(`http://localhost:8000/booking/book`, { username, gender, age, email, mobilenum, idname, idnum, noOfPersons })
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

    return (
        <div>
            <div className="formContainer">
            <fieldset>
                <legend>Personal Details</legend>

                <form className="form-section" >
                    <label  htmlFor="name" required>Name: &nbsp;</label>
                    <input className="nameInput" placeholder="Enter Your Name" type="text" id="name" minLength="4" value={username} onChange={handlename} required /><br />
                    <label htmlFor="gender">Gender: &nbsp;</label>
                    <input className="genderInput" type="radio" name="gender" value="male" onChange={handlegender} /> Male&nbsp;
                    <input type="radio" name="gender" value="female" onChange={handlegender} /> Female&nbsp;
                    <input type="radio" name="gender" value="Others" onChange={handlegender} /> Others&nbsp;<br />
                    <label htmlFor="age" >Age: &nbsp;</label>
                    <input className="ageInput" type="number" name="age" maxLength="2" id="age" value={age} onChange={handleAge} />
                    <br />
                    <label htmlFor="mobile">Mobile: &nbsp;</label>
                    <input className="mobileInput" type="number" name="amobilege" id="mobile" maxLength="10" minLength="10" value={mobilenum} onChange={handleMobile} />

                    <br />
                    <label htmlFor="id-name" required>Id Name: &nbsp;</label>
                    <input className="idInput" placeholder="eg:Aadhar,Pancard,Passport" type="text" id="id-name" value={idname} onChange={handleIdName} /><br />
                    <label htmlFor="id-no" required>Id Number: &nbsp;</label>
                    <input className="idnumber-input" placeholder="0000-0000-0000-0000" type="text" id="id-no" value={idnum} onChange={handleIdNum} /><br />
                    <label htmlFor="noOfPerson" required>Number Of Persons: &nbsp;</label>
                    <input className="numberofperson-input" placeholder="min-1" type="number" id="noOfPerson" value={noOfPersons} onChange={handlePersons} /><br />
                    <label htmlFor="email">Email Address:&nbsp;</label>
                    <input className="emailInput" placeholder="abcd@gmail.com" type="email" name="email" id="email" data-validate="email" value={email} onChange={handleEmail} /><br />
                    <div className="btn">
                    <button className="submitbtn" type="submit" onClick={sendData}>Submit</button>
                    <button className="Resetbtn" onClick={clearForm}>Reset</button>
                    </div>
                </form>

            </fieldset>
        </div>
        </div>
    );
}