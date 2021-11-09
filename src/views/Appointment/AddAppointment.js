import React,{useState} from "react";
import axios from "axios";
import "./Appointment.css";


export default function AddAppointment(){

  const [appointment_id, setAppointment_id] = useState("");
  const [customer_name, setCustomer_name] = useState("");
  const [service_type, setService_type] = useState("");
  const [appointment_date, setAppointment_date] = useState("");
  const [appointment_time, setAppointment_time] = useState("");
  const [phone, setPhone] = useState("");

  function sendData(e){
    e.preventDefault();

      const newAppointment ={

        appointment_id,
        customer_name,
        service_type,
        appointment_date,
        appointment_time,
        phone

      }

    axios.post("http://localhost:8070/appointment/add",newAppointment).then(()=>{
      alert("Appointment Added")

    }).catch((err)=>{
      alert(err)
    })
  }

    return(
      <div className="appointmentBody">
     <div className="container"> 
     <h1>Add New Appointment</h1>
      <form onSubmit={sendData}>

  <div class="form-group">
    <label for="appointment_id">Appointment ID</label>
    <input type="text" class="form-control" id="appointment_id" required
    onChange={(e)=>{

      setAppointment_id(e.target.value);

    }}/>
  </div>
  
  <div class="form-group">
    <label for="customer_name">Customer Name</label>
    <input type="text" class="form-control" id="customer_name" placeholder="Enter Name" required
    onChange={(e)=>{

      setCustomer_name(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    <label for="service_type">Service Type</label>
    <input type="text" class="form-control" id="service_type" placeholder="Enter Service Type" required
    onChange={(e)=>{

      setService_type(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    <label for="appointment_date">Appointment Date</label>
    <input type="text" class="form-control" id="appointment_date" placeholder="Enter the date" required
    onChange={(e)=>{

      setAppointment_date(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    <label for="appointment_time">Appointment Time</label>
    <input type="text" class="form-control" id="appointment_time" placeholder="Enter the time" required
    onChange={(e)=>{

      setAppointment_time(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    <label for="phone">Phone</label>
    <input type="text" class="form-control" id="phone" placeholder="Enter phone number" required
    onChange={(e)=>{

      setPhone(e.target.value);

    }}/>
  </div>

  <br></br>

  <center>
  <div class="form-group">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  </center>
</form>
</div>  
</div>
    )
}