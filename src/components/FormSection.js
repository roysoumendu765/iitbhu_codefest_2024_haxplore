import React, {useState} from "react";
import axios from "axios";

export default function FormSection() {
    
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState();
    const [email, setEmail] = useState('');
    const [mobilenum, setMobileNum] = useState();
    const [idname, setIdname] = useState('');
    const [idnum, setIdNum] = useState('');
    const [noOfPersons, setNoOfPersons] = useState();

    const handlename = (e) => {
        setName(e.target.value);
    }

    const handlegender = (e) => {
        setGender(e.target.value);
    }

    const handleAge = (e) => {
        setAge(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleMobile = (e) => {
        setMobileNum(e.target.value);
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
            "name": name,
            "gender": gender,
            "age": age,
            "email": email,
            "mobile": mobilenum,
            "idname": idname,
            "idnum": idnum,
            "no_of_persons": noOfPersons
        }

        console.log(data)
        const headers = {
            'Content-Type': 'application/json'
        }
        axios.post('http://localhost:8000/booking/book', {data}, {headers})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <fieldset>
                <legend>Personal Details</legend>
                <form className="form-section">
                    <label htmlFor="name" required>Name: &nbsp;</label>
                    <input type="text" id="name" value={name} onChange={handlename} required /><br />
                    <label htmlFor="gender">Gender: &nbsp;</label>
                    <input type="radio" name="gender" value="male" onChange={handlegender}/> Male&nbsp;
                    <input type="radio" name="gender" value="female" onChange={handlegender}/> Female&nbsp;<br />
                    <label htmlFor="age">Age: &nbsp;</label>
                    <input type="number" name="age" id="age" value={age} onChange={handleAge}/>
                    <br />
                    <label htmlFor="mobile">Mobile: &nbsp;</label>
                    <input type="number" name="amobilege" id="mobile" value={mobilenum} onChange={handleMobile}/>
                    <br />
                    <label htmlFor="id-name" required>Id Name: &nbsp;</label>
                    <input type="text" id="id-name" value={idname} onChange={handleIdName}/><br />
                    <label htmlFor="id-no" required>Id Number: &nbsp;</label>
                    <input type="text" id="id-no" value={idnum} onChange={handleIdNum}/><br />
                    <label htmlFor="noOfPerson" required>Number Of Persons: &nbsp;</label>
                    <input type="number" id="noOfPerson" value={noOfPersons} onChange={handlePersons}/><br />
                    <label htmlFor="email">Email Address:&nbsp;</label>
                    <input type="email" name="email" id="email" data-validate="email" value={email} onChange={handleEmail}/><br />
                    <button type="submit" onSubmit={sendData}>Submit</button>
                </form>

            </fieldset>
        </div>
    );
}
/*
name gender age mob id name, id no, no of person*/