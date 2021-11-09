import React,{useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./EditSal.css";



function EditSalary(){

    const [empID, setEmployee_id] = useState("");
    const [empName, setEmployee_name] = useState("");
    const [month, setMonth] = useState("");
    const [salary, setSalary] = useState("");
    const [nopay, setNopay] = useState("");
    const [hours, setHours] = useState("");
    const [advance, setAdvance] = useState("");
    const [amount, setAmount] = useState("");

  const {id} = useParams();
  useEffect(() => {
    function getEmployeeSalarys() {
        axios.get(`http://localhost:8070/employeeSalary/get/${id}`)
      .then((res) => {

        console.log(res.data.employeeSalary);
        setEmployee_id(res.data.employeeSalary.empID);
        setEmployee_name(res.data.employeeSalary.empName);
        setMonth(res.data.employeeSalary.month);
        setSalary(res.data.employeeSalary.salary);
        setNopay(res.data.employeeSalary.nopay);
        setHours(res.data.employeeSalary.hours);
        setAdvance(res.data.employeeSalary.advance);
        setAmount(res.data.employeeSalary.amount);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    getEmployeeSalarys();
  }, []);



  function sendUpdateEmployeeSalary(e){
    e.preventDefault();

      const updateemployeesalary = {

        empID,
        empName,
        month,
        salary,
        nopay,
        hours,
        advance,
        amount


      }

    axios.put(`http://localhost:8070/employeeSalary/update/${id}`, updateemployeesalary).then(()=>{
      alert("Employee's salary information is Updated");

    }).catch((err)=>{
      alert(err);
    })
  }

    return(
        <center>
     <div className="employeesal-container"> 
     <h1>EDIT EMPLOYEE SALARY</h1>
      <form onSubmit={sendUpdateEmployeeSalary}  className="edit-employeesal">


  <div class="col-md-12">
   
    <input type="text" class="form-control" id="empID"placeholder="Employee ID"  
    value={empID}
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
    
    <input type="text" class="form-control" id="month" placeholder="Month" 
    value={month}
    onChange={(e)=>{

      setMonth(e.target.value);

    }}/>
  </div>
  <br>
  </br>
  <div class="col-md-12">
    
    <input type="text" class="form-control" id="salary" placeholder="Basic salary" 
    value={salary}
    onChange={(e)=>{

      setSalary(e.target.value);

    }}/>
  </div>
  <br>
  </br>
  <div class="col-md-12">
   
    <input type="text" class="form-control" id="nopay"  placeholder="NO-PAY" 
    value={nopay}
    onChange={(e)=>{

      setNopay(e.target.value);

    }}/>
  </div>
  <br>
  </br>
  <div class="col-md-12" >
   
    <input type="text" class="form-control" id="jobTitle" placeholder="OT Hours" 
    value={hours}
    onChange={(e)=>{

      setHours(e.target.value);

    }}/>
  </div>
  <br>
  </br>
  <div class="col-md-12">
   
    <input type="text" class="form-control" id="advance" placeholder="Advance" 
    value={advance}
    onChange={(e)=>{

      setAdvance(e.target.value);

    }}/>
  </div>
  
  <br>
  </br>
  <div class="col-md-12">
   
    <input type="text" class="form-control" id="amount" placeholder="Total salary" 
    value={amount}
    onChange={(e)=>{

      setAmount(e.target.value);

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
export default EditSalary;