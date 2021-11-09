/*import React,{useState,  useEffect} from "react";
import axios from "axios";





export default function AllPayment() {

    const[payments, setPayments]= useState([]);
    
    useEffect(()=>{
        function getPayments(){
            axios.get("http://localhost:8070/payment/").then((res)=>{
                setPayments(res.data);
                
            }).catch((err)=>{
                alert(err.message);

            })
        }
        getPayments();
    }, [payments]);

    return(
        <div className="container">
            <h1>Payment management</h1>
            <table class ="table">
                <thead>
                    <tr>
                        <th scope="col">PaymentID</th>
                        <th scope="col">ClientName</th>
                        <th scope="col">PaymentType</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Entry Date</th>
                        <th scope="col">Amount</th>
                        
                    </tr>
                </thead>

                {payments.map((payments)=>(
                    <tr>
                        <td>{payments.paymentId}</td>
                        <td>{payments.customername}</td>
                        <td>{payments.paymentType}</td>
                        <td>{payments.discount}</td>
                        <td>{payments.date}</td>
                        <td>{payments.amount}</td>

                        <button type ="button" className="btn btn-success btn-sm">Edit</button>
                        $nbsp;
                        <button type ="button" className="btn btn-success btn-sm">Delete</button>

                    </tr>
                ))}
            </table>
            <link to={"/AddPayment"} className="btn btn-success btn-sm">ADD PAYMENT</link>
        </div>
    )
  }*/