import React,{useState} from "react";
import axios from "axios";
import "./AddEmployee.css";


export default function AddEmployee(){

  const [empId, setEmployee_id] = useState("");
  const [nic, setNic] = useState("");
  const [empName, setEmployee_name] = useState("");
  const [age, setAge] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState(""); 
  

  function sendData(e){
    e.preventDefault();

      const newEmployee ={

        empId,
        nic,
        empName,
        age,
        contactNumber,
        gender,
        jobTitle,
        email,
        

      }

    axios.post("http://localhost:8070/employee/add",newEmployee).then(()=>{
      alert("Employee Added");

    }).catch((err)=>{
      alert(err)
    })
  }

    return(
        <center>
     <div className="employee-container"> 
     <h1>Add New Employee</h1>
     <form onSubmit={sendData} className="add-employee">

  <div class="form-group">

    <input type="text" class="form-control" id="empId" placeholder="Employee ID" 
    onChange={(e)=>{

        setEmployee_id(e.target.value);

    }}/>
  </div>

  <div class="form-group">

    <input type="text" class="form-control" id="nic" placeholder="National Identity Card Number" required
    onChange={(e)=>{

        setNic(e.target.value);

    }}/>
  </div>
  
  <div class="form-group">
    
    <input type="text" class="form-control" id="empName"placeholder="Employee Name" required
    onChange={(e)=>{

        setEmployee_name(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    
    <input type="text" class="form-control" id="age" placeholder="Enter the Age"  pattern="[0-9]*" inputmode="numeric" required
    onChange={(e)=>{

        setAge(e.target.value);

    }}/>
  </div>

  <div class="form-group">
     
    <input type="text" class="form-control" id="contactNumber" placeholder="Enter the contact Number" maxLength="10" inputmode="numeric"  required 
    onChange={(e)=>{

        setContactNumber(e.target.value);

    }}/>
  </div>

  <div class="form-group">
  
    
    <input type="text" class="form-control" id="gender" placeholder="Gender"
    onChange={(e)=>{

        setGender(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    
    <input type="text" class="form-control" id="jobTitle" placeholder="Job TItle"
    onChange={(e)=>{

        setJobTitle (e.target.value);

    }}/>
  </div>
  <div class="form-group">
    
    <input type="email" class="form-control" id="email" placeholder="Email Address"
    onChange={(e)=>{

        setEmail (e.target.value);

    }}/>
  </div>
  
  


  <center>
  <div class="form-group">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  </center>
</form>
</div>
</center>  
    )
}