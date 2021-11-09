import React,{useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./AddEmployee.css";



function EditEmployee(){

    const [empId, setEmployee_id] = useState("");
    const [empName, setEmployee_name] = useState("");
    const [age, setAge] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [gender, setGender] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [email, setEmail] = useState("");

  const {id} = useParams();
  useEffect(() => {
    function getEmployees() {
      axios.get(`http://localhost:8070/employee/get/${id}`)
      .then((res) => {

        console.log(res.data.employee);
        setEmployee_id(res.data.employee.empId);
        setEmployee_name(res.data.employee.empName);
        setAge(res.data.employee.age);
        setContactNumber(res.data.employee.contactNumber);
        setGender(res.data.employee.gender);
        setJobTitle(res.data.employee.jobTitle);
        setEmail(res.data.employee.email);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    getEmployees();
  }, []);



  function sendUpdateEmployee(e){
    e.preventDefault();

      const updateemployee = {

        empId,
        empName,
        age,
        contactNumber,
        gender,
        jobTitle,
        email


      }

    axios.put(`http://localhost:8070/employee/update/${id}`, updateemployee).then(()=>{
      alert("Employee is Updated");

    }).catch((err)=>{
      alert(err);
    })
  }

    return(
        <center>
     <div className="employee-container"> 
     <h1>EDIT EMPLOYEE</h1>
      <form onSubmit={sendUpdateEmployee}  className="add-employee">


  <div class="col-md-12">
   
    <input type="text" class="form-control" id="empId"placeholder="Employee ID"  
    value={empId}
    onChange={(e)=>{

      setEmployee_id(e.target.value);

    }}/>
  </div>
  <br>
  </br>
  <div class="col-md-12">
    
    <input type="text" class="form-control" id="empName" placeholder="Employee Name" 
    value={empName}
    onChange={(e)=>{

      setEmployee_name(e.target.value);

    }}/>
  </div>
  <br>
  </br>
  <div class="col-md-12">
    
    <input type="text" class="form-control" id="age" placeholder="Age" 
    value={age}
    onChange={(e)=>{

      setAge(e.target.value);

    }}/>
  </div>
  <br>
  </br>
  <div class="col-md-12">
    
    <input type="text" class="form-control" id="contactNumber" placeholder="Contact Number" 
    value={contactNumber}
    onChange={(e)=>{

      setContactNumber(e.target.value);

    }}/>
  </div>
  <br>
  </br>
  <div class="col-md-12">
   
    <input type="text" class="form-control" id="gender"  placeholder="Gender" 
    value={gender}
    onChange={(e)=>{

      setGender(e.target.value);

    }}/>
  </div>
  <br>
  </br>
  <div class="col-md-12" >
   
    <input type="text" class="form-control" id="jobTitle" placeholder="Job Title" 
    value={jobTitle}
    onChange={(e)=>{

      setJobTitle(e.target.value);

    }}/>
  </div>
  <br>
  </br>
  <div class="col-md-12">
   
    <input type="email" class="form-control" id="email" placeholder="Email Address" 
    value={email}
    onChange={(e)=>{

      setEmail(e.target.value);

    }}/>
  </div>
  
  <br>
  </br>
  <div class="col-md-12">
    <button type="submit" class="btn btn-success ">Update</button>
  </div>
  
</form>
</div>
</center>

    );
}
export default EditEmployee;