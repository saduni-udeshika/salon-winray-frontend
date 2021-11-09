
import React,{useState,  useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./Allpayment.css";

 export default function Payment(){


  const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        const loadPosts =async () =>{
            setLoading(true);
            const response =await axios.get("http://localhost:8070/payment/");
            setPosts(response.data);
            setLoading(false);
        }
        loadPosts();
    }, []);
  
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

  function deletePayment(_id){



    axios.delete(`http://localhost:8070/payment/delete/${_id}`)

    .then((res)=>{

      //console.log(res.data);

    }).catch((err)=>{

      alert(err)

    });

      setPayments(payments.filter((payments) => payments._id !== _id))

  }
    return(

      <><div className="allpayment">
      <input className="searche"
      style={{ width:"15%" ,height:"25px"}}
      type="text"
      placeholder="search payment ID"
      onChange={(e) => setSearchName(e.target.value)}/>
      </div>

        <div className="paycontainer">
          
            <h1>All Payment Details</h1>
            <table class="table">
        <thead>
          <tr>
            <th scope="col">PaymentID</th>
            <th scope="col">ClientName</th>
            <th scope="col">PaymentType</th>
            <th scope="col">Service Type</th>
            <th scope="col">Price</th>
            <th scope="col">Discount</th>
            <th scope="col">Entry Date</th>
            <th scope="col">Amount</th>
            
          </tr>
          </thead>
          {loading ? (
                    <button class="btn-btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aris-hidden="true"></span>
                        Loading </button>
                ) : (
                    posts
                        .filter((value) => {
                            if (searchName === "") {
                                return value;
                            } else if (
                                value.paymentId.includes(searchName.toUpperCase())
                            ){
                                return value;
                            }

                          }).map((payments)=>
           <tr>
        <td>{payments.paymentId}</td>
        <td>{payments.customername}</td>
        <td>{payments.paymentType}</td>
        <td>{payments.service_type}</td>
        <td>{payments.price}</td>
        <td>{payments.discount}</td>
        <td>{payments.date}</td>
        <td>{payments.amount}</td>

        
          
            <a href={`/update/${payments.paymentId}`} >EDIT</a>
            &nbsp;
            

           

                
            <Link to="#" className="btn btn-danger btn-sm"onClick={() => {if (window.confirm('Are you sure you wish to delete this record?')) deletePayment(payments._id)}} >DELETE</Link>
          </tr>
        
        
       ))}

       </table>

        <Link to="/AddPayment" className="btn btn-success btn-sm">ADD PAYMENT</Link>
    </div>
    </>
    )
}
