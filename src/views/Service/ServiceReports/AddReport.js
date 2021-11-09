import React, { useState } from "react";
import "./ServiceReport.css";
import axios from "axios";
import { Link } from "react-router-dom";

function AddReport() {
    const [serviceName, setserviceName] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [count, setCount] = useState("");
    const [totalPrice, setTotalPrice] = useState("");

    function sendReportData(e) {
        e.preventDefault(); //prevent submit event default behaviour
        const newDetail = {
            serviceName,
            price,
            date,
            count,
            totalPrice
        };
        axios
        .post("http://localhost:8070/servicereport/add", newDetail)
        .then(() => {
          alert("Data added");
        })
        .catch((err) => {
          alert(err);
        });
    }

    return (
        <div className="reporteBody">
          <div className="container col-6" onSubmit={sendReportData}>
            <form className="addDetail">
            <div className="form-group">
                <label for="exampleInputName">Name</label>
                <input
                  required ={true}
                  type="text"  
                  className="form-control"
                  id="exampleInputName"
                  placeholder="Service/Package Name"
                  onChange={(e) => {
                    setserviceName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="exmapleprice">Price</label>
                <input
                  required ={true}
                  type="number" min="0" 
                  className="form-control"
                  id="exmapleprice"
                  placeholder="Price(Rs)"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
                </div> 
              <div className="form-group">
                <label for="exampleInputEntryDate1">Entry Date</label>
                <input
                  required ={true}
                  type="date"
                  className="form-control"
                  id="exampleInputEntryDate1"
                  placeholder="Enter Entry Date"
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="exampleCount1">Count</label>
                <input
                  required ={true}
                  type="number" min="0" 
                  className="form-control"
                  id="exampleCount1"
                  placeholder="No of clients"
                  onChange={(e) => {
                    setCount(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label for="exampleTotal">Total</label>
                <input
                  required ={true}
                  type="number" min="0" 
                  className="form-control"
                  id="exampleTotal"
                  placeholder="Total"
                  onChange={(e) => {
                    setTotalPrice(e.target.value);
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                ADD
              </button>
              &nbsp;
              <Link to="/DetailsPage">
                <button className="btn btn-danger">CANCEL</button>
              </Link>
            </form>
          </div>
        </div>
      );
    }
    export default AddReport;
    
    
  