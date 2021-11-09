import { useState, useEffect } from "react";

import axios from "axios";

import {useParams} from "react-router";

import { Link } from "react-router-dom";



function EditPayment() {

    const[paymentId, setPaymentID]= useState("");
    const[customername, setName]= useState("");
    const[paymentType, setPaytype]= useState("");
    const[discount, setDiscounts]= useState("");
    const[date, setDate]= useState("");
    const[amount, setAmounts]= useState("");
  


//retrieve relevent data form relavent fields

//const [expense, setExpense] = useState("");

const {id} = useParams();

useEffect(() => {

  function getPayment() {

    axios.get(`http://localhost:8070/payment/get/${id}`)

      .then((res) => {

       // setExpense(res.data);

        console.log(res.data);
        setPaymentID(res.data.pay.paymentId);

        setName(res.data.pay.customername);

        setPaytype(res.data.pay.paymentType);

      
        setDiscounts(res.data.pay.discount);

        setDate(res.data.pay.date);

        setAmounts(res.data.pay.amount);

      })

      .catch((err) => {

        console.log(err.message);

      });

  }

  getPayment();

}, []);
//update data 

function sendUpdatePayment(e){

    e.preventDefault();//prevent submit event default behaviour
  
    const updatePayment = {

      paymentId,
      customername,
      paymentType,
   
      discount,
      date,
      amount
    }
  
  
  
    axios.put(`http://localhost:8070/payment/update/${id}`, updatePayment).then(()=>{
  
      alert("Update payment sucessfully");
  
    }).catch((err)=>{
  
      alert(err);
  
    })
  
  }

  
   
  return (
 
    <div className="paycontainer">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Edit Payment</h1>
    <form onSubmit={sendUpdatePayment}>

    <div className="form-group">

  
<label for="paymentId">PaymentID</label>
<input type="text" class="form-control" id="paymentId" value={paymentId} placeholder="Enter Payment ID"
onChange={(e)=>{
  setPaymentID(e.target.value);
}} />

</div>

      <div className="form-group">

  
  <label for="customername">Client Name</label>
  <input type="text" class="form-control" id="customername" value={customername} placeholder="Enter Client Name"
  onChange={(e)=>{
    setName(e.target.value);
  }} />

  </div>

  <div className="form-group">
  <label for="paymentType">Payment Type</label>
  <input type="text" class="form-control" id="paymentType" value={paymentType} placeholder="Enter Payment Type"
  onChange={(e)=>{
    setPaytype(e.target.value);
  }} />

  </div>

 

  <div className="form-group">
  <label for="discount">Discount</label>
  <input type="text" class="form-control" id="discount" value={discount} placeholder="Enter Discounts"
  onChange={(e)=>{
    setDiscounts(e.target.value);
  }} />
  
  </div>

  <div className="form-group">
  <label for="date">Entry Date</label>
  <input type="text" class="form-control" id="date" value={date} placeholder="Enter Entry Date"
  onChange={(e)=>{
    setDate(e.target.value);
  }} />
  
  </div>

  <div className="form-group">
  <label for="amount">Amount</label>
  <input type="text" class="form-control" id="amount" value={amount}placeholder="Enter the Amount"
  onChange={(e)=>{
    setAmounts(e.target.value);
  }} />
  
  </div>

  
  <button type="submit" className="btn btn-success">  Update</button>
  &nbsp;
  <Link to="/Payment">

   

<button className="btn btn-danger">CANCEL</button> 

</Link>

</form>
</div>


);

}

export default EditPayment;