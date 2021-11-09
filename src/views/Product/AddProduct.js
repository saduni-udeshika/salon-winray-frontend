import React,{useState} from "react";
import axios from "axios";
import "./AddProduct.css";
import { Link } from "react-router-dom";




export default function AddProduct(){

  const [product_id, setProduct_id] = useState("");
  const [product_name, setProduct_name] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [category_name, setCategory_name] = useState("");
  const [quantity, setQuantity] = useState("");

  function sendData(e){
    e.preventDefault();

      const newProduct ={

        product_id,
        product_name,
        description,
        price,
        category_id,
        category_name,
        quantity

      }

    axios.post("http://localhost:8070/product/add",newProduct).then(()=>{
      alert("Product Added");

    }).catch((err)=>{
      alert(err)
    })
  }

    return(
      <center>
     <div className="product-container" > 
     <h1>Add New Product</h1>
      <form onSubmit={sendData} className="add-product">

  <div class="col-md-12">
    <input type="text" class="form-control" id="product_id" placeholder="Product ID" required
    onChange={(e)=>{

      setProduct_id(e.target.value);

    }}/>
  </div>
  
  <div class="col-md-12">
    <input type="text" class="form-control" id="product_name" placeholder="Product Name" required
    onChange={(e)=>{

      setProduct_name(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <input type="text" class="form-control" id="description" placeholder="Enter Product Description" required
    onChange={(e)=>{

      setDescription(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <input type="text" class="form-control" id="price" placeholder="Enter Price" placeholder="Price" required
    onChange={(e)=>{

      setPrice(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <input type="text" class="form-control" id="category_id" placeholder="Product Category ID" required
    onChange={(e)=>{

      setCategory_id(e.target.value);

    }}/>
  </div>

  <div class="col-md-12" >
    <input type="text" class="form-control" id="category_name"  placeholder="Product Category Name" required
    onChange={(e)=>{

      setCategory_name(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <input type="text" class="form-control" id="quantity" placeholder="Quantity" required
    onChange={(e)=>{

      setQuantity(e.target.value);

    }}/>
  </div>
<br></br>
  <center>
  <div class="col-md-12">
    <button type="submit" class="btn btn-warning ">Submit</button>

        &nbsp;
        &nbsp;

        <Link to="/Product">
        <button className="btn btn-danger">Cancel</button> 
        </Link>
        
        
        </div>

  </center>
</form>
</div>  
</center>
    )
}