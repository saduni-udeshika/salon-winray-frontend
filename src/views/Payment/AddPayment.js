import React,{useState} from "react";
import axios from "axios";
import "./Payment.css";
import "./AddPayment.css";




export default function AddPayment() {
  const[paymentId, setPaymentID]= useState("");
  const[customername, setName]= useState("");
  const[paymentType, setPaytype]= useState("");
  const[service_type, setServicetype]= useState("");
  const[price, setPrice]= useState("");
  const[discount, setDiscounts]= useState("");
  const[date, setDate]= useState("");
  const[amount, setAmounts]= useState("");

  function sendData(e){
    e.preventDefault();

    const newpayment ={
      paymentId,
      customername,
      paymentType,
      service_type,
      price,
      discount,
      date,
      amount
    }

    axios.post("http://localhost:8070/payment/add",newpayment).then(()=>{
       alert("Payment Added")   
    }).catch((err)=>{
       alert(err)
    })

    
  }


    
  return (
     
    <div className="paycontainer">
      <br></br>
      <br></br>
      
      <h1>Add New Payment</h1>
    <form onSubmit={sendData}>
      <div className="form-group">
        <label for="paymentId">Payment ID</label>
        <input type="text" class="form-control" id="paymentId"  placeholder="Enter Payment ID"
        onChange={(e)=>{
          setPaymentID(e.target.value);
        }} />

        </div>

  
      <div className="form-group">
        <label for="customername">Client Name</label>
        <input  required={true} type="text" class="form-control" id="customername"  placeholder="Enter Client Name"
        onChange={(e)=>{
          setName(e.target.value);
        }} />

        </div>

        <div className="form-group">
        <label for="paymentType">Payment Type</label>
        <input  required={true} type="text" class="form-control" id="paymentType" placeholder="Enter Payment Type"
        onChange={(e)=>{
          setPaytype(e.target.value);
        }} />

        </div>

        <div className="form-group">
        <label for="service_type">Service Type</label>
        <input required={true}  type="text" class="form-control" id="service_type" placeholder="Enter Service Type"
        onChange={(e)=>{
          setServicetype(e.target.value);
        }} />

        </div>

        <div className="form-group">
        <label for="price"> Price</label>
        <input required={true}  type="text" class="form-control" id="price" placeholder="Enter Price"
        onChange={(e)=>{
          setPrice(e.target.value);
        }} />

        </div>

        <div className="form-group">
        <label for="discount">Discount</label>
        <input type="text" class="form-control" id="discount" placeholder="Enter Discounts"
        onChange={(e)=>{
          setDiscounts(e.target.value);
        }} />
        
        </div>

        <button type="calculate" class="btn btn-primary">Calculate</button>

        <div className="form-group">
        <label for="date">Entry Date</label>
        <input type="text" class="form-control" id="date" placeholder="Enter Entry Date"
        onChange={(e)=>{
          setDate(e.target.value);
        }} />
        
        </div>

        <div className="form-group">
        <label for="amount">Amount</label>
        <input type="text" class="form-control" id="amount" placeholder="Enter the Amount"
        onChange={(e)=>{
          setAmounts(e.target.value);
        }} />
        
        </div>


        <button type="submit" class="btn btn-primary">Submit</button>
          
        
      </form>
    </div>
  );
}
