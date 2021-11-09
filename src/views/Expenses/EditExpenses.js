import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function EditExpenses() {
  const [expenseCategory, setExpenseCategory] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  //retrieve relevent data form relavent fields
  //const [expense, setExpense] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8070/expense/get/${id}`)
      .then((res) => {
        // setExpense(res.data);
        console.log(res.data.expense);
        setExpenseCategory(res.data.expense.expenseCategory);
        setAmount(res.data.expense.amount);
        setDate(res.data.expense.date);
        setDescription(res.data.expense.description);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //update data
  function sendUpdateExpense(e) {
    e.preventDefault(); //prevent submit event default behaviour
    const updateExpense = {
      expenseCategory,
      date,
      amount,
      description,
    };

    axios
      .put(`http://localhost:8070/expense/update/${id}`, updateExpense)
      .then(() => {
        alert("Update expense sucessfully");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="expenseBody">
      <div className="container col-6" onSubmit={sendUpdateExpense}>
        <form className="addExpense">
          <div className="form-group">
            <label htmlFor="exampleInputCategory">Expense Category</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputexpenseCategory1"
              placeholder="Enter Expense Category"
              value={expenseCategory}
              onChange={(e) => {
                setExpenseCategory(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEntryDate1">Entry Date</label>
            <input
              type="date"
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Enter Entry Date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEntryDate1">Amount</label>
            <input
              type="number"
              min={0}
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEntryDate1">Description</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEntryDate1"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Update
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
export default EditExpenses;
