import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddLedgers() {
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [type, setType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  function sendLedgerData(e) {
    e.preventDefault(); //prevent submit event default behaviour
    const newLedger = {
      date,
      note,
      type,
      paymentMethod
    };

    axios
      .post("http://localhost:8070/ledger/add", newLedger)
      .then(() => {
        alert("Ledger plan added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="expenseBody">
      <div className="container col-6" onSubmit={sendLedgerData}>
        <form className="addExpense">
           <div className="form-group">
            <label for="exampleInputEntryDate1">Date</label>
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
            <label for="exampleInputEntryDate1">Small Note</label>
            <textarea
              required={true}
              maxLength={100}
              type="text"
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Description"
              onChange={(e) => {
                setNote(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEntryDate1">Type</label>
            <input
              required={true}
              type="text"
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Type"
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEntryDate1">Payment Method</label>
            <input
              required={true}
              type="text"
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Payment Method"
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          &nbsp;
          <Link to="/ledgers">
            <button className="btn btn-danger">CANCEL</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default AddLedgers;