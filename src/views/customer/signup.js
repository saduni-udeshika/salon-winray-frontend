import React,{useState} from "react";
import axios from "axios";
import "./Home.css";




export default function AddProduct(){

  const [custId, setCustId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [Date_of_birth, setDate_of_birth] = useState("");
  const [Phone_number, setPhone_number] = useState("");
  const [Email_address, setEmail_address] = useState("");
  const [password, setPassword,] = useState("");

  function sendData(e){
    e.preventDefault();

      const newCustomer ={

            custId,
            name,
            age,
            sex,
            Date_of_birth,
            Phone_number,
            Email_address,
            password

      }

    axios.post("http://localhost:8070/customer/add",newCustomer).then(()=>{
      alert("Signup Successful");

    }).catch((err)=>{
      alert(err)
    })
  }

    return(
      <center>
     <div className="container" > 
     <h1>Add New Product</h1>
      <form onSubmit={sendData} className="addExpense" >

  <div class="col-md-12">
    <input type="text" class="form-control" id="custId" placeholder="Customer ID" required
    onChange={(e)=>{

      setCustId(e.target.value);

    }}/>
  </div>
  
  <div class="col-md-12">
    <input type="text" class="form-control" id="name" placeholder="Customer Name" required
    onChange={(e)=>{

      setName(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <input type="text" class="form-control" id="age" placeholder="Enter your age" required
    onChange={(e)=>{

      setAge(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <input type="text" class="form-control" id="sex" placeholder="Enter Price" placeholder="sex" required
    onChange={(e)=>{

      setSex(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <input type="text" class="form-control" id="Date_of_birth" placeholder="Date_of_birth" required
    onChange={(e)=>{

      setDate_of_birth(e.target.value);

    }}/>
  </div>

  <div class="col-md-12" >
    <input type="text" class="form-control" id="Phone_number"  placeholder="Enter Phone_number" required
    onChange={(e)=>{

      setPhone_number(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <input type="text" class="form-control" id="Email_address" placeholder="Enter Email_address" required
    onChange={(e)=>{

      setEmail_address(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <input type="text" class="form-control" id="password" placeholder="Enter Price" placeholder="Enter password" required
    onChange={(e)=>{

      setPassword(e.target.value);

    }}/>
  </div>
<br></br>
  <center>
  <div class="col-md-12">
    <button type="submit" class="btn btn-primary">Signup</button>
  </div>
  </center>
</form>
</div>  
</center>
    )
}