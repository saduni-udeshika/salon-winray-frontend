import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./BudgetPlans.css";
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { grey, red } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

function BudgetPlans() {
  //fetch all expense collections
  const [budgetPlans, setBudgetPlans] = useState([]);
  useEffect(() => {
    function getBudgetPlan() {
      axios
        .get("http://localhost:8070/budgetplan/")
        .then((res) => {
          setBudgetPlans(res.data);
          //console.log(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getBudgetPlan();
  }, [budgetPlans]);

  //delete
  function deleteBudgetPlans(_id) {
    axios
      .delete(`http://localhost:8070/budgetplan/delete/${_id}`)
      .then((res) => {})
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div className="expenseBody">
      <Navbar />
      {budgetPlans.map((budgetPlans) => (
        <div className="budgetContainer">
          <div className="budgetCard">
            <header>
              <p className="budgetmonth">{budgetPlans.month}</p>
            </header>
            <hr />
            <div className="budgetDetails">
              <div className="planText">{budgetPlans.description}</div>
              <div className="planText">Estimate: {budgetPlans.estimate}</div>
              <div className="planText">Actual: {budgetPlans.actual}</div>
              <div className="planText">Balance: {budgetPlans.balance}</div>
              <button
              className="btn btn-sm btnBudget"
              onClick={() => {if (window.confirm('Are you sure do you want to delete your budget plan?'))deleteBudgetPlans(budgetPlans._id)}}
              >
              <DeleteIcon fontSize="small" style={{color: red[600]}}/>
            </button>
            <Link to={"/add/budgetplans"} className="btn btn-sm btnBudget">
                <AddCircleIcon fontSize="small" style={{color: grey[600]}}/>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default BudgetPlans;
