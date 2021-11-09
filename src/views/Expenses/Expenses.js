import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Expenses.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Navbar from "../../components/Navbar/Navbar";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function Expenses() {
  //fetch all expense collections
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    function getExpenses() {
      axios
        .get("http://localhost:8070/expense/")
        .then((res) => {
          setExpenses(res.data);
          //console.log(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getExpenses();
  }, [expenses]);

  //delete
  function deleteExpense(_id) {
    axios
      .delete(`http://localhost:8070/expense/delete/${_id}`)
      .then((res) => {
        //console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  //total expenses
  let sumOfExpense = 0;
  expenses.reduce(function (accumulator, currentValue) {
    //console.log(typeof currentValue.amount);
    //console.log(typeof accumulator);
    sumOfExpense = accumulator + currentValue.amount;
    return sumOfExpense;
  }, 0);
  {
    expenses.map((expense) => sumOfExpense);
  }
  //console.log(sum);

  //fetch all income records in payment collections
  const [income, setIncome] = useState([]);
  useEffect(() => {
    function getIncome() {
      axios
        .get("http://localhost:8070/payment/")
        .then((res) => {
          setIncome(res.data);
          //console.log(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getIncome();
  }, [income]);

  //total income
  let sumOfIncome = 0;
  income.reduce(function (accumulator, currentValue) {
    sumOfIncome = accumulator + currentValue.amount;
    return sumOfIncome;
  }, 0);
  {
    income.map((income) => sumOfIncome);
  }

  //profit calculation
  let profit = sumOfIncome - sumOfExpense;
  //console.log(sumOfExpense);

  return (
    <div className="expenseBody">
      <Navbar />
      <div className="containerExpenses">
        <div className="total">Total Expenses: Rs.{sumOfExpense}.00</div>
        <table
          className="table table-bordered incomeTable table-light"
          id="expensesheet"
        >
          <thead className="thead-dark">
            <tr className="expenseRaw">
              <th scope="col">ID</th>
              <th scope="col">Entry Date</th>
              <th scope="col">Expense Cetogory</th>
              <th scope="col">Amount</th>
              <th scope="col">description</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {expenses.map((expenses) => (
            <tr>
              <td className="expenseTableData">{expenses._id.slice(0,5)}</td>
              <td className="expenseTableData">{expenses.date}</td>
              <td className="expenseTableData">{expenses.expenseCategory}</td>
              <td className="expenseTableData">{expenses.amount}</td>
              <td className="expenseTableData">{expenses.description}</td>
              <td>
                <Link
                  to={`/EditExpense/${expenses._id}`}
                  className="btn btn-sm btn-success"
                >
                  EDIT
                  <EditIcon className="btn-icon" fontSize="small" />
                </Link>
                &nbsp;
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete this record?"
                      )
                    )
                      deleteExpense(expenses._id);
                  }}
                >
                  {" "}
                  DELETE
                  <DeleteIcon className="btn-icon" fontSize="small" />
                </button>
              </td>
            </tr>
          ))}
        </table>
        <Link to={"/AddExpense"} className="btn btn-warning btn-sm">
          ADD EXPENSE <AddCircleIcon />
        </Link>
      </div>
      <div className="incomeBody">
        <div className="total">Total Income: Rs.{sumOfIncome}.00</div>
        <div className="containerIncome">
          <table
            className="table table-bordered incomeTable table-light"
            id="incomesheet"
          >
            <thead className="thead-dark">
              <tr className="incomeRaw">
                <th scope="col">ID</th>
                <th scope="col">Entry Date</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {income.map((income) => (
                <tr>
                  <td className="expenseTableData">{income._id.slice(0,5)}</td>
                  <td className="expenseTableData">{income.date}</td>
                  <td className="expenseTableData">{income.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total">Profit: Rs.{profit}.00</div>
        </div>
      </div>
    </div>
  );
}
export default Expenses;
