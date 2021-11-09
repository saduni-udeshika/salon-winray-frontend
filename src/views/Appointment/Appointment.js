import React,{useState, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function Appointment() {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        const loadPosts =async () =>{
            setLoading(true);
            const response =await axios.get("http://localhost:8070/appointment/");
            setPosts(response.data);
            setLoading(false);
        }
        loadPosts();
    }, []);

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
       function getAppointments() {
           axios.get("http://localhost:8070/appointment/").then((res) =>{
               setAppointments(res.data);
           }).catch((err) =>{
               alert(err.message);
           })
       }
       getAppointments();
    }, [appointments]);

    function deleteAppointment(_id) {
        axios.delete("http://localhost:8070/appointment/delete/"+_id).then((res) =>{
            console.log(res.data);
            alert("Delete Successfully");

        }).catch((err)=>{
           alert(err)
        });
        setAppointments(appointments.filter((appointments) => appointments._id !== _id))
    }

    return (
        <><div className ="appointmentBody">
           
            
        </div><div className ="container">
        <h1>All Appointments</h1>
        <input className="searchappointment"
            style={{ width:"15%" ,height:"30px"}}
            type="text"
            placeholder="Search Appointment"
            onChange={(e) => setSearchName(e.target.value)}/>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Appointment ID</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Service Type</th>
                <th scope="col">Appointment Date</th>
                <th scope="col">Appointment Time</th>
                <th scope="col">Phone</th>
                </tr>
            </thead>

            {loading ? (
                    <button class="btn-btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aris-hidden="true"></span>
                        Loading </button>
                ) : (
                    posts
                        .filter((value) => {
                            if (searchName === "") {
                                return value;
                            } else if (
                                value.appointment_id.includes(searchName.toUpperCase())
                            ){
                                return value;
                            }




               }).map((appointments) => 

                <tr key={appointments._id}>
           
                    <td>{appointments.appointment_id}</td>
                    <td>{appointments.customer_name}</td>
                    <td>{appointments.service_type}</td>
                    <td>{appointments.appointment_date}</td>
                    <td>{appointments.appointment_time}</td>
                    <td>{appointments.phone}</td>

                    <Link to={`/EditAppointment/${appointments._id}`} class="btn btn-success btn-sm">Update</Link>
                    &nbsp;
                    <button type="button" class="btn btn-danger btn-sm" onClick={() => deleteAppointment(appointments._id)}>Delete</button>

                
                </tr> 
               
            ))}

     
        </table>
       <Link to={"/AddAppointment"} className="btn btn-success btn-sm">Add New Appointment</Link>

    </div> </>
    )
}
