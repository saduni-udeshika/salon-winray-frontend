import React, { Component } from 'react';
import axios from 'axios';
import "./AddempAt.css";


export default class empAt extends Component {

  constructor(props) {
    super(props);
    this.state = {
      empID: "",
      empName: "",
      date: "",
      timeIn: "",
      timeOut: "",
      totalHours: ""
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

    const { empID, empName, date, timeIn, timeOut, totalHours,  } = this.state;
    this.setState({
      totalHours:  ((parseFloat(this.state.timeOut) *60 ) - (parseFloat(this.state.timeIn)*60))/60
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { empID, empName, date, timeIn, timeOut, totalHours  } = this.state;

    const data = {
      empName: empName,
      empID: empID,
      date: date,
      timeIn: timeIn,
      timeOut: timeOut,
      totalHours: totalHours
    }

    console.log(data)

    axios.post("http://localhost:8070/attendence/save", data).then((res) => {
      if (res.data.success) {
        this.setState(
          {
            empID: "",
            empName: "",
            date: "",
            timeIn: "",
            timeOut: "",
            totalHours: ""
          }
        )
      }
    })
  }


  render() {
    return (
      <center>
        <div className="at-container">
          <h1>ADD RECORD</h1>
          <form className="needs-validation" noValidate>
            <div >

            <div className="col-md-12" style={{ marginBottom: '15px' }}>

               <input type="text"
               className="form-control"
               name="empID"
               placeholder="Enter Employee ID"
               value={this.state.empID}
               onChange={this.handleInputChange} />
              </div>

              <div className="col-md-12" style={{ marginBottom: '15px' }}>

                <input type="text"
                  className="form-control"
                  name="empName"
                  placeholder="Enter Employee Name"
                  value={this.state.empName}
                  onChange={this.handleInputChange} />
              </div>

              
              <div className="col-md-12" style={{ marginBottom: '15px' }}>

                <input type="text"
                  className="form-control"
                  name="date"
                  placeholder="Enter the Date"
                  value={this.state.date}
                  onChange={this.handleInputChange} />
              </div>

              <div className="col-md-12" style={{ marginBottom: '15px' }}>

                <input type="text"
                  className="form-control"
                  name="timeIn"
                  placeholder="Enter the Time In"
                  value={this.state.timeIn}
                  onChange={this.handleInputChange} />
              </div>

              <div className="col-md-12" style={{ marginBottom: '15px' }}>

                <input type="text"
                  className="form-control"
                  name="timeOut"
                  placeholder="Enter the time Out"
                  value={this.state.timeOut}
                  onChange={this.handleInputChange} />
              </div>

             
              <button className="btn btn-warning" style={{ marginTop: '15px', marginBottom: '15px' }} onClick={this.onCalculate}>
                &nbsp; DISPLAY TOTAL HOURS
              </button>

              <div className="col-md-12" style={{ marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>TOTAL HOURS</label>
                <input type="text"
                  className="form-control"
                  name="totalHours"
                  value={this.state.totalHours} />
              </div>

              
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
