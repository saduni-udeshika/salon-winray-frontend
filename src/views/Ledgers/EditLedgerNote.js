import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function EditLedgerNote() {
  
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [type, setType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  //retrieve relevent data form relavent fields
  //const [expense, setExpense] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8070/ledger/get/${id}`)
      .then((res) => {
        // setExpense(res.data);
        //console.log(res.data.ledgers);
        setDate(res.data.ledger.date);
        setNote(res.data.ledger.note);
        setType(res.data.ledger.type);
        setPaymentMethod(res.data.ledger.paymentMethod);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //update data
  function sendUpdateNote(e) {
    e.preventDefault(); //prevent submit event default behaviour
    const updateNote = {
      note,
      date,
      type,
      paymentMethod,
    };

    axios
      .put(`http://localhost:8070/ledger/update/${id}`, updateNote)
      .then(() => {
        alert("Update expense sucessfully");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="expenseBody">
      <div className="container col-6" onSubmit={sendUpdateNote}>
        <form className="addExpense">
          <div className="form-group">
            <label htmlFor="exampleInputEntryDate1">Date</label>
            <input
              type=""
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Enter Entry Date"
              readOnly = {true}
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCategory">Small Note</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputexpenseCategory1"
              placeholder="Enter Expense Category"
              value={note}
              onChange={(e) => {
                setNote(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEntryDate1">Type</label>
            <input
              className="form-control"
              id="type"
              placeholder="Type"
              readOnly = {true}
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEntryDate1">Payment Method</label>
            <input
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Description"
              value={paymentMethod}
              readOnly = {true}
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Update
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
export default EditLedgerNote;