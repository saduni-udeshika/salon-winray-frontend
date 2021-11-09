import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link to={"/Expenses"} className="nav-link active">Income and Expenses</Link>
        </li>
        &nbsp;
        <li className="nav-item">
          <Link to={"/ledgers"} className="nav-link active">Digital Ledgers</Link>
        </li>
        &nbsp;
        <li className="nav-item">
          <Link to={"/budgetPlans"} className="nav-link active">Budget Plans</Link>
        </li>
        &nbsp;
        <li className="nav-item">
          <Link to={"/balancesheet"} className="nav-link active">Balance Sheet</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
