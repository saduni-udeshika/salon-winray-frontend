import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CreateBudgetPlan() {
  const [month, setmonth] = useState("");
  const [description, setDescription] = useState("");
  const [estimate, setestimate] = useState("");
  const [actual, setActual] = useState("");
  const [balance, setBalance] = useState("");
  //const [calcbalance, setCalcBalance] = useState("");

  function sendBudgetData(e) {
    e.preventDefault(); //prevent submit event default behaviour
    const newBudgetPlan = {
      month,
      description,
      estimate,
      actual,
      balance,
    };

    axios
      .post("http://localhost:8070/budgetplan/add", newBudgetPlan)
      .then(() => {
        alert("Budget plan added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  //calculate balance
  //Balance = estimate - actual
  function calcBalance(e){
    setBalance(estimate - actual);
    e.preventDefault();
  }

  return (
    <div className="expenseBody">
      <div className="container col-6" onSubmit={sendBudgetData}>
        <form className="addExpense">
          <div className="form-group">
            <label for="exampleInputCategory">Select Month</label>
            <select
              class="custom-select mr-sm-2"
              id="inlineFormCustomSelect"
              onChange={(e) => {
                setmonth(e.target.value);
              }}
            >
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleInputEntryDate1">Description</label>
            <textarea
              required={true}
              maxLength={100}
              type="text"
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEntryDate1">Estimate</label>
            <input
              required={true}
              type="number"
              min="0"
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Estimate(Rs)"
              onChange={(e) => {
                setestimate(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEntryDate1">Actual</label>
            <input
              required={true}
              type="number"
              min="0"
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Actual(Rs)"
              onChange={(e) => {
                setActual(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-warning" style={{ marginTop: '15px', marginBottom: '15px' }} onClick={calcBalance}>
            Calculate Balance
          </button>
          <div className="form-group">
            <label for="exampleInputEntryDate1">Balance</label>
            <input
              required={true}
              type="number"
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Balance(Rs)"
              value ={balance}
              onChange={(e) => {
                
                //setestimate(e.target.value) - setActual(e.target.value);
                setBalance(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          &nbsp;
          <Link to="/budgetPlans">
            <button className="btn btn-danger">CANCEL</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default CreateBudgetPlan;
