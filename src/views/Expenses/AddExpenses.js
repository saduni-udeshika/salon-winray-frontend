import React, { useState } from "react";
import "./Expenses.css";
import axios from "axios";
import { Link } from "react-router-dom";

function AddExpenses() {
  const [expenseCategory, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  function sendExpenseData(e) {
    e.preventDefault(); //prevent submit event default behaviour
    const newExpense = {
      expenseCategory,
      date,
      amount,
      description
    };

    axios
      .post("http://localhost:8070/expense/add", newExpense)
      .then(() => {
        alert("expense added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="expenseBody">
      <div className="container col-6" onSubmit={sendExpenseData}>
        <form className="addExpense">
          <div className="form-group">
            <label for="exampleInputCategory">Expense Category</label>
            <select id="inputState" className="form-control" onChange={(e) => {
                setCategory(e.target.value);
              }}>
              <option defaultValue>Product</option>
              <option>Service</option>
            </select>
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
            <label for="exampleInputEntryDate1">Amount</label>
            <input
              required ={true}
              type="number" min="0" 
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Amount(Rs)"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEntryDate1">Description</label>
            <textarea
              required ={true}
              maxLength = {100}
              type="text"
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          &nbsp;
          <Link to="/Expenses">
            <button className="btn btn-danger">CANCEL</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default AddExpenses;

