import React from "react";
import "./EmployeeSalaryCalculator.css";

class Calculation extends React.Component{
    constructor(){
        super();
        this.state={
            num1:'',
            num2:'',
            num3:'',
            num4:'',
            total:''
        }
    }
    handlenum1=(Event)=>{
        this.setState({
            num1:Event.target.value
        })
    }
    handlenum2=(Event)=>{
        this.setState({
            num2:Event.target.value
        })
    }
    handlenum3=(Event)=>{
        this.setState({
            num3:Event.target.value
        })
    }
    handlenum4=(Event)=>{
        this.setState({
            num4:Event.target.value
        })
    }
    exe = (Event) =>{
        this.setState({total: parseInt(this.state.num1) + parseInt(this.state.num2) * parseInt(this.state.num3) - parseInt(this.state.num4)})
        Event.prevent.default();
    }

    render(){
       return( 
             <center>
            <div className="cal-container">
            <h1>SALARY CALCULATOR</h1>
            <h2>===============================</h2>
            <hr />
            <form onSubmit={this.exe} >
            <div >
            

            BASIC SALARY:
            <input type="text" value={this.state.num1}onChange={this.handlenum1}/>
            </div>
            <br>
            </br>
            <div >
            OT RATE PER HOUR:
            <input type="text" value={this.state.num2}onChange={this.handlenum2}/>
            </div>
            <br>
            </br>
            <div >
            OT HOURS:
            <input type="text" value={this.state.num3}onChange={this.handlenum3}/>
            </div>
            <br>
            </br>
            <div>
            DEDUCTIONS:
            <input type="text" value={this.state.num4}onChange={this.handlenum4}/>
            </div>
            <br>
            </br>
            <div>
            TOTAL NET SALARY:
            <input type="text"  value={this.state.total} onChange={this.handletotal}/>
            </div>
            <br>
            </br>
            
            <div>   
            <button type="submit" class="btn btn-primary " >CALCULATE</button>
        
            </div>
            </form>
            
            </div>
            </center>
       ) 
    }
}

export default Calculation;

/*other code is starting*/
/*import React, {Component } from 'react';
import axios from 'axios';


 export default class salaryCalculator extends Component{

    constructor(props){
        super(props);
        this.state={
            empId:"",
            empName:"",
            jobTitle:"",
            basicSalary:"",
            month:"",
            payOTRate:"",
            payOTHours:"",
            deductions:"",
            totalSalary:""
        }
    }
    handleInputChange= (e) =>{
        const {name, value}= e.target;

        this.setState({
           ...this.state,
           [name]:value
        })
    }
    onCalculate=(e) =>{
        e.preventDefault();

        const {empId,empName,jobTitle,basicSalary,month,payOTRate,payOTHours,deductions,totalSalary} =this.state;
        this.setState({totalSalary: parseInt(this.state.basicSalary) + parseInt(this.state.payOTRate) * parseInt(this.state.payOTHours) - parseInt(this.state.deductions)
        })
    }
    onSubmit= (e) =>{
        e.preventDefault();

        const data ={
            empId:empId,
            empName:empName,
            jobTitle:jobTitle,
            basicSalary:basicSalary,
            month:month,
            payOTRate:payOTRate,
            payOTHours:payOTHours,
            deductions:deductions,
            totalSalary:totalSalary

        }
        console.log(data)

        axios.post("http://localhost:8070/employeeSalary/save", data).then((res) =>{
            if(res.data.success){
                this.setState(
                    {
                        empId:"",
                        empName:"",
                        jobTitle:"",
                        basicSalary:"",
                        month:"",
                        payOTRate:"",
                        payOTHours:"",
                        deductions:"",
                        totalSalary:""
                    }
                )
            }
        })
    }

render(){
    return(
        <div className="col-md-8 mt-4 mx-auto">
          <h1 className="h3 mb-3 font-weight-normal">CALCULATE SALARY</h1>
          <form className="needs-validaation" noValidate>
             <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Employee ID</label>
                <input type="text"
                className="form-control"
                name="empId"
                placeholder="Enter Employee ID"
                value={this.state.empId}
                onChange={this.handleInputChange}/>
              </div>
              
              <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Employee Name</label>
                <input type="text"
                className="form-control"
                name="empName"
                placeholder="Enter Employee Name"
                value={this.state.empName}
                onChange={this.handleInputChange}/>
              </div>

              <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Job Title</label>
                <input type="text"
                className="form-control"
                name="jobTitle"
                placeholder="Enter jobTitle"
                value={this.state.jobTitle}
                onChange={this.handleInputChange}/>
              </div>

              <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Basic Salary</label>
                <input type="text"
                className="form-control"
                name="basicSalary"
                placeholder="Enter Basic Salary"
                value={this.state.basicSalary}
                onChange={this.handleInputChange}/>
              </div>

              <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Month</label>
                <input type="text"
                className="form-control"
                name="month"
                placeholder="Enter the month"
                value={this.state.month}
                onChange={this.handleInputChange}/>
              </div>

              <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>OT Rate per Hour</label>
                <input type="text"
                className="form-control"
                name="payOTRate"
                placeholder="Enter Employe OT Rate"
                value={this.state.payOTRate}
                onChange={this.handleInputChange}/>
              </div>

              <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>OT Hours</label>
                <input type="text"
                className="form-control"
                name="payOTHours"
                placeholder="Enter OT Hours"
                value={this.state.payOTHours}
                onChange={this.handleInputChange}/>
              </div>

              <div className="form-group" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Deductions</label>
                <input type="text"
                className="form-control"
                name="deductions"
                placeholder="Enter Deductions"
                value={this.state.deductions}
                onChange={this.handleInputChange}/>
              </div>

              <button className="btn btn-success" style={{marginTop:'15px', marginBottom:'15px'}} onClick={this.onCalculate}>
              &nbsp; CALCULATE TOTAL NET SALARY
              </button>

              <div className="form-group col-md-4" style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Total Salary</label>
                <input type="text"
                className="form-control"
                name="totalSalary"
                value={this.state.totalSalary}/>
              </div>

              <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              </button>
            </form>

        </div>
        
       
    

              
              

      )
    
 }
}*/