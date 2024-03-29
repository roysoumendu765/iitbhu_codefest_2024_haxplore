import React, { useState } from "react";
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
    const [total,setTotal] = useState(0);

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
        let val  = e.target.value;
        if(val.length>12){
            setIdNum(e.target.value.slice(0,12));
            e.target.value=e.target.value.slice(0,12);
        }else{
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
        .then(res => {
            console.log(res.data.id);
            rzr_pay_action(username,email,mobilenum,res.data.id);
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

      
const rzr_pay_action = (username,email,mobilenum,user_id) => {
    console.log("clicked on rzr");
    var amount = 10;
    var options = {
      "key": "rzp_test_XbZeljHYPVwHVJ", // Enter the Key ID generated from the Dashboard
      "amount": amount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "TempleTicket",
      "description": "Test Transaction",
      "image": bhulogo,
      "handler": function (response){
                    var rzr_pay_id = response.razorpay_payment_id;
                    alert("response after payment"+ rzr_pay_id);
                    const data = {
                        "user_id" : user_id,
                        "rzr_pay_id" : rzr_pay_id,
                        "amount" : amount 
                    }
                    console.log(data)
                    axios.post(`http://localhost:8000/booking/payment`, {user_id, rzr_pay_id, amount})
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
  rzp1.on('payment.failed', function (response){
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
  });
  rzp1.open();
}

    return (
        <div>
            <div className="formContainer">
            <fieldset>
                <legend className="heading">Personal Details</legend>

                <form className="form-section" >
                    <label  htmlFor="name" required>Name: &nbsp;</label>
                    <input className="nameInput" placeholder="Enter Your Name" type="text" id="name" minLength="4" value={username} onChange={handlename} required /><br />
                    
                    <div className="gender">
                    <label htmlFor="gender">Gender </label>
                    <input  className="gendermale"  type="radio" name="gender" value="male" onChange={handlegender} /> Male
                    <input className="genderfemale" type="radio" name="gender" value="female" onChange={handlegender} /> Female
                    <input type="radio" name="gender" value="Others" onChange={handlegender} /> Others&nbsp;<br />
                    </div>
                    <label htmlFor="age" >Age: &nbsp;</label>
                    <input className="ageInput" type="number" name="age" maxLength="2" id="age" value={age} onChange={handleAge} />
                    <br />
                    <label htmlFor="mobile">Mobile: &nbsp;</label>
                    <input className="mobileInput" placeholder="(+91) 0000000000" type="number" name="amobilege" id="mobile" maxLength="10" minLength="10" value={mobilenum} onChange={handleMobile} />

                    <br />
                    <label htmlFor="id-name" required>Id Name: &nbsp;</label>
                    <input className="idInput" placeholder="eg:Aadhar,Passport..." type="text" id="id-name" value={idname} onChange={handleIdName} /><br />
                    <label htmlFor="id-no" required>Id Number: &nbsp;</label>
                    <input className="idnumber-input" placeholder="0000-0000-0000-0000" type="text" id="id-no" value={idnum} onChange={handleIdNum} /><br />
                    <label htmlFor="noOfPerson" required>Number Of Persons: &nbsp;</label>
                    <input className="numberofperson-input" min={0} type="number" id="noOfPerson" value={noOfPersons} onChange={handlePersons} /><br />
                    <label htmlFor="email">Email Address:&nbsp;</label>
                    <input className="emailInput" placeholder="abcd@gmail.com" type="email" name="email" id="email" data-validate="email" value={email} onChange={handleEmail} /><br />
                    <label htmlFor="total" >Total (10rs per person): &nbsp;</label>
                    <input type="number" placeholder={total} disabled/>
                    <div className="btn">
                    <button className="submitbtn" type="submit" onClick={sendData}>Buy</button>
                    <button className="Resetbtn" onClick={clearForm}>Reset</button>
                    </div>
                </form>

            </fieldset>
        </div>
        </div>
    );
}