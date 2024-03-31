import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from './Header';
import Footer from './Footer';

const DashBoard = (props) => {

  const [listdetails, setListDetails] = useState([]);
  const requestAll = () => {
    axios.get(`http://localhost:8000/booking/getAll`)
      .then(res => {
        setListDetails(res.data)
        console.log(res.data)
      })
      .catch(error => error.message ? Errormsg() : "")
  }

  const clearAll = () => {
    setListDetails([]);
  }
 
  const Errormsg = () => {
    console.log(listdetails)
    Swal.fire({
      title: "Error",
      text: "Error Occurred. Try Again.",
      icon: "error"
    })
  }
  return (
    <>
      <Header />
      <div className='container d-flex justify-content-center mt-2'>
        <table class="table">
          <thead>
            <tr>
            {/* username, gender, age, email, mobilenum, idname, idnum, noOfPersons  */}
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Number Of Tickets</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
          {listdetails.length === 0 && <p className='no-records text-center'>No Records Present</p>}
          {listdetails.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.no_of_person}</td>
              <td>{item.status === true ? "Not Visited" : "Visited"}</td>
            </tr>
          ))}

          </tbody>
        </table>
        <div className='btn-area d-flex justify-content-end'>
          <button className='btn btn-primary mx-2' onClick={requestAll}>Get Details</button>
          <button className='btn btn-primary' onClick={clearAll}>Clear Details</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DashBoard