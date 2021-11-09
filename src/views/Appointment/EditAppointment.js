import React,{useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";


function EditAppointment(){

  const [appointment_id, setAppointment_id] = useState("");
  const [customer_name, setCustomer_name] = useState("");
  const [service_type, setService_type] = useState("");
  const [appointment_date, setAppointment_date] = useState("");
  const [appointment_time, setAppointment_time] = useState("");
  const [phone, setPhone] = useState("");

  const {id} = useParams();
  useEffect(() => {
    function getAppointments() {
      axios.get(`http://localhost:8070/appointment/get/${id}`)
      .then((res) => {

        console.log(res.data.appointment);
        setAppointment_id(res.data.appointment.appointment_id);
        setCustomer_name(res.data.appointment.customer_name);
        setService_type(res.data.appointment.service_type);
        setAppointment_date(res.data.appointment.appointment_date);
        setAppointment_time(res.data.appointment.appointment_time);
        setPhone(res.data.appointment.phone);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    getAppointments();
  }, []);



  function sendUpdateAppointment(e){
    e.preventDefault();

      const updateappointment = {

        appointment_id,
        customer_name,
        service_type,
        appointment_date,
        appointment_time,
        phone

      }

    axios.put(`http://localhost:8070/appointment/update/${id}`, updateappointment).then(()=>{
      alert("Appointment Updated");

    }).catch((err)=>{
      alert(err);
    })
  }

    return(
     <div className="container"> 
     <h1>Edit Appointment</h1>
      <form onSubmit={sendUpdateAppointment}>

  <div class="col-md-12">
    <label for="appointment_id">Appointment ID</label>
    <input type="text" class="form-control" id="appointment_id" 
    value={appointment_id}
    onChange={(e)=>{

      setAppointment_id(e.target.value);

    }}/>
  </div>
  
  <div class="col-md-12">
    <label for="customer_name">Customer Name</label>
    <input type="text" class="form-control" id="customer_name" placeholder="Enter Name"
    value={customer_name}
    onChange={(e)=>{

      setCustomer_name(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="service_type">Service Type</label>
    <input type="text" class="form-control" id="service_type" placeholder="Enter Service Type" 
    value={service_type}
    onChange={(e)=>{

      setService_type(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="appointment_date">Appointment Date</label>
    <input type="text" class="form-control" id="appointment_date" placeholder="Enter the date" 
    value={appointment_date}
    onChange={(e)=>{

      setAppointment_date(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <label for="appointment_time">Appointment Time</label>
    <input type="text" class="form-control" id="appointment_time" placeholder="Enter the time" 
    value={appointment_time}
    onChange={(e)=>{

      setAppointment_time(e.target.value);

    }}/>
  </div>

  <div class="col-md-12" >
    <label for="phone">Phone</label>
    <input type="text" class="form-control" id="phone" placeholder="Enter phone number"
    value={phone}
    onChange={(e)=>{

      setPhone(e.target.value);

    }}/>
  </div>

<br></br>
  <center>
  <div class="col-md-12">
    <button type="submit" class="btn btn-success btn-sm">Update Appointment</button>
  </div>
  </center>
</form>
</div>  
    );
}
export default EditAppointment;