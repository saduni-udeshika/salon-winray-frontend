import React, { Component } from 'react';
import axios from 'axios';
import "./AddSalary.css";


export default class SalaryCalc extends Component {

  constructor(props) {
    super(props);
    this.state = {
      empID: "",
      empName: "",
      month: "",
      salary: "",
      nopay: "",
      hours: "",
      advance: "",
      amount: ""
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })
  }


  onCalculate = (e) => {
    e.preventDefault();

    const { empID, empName, month, salary, nopay, hours, advance, amount } = this.state;
    this.setState({
      amount: parseInt(this.state.salary) + (((parseInt(this.state.salary) / 20) / 8) *
        parseInt(this.state.hours)) - ((parseInt(this.state.salary) / 20) * parseInt(this.state.nopay)) - parseInt(this.state.advance)
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { empID, empName, month, salary, nopay, hours, advance, amount } = this.state;

    const data = {
      empName: empName,
      empID: empID,
      month: month,
      salary: salary,
      nopay: nopay,
      hours: hours,
      advance: advance,
      amount: amount
    }

    console.log(data)

    axios.post("http://localhost:8070/employeeSalary/save", data).then((res) => {
      if (res.data.success) {
        this.setState(
          {
            empID: "",
            empName: "",
            month: "",
            salary: "",
            nopay: "",
            hours: "",
            advance: "",
            amount: ""
          }
        )
      }
    })
  }


  render() {
    return (
      <center>
        <div className="salary-container">
          <h1>SALARY CALCULATOR</h1>
          <form className="needs-validation" noValidate>
            <div >

              <div className="col-md-12" style={{ marginBottom: '15px' }}>

                <input type="text"
                  className="form-control"
                  name="empName"
                  placeholder="Enter Employee Name"
                  value={this.state.empName}
                  onChange={this.handleInputChange} />
              </div>

              <div className="col-md-12" style={{ marginBottom: '15px' }}>

                <select name="month" onChange={this.handleInputChange} defaultValue="Select Month" class="form-control">
                  <option defaultValue>-- Select Month --</option>
                  <option value="JANUARY">JANUARY</option>
                  <option value="FEBRUARY">FEBRUARY</option>
                  <option value="MARCH">MARCH</option>
                  <option value="APRIL">APRIL</option>
                  <option value="MAY">MAY</option>
                  <option value="JUNE">JUNE</option>
                  <option value="JULY">JULY</option>
                  <option value="AUGUST">AUGUST</option>
                  <option value="SEPTEMBER">SEPTEMBER</option>
                  <option value="OCTOBER">OCTOBER</option>
                  <option value="NOVEMBER">NOVEMBER</option>
                  <option value="DECEMBER">DECEMBER</option>
                </select>
              </div>

              <div className="col-md-12" style={{ marginBottom: '15px' }}>

                <input type="text"
                  className="form-control"
                  name="salary"
                  placeholder="Enter Basic Salary"
                  value={this.state.salary}
                  onChange={this.handleInputChange} />
              </div>

              <div className="col-md-12" style={{ marginBottom: '15px' }}>

                <input type="number"
                  className="form-control"
                  name="nopay"
                  placeholder="Enter No. of No-pay Days"
                  value={this.state.nopay}
                  onChange={this.handleInputChange} />
              </div>

              <div className="col-md-12" style={{ marginBottom: '15px' }}>

                <input type="text"
                  className="form-control"
                  name="hours"
                  placeholder="Enter OT Hours"
                  value={this.state.hours}
                  onChange={this.handleInputChange} />
              </div>

              <div className="col-md-12" style={{ marginBottom: '15px' }}>

                <input type="text"
                  className="form-control"
                  name="advance"
                  placeholder="Enter the Advance"
                  value={this.state.advance}
                  onChange={this.handleInputChange} />
              </div>

              <button className="btn btn-warning" style={{ marginTop: '15px', marginBottom: '15px' }} onClick={this.onCalculate}>
                &nbsp; CALCULATE TOTAL SALARY
              </button>

              <div className="col-md-12" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>TOTAL SALARY</label>
                <input type="text"
                  className="form-control"
                  name="hours"
                  value={this.state.amount} />
              </div>

              <br/><br/>
              <button className="btn btn-success" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                <i className="far fa-check-square"></i>
                SAVE
              </button>
            </div>

          </form>
        </div>
      </center>
    )
  }
}
