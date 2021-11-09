import React,{useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./AddempAt.css";



function EditEmpAts(){

    const [empID, setEmployee_id] = useState("");
    const [empName, setEmployee_name] = useState("");
    const [date, setDate] = useState("");
    const [timeIn, setTimeIn] = useState("");
    const [timeOut, setTimeOut] = useState("");
    const [totalHours, setTotalHours] = useState("");
    

  const {id} = useParams();
  useEffect(() => {
    function getEmpAts() {
        axios.get(`http://localhost:8070/attendence/get/${id}`)
      .then((res) => {

        console.log(res.data.attendence);
        setEmployee_id(res.data.attendence.empID);
        setEmployee_name(res.data.attendence.empName);
        setDate(res.data.attendence.date);
        setTimeIn(res.data.attendence.timeIn);
        setTimeOut(res.data.attendence.timeOut);
        setTotalHours(res.data.attendence.totalHours);
        
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    getEmpAts();
  }, []);



  function sendUpdateEmpAt(e){
    e.preventDefault();

      const updateempAt= {

        empID,
        empName,
        date,
        timeIn,
        timeOut,
        totalHours


      }

    axios.put(`http://localhost:8070/attendence/update/${id}`, updateempAt).then(()=>{
      alert("Employee's attendence information is Updated");

    }).catch((err)=>{
      alert(err);
    })
  }

    return(
        <center>
     <div className="at-container"> 
     <h1>EDIT EMPLOYEE SALARY</h1>
      <form onSubmit={sendUpdateEmpAt}  className="edit-at">


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
    
    <input type="text" class="form-control" id="date" placeholder="Date" 
    value={date}
    onChange={(e)=>{

      setDate(e.target.value);

    }}/>
  </div>
  <br>
  </br>
  <div class="col-md-12">
    
    <input type="text" class="form-control" id="timeIn" placeholder="Enter Time In" 
    value={timeIn}
    onChange={(e)=>{

      setTimeIn(e.target.value);

    }}/>
  </div>
  <br>
  </br>
  <div class="col-md-12">
   
    <input type="text" class="form-control" id="timeOut"  placeholder="Enter Time Out" 
    value={timeOut}
    onChange={(e)=>{

      setTimeOut(e.target.value);

    }}/>
  </div>
  <br>
  </br>
  <div class="col-md-12">
   
    <input type="text" class="form-control" id="totalHours" placeholder="Total Hours" 
    value={totalHours}
    onChange={(e)=>{

      setTotalHours(e.target.value);

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
export default EditEmpAts;