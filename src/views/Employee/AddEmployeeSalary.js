import React,{useState} from "react";
import axios from "axios";
import "./AddEmployee.css";

export default function AddEmployeeSalary(){

  const [empId, setEmployee_id] = useState("");
  const [empName, setEmployee_name] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [basicSalary, setBasicsalary] = useState("");
  const [month, setMonth] = useState("");
  const [payOTRate, setPayOTRate] = useState("");
  const [payOTHours, setPayOTHours] = useState("");
  const [deductions, setDeductions] = useState("");
  const [totalSalary, settotalsalary] = useState("");

  function sendData(e){
    e.preventDefault();

      const newEmployeeSalary ={

        empId,
        empName,
        jobTitle,
        basicSalary,
        month,
        payOTRate,
        payOTHours,
        deductions,
        totalSalary

      }

    axios.post("http://localhost:8070/employeeSalary/add",newEmployeeSalary).then(()=>{
      alert("Employee Salary Record is Added");

    }).catch((err)=>{
      alert(err)
    })
  }

    return(
        <center>
     <div className="employee-container"> 
     <h1>ADD NEW RECORD</h1>
     <form onSubmit={sendData} className="add-employeeSalary">

  <div class="form-group">

    <input type="text" class="form-control" id="empId" placeholder="Employee ID" required
    onChange={(e)=>{

        setEmployee_id(e.target.value);

    }}/>
  </div>
  
  <div class="form-group">
    
    <input type="text" class="form-control" id="empName"placeholder="Employee Name" required
    onChange={(e)=>{

        setEmployee_name(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    
    <input type="text" class="form-control" id="jobTitle" placeholder="Enter the Job Title"required
    onChange={(e)=>{

        setJobTitle(e.target.value);

    }}/>
  </div>

  <div class="form-group">
     
    <input type="text" class="form-control" id="basicSalary" placeholder="Enter the Basic-Salary"required
    onChange={(e)=>{

        setBasicsalary(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    
    <input type="text" class="form-control" id="month" placeholder="Enter the Month"required 
    onChange={(e)=>{

        setMonth(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    
    <input type="text" class="form-control" id="payOTRate" placeholder="OT Rate"
    onChange={(e)=>{

        setPayOTRate(e.target.value);

    }}/>
  </div>
  <div class="form-group">
    
    <input type="text" class="form-control" id="payOTHours" placeholder="OT Hours"
    onChange={(e)=>{

        setPayOTHours(e.target.value);

    }}/>
  </div>

  <div class="form-group">
    
    
    <input type="text" class="form-control" id="deductions" placeholder="Deductions"
    onChange={(e)=>{

        setDeductions (e.target.value);

    }}/>
  </div>
  <div class="form-group">
    
    <input type="text" class="form-control" id="totalsalary"  placeholder="Total Net Salary"
    onChange={(e)=>{

        settotalsalary (e.target.value);

    }}/>
  </div>
  


  <center>
  <div class="form-group">
    <button type="submit" class="btn btn-primary btn-sm">Submit</button>
  </div>
  </center>
</form>
</div>
</center>  
    )
}