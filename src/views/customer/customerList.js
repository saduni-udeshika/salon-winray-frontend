import React,{useState, useEffect} from "react";
import axios from "axios";
import "./customerList.css";

export default function CustomerList() {

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
       function getCustomer() {
           axios.get("http://localhost:8070/customer/").then((res) =>{
               setCustomer(res.data);
               console.log(res.data);
           }).catch((err) =>{
               alert(err.message);
           })
       }
       getCustomer();
    }, [customer]);


    function deleteCustomer(_id){
        axios.delete("http://localhost:8070/customer/delete/"+_id).then((res)=>{
            console.log(res.data);
            alert("Delete Successfully");

        }).catch((err)=>{
            alert(err)
        });
        setCustomer(customer.filter((customer) =>customer.custId !== _id))

    }


    return (
    <div className="allcustomer">
        <h1>All Customer Details</h1>
        <table class="cus-table">
            <thead>
                <tr className="cus-tr">
                <th clasName="cus-th" scope="col">custId</th>
                <th clasName="cus-th" scope="col" id="custHeader"> name</th>
                <th clasName="cus-th" scope="col" id="custHeader">age</th>
                <th clasName="cus-th" scope="col" id="custHeader">sex</th>
                <th clasName="cus-th" scope="col" id="custHeader">Date_of_birth</th>
                <th clasName="cus-th" scope="col" id="custHeader">Email_address</th>
                <th clasName="cus-th" scope="col" id="custHeader">Phone_number</th>
                </tr>
            </thead>
           
            {customer.map((customer) => (
        
                <tr className="cus-tr">
                    <td clasName="cus-td" >{customer.custId}</td>
                    <td clasName="cus-td" >{customer.name}</td>
                    <td clasName="cus-td" >{customer.age}</td>
                    <td clasName="cus-td" >{customer.sex}</td>
                    <td clasName="cus-td" >{customer.Date_of_birth}</td>
                    <td clasName="cus-td" >{customer.Email_address}</td>
                    <td clasName="cus-td" >{customer.Phone_number}</td>
                    
                    
                    <div class="btn">
                    &nbsp;
                    <button type="button" class="btn btn-danger btn-sm" onClick={() => deleteCustomer(customer._id)}>Delete</button>
                    </div>

                </tr> 
               
            ))}

     
        </table>

    </div>
    )
}