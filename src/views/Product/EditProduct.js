import React,{useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import "./AddProduct.css";
import { Link } from "react-router-dom";



function EditProduct(){

  const [product_id, setProduct_id] = useState("");
  const [product_name, setProduct_name] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [category_name, setCategory_name] = useState("");
  const [quantity, setQuantity] = useState("");

  const {id} = useParams();
  useEffect(() => {
    function getProducts() {
      axios.get(`http://localhost:8070/product/get/${id}`)
      .then((res) => {

        console.log(res.data.product);
        setProduct_id(res.data.product.product_id);
        setProduct_name(res.data.product.product_name);
        setDescription(res.data.product.description);
        setPrice(res.data.product.price);
        setCategory_id(res.data.product.category_id);
        setCategory_name(res.data.product.category_name);
        setQuantity(res.data.product.quantity);
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    getProducts();
  }, []);



  function sendUpdateProduct(e){
    e.preventDefault();

      const updateproduct = {

        product_id,
        product_name,
        description,
        price,
        category_id,
        category_name,
        quantity

      }

    axios.put(`http://localhost:8070/product/update/${id}`, updateproduct).then(()=>{
      alert("Product Updated");

    }).catch((err)=>{
      alert(err);
    })
  }

    return(
      <center>
     <div className="product-container"> 
     <h1>Edit Product</h1>
      <form onSubmit={sendUpdateProduct} className="add-product">

  <div class="col-md-12">
  
    <input type="text" class="form-control" id="product_id" placeholder="Product ID" readOnly= {true}
    value={product_id}
    onChange={(e)=>{

      setProduct_id(e.target.value);

    }}/>
  </div>
  
  <div class="col-md-12">
    <input type="text" class="form-control" id="product_name" placeholder="Product Name"
    value={product_name}
    onChange={(e)=>{

      setProduct_name(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <input type="text" class="form-control" id="description" placeholder="Enter Product Description" 
    value={description}
    onChange={(e)=>{

      setDescription(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <input type="text" class="form-control" id="price" placeholder="Enter Price" 
    value={price}
    onChange={(e)=>{

      setPrice(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <input type="text" class="form-control" id="category_id" placeholder="Product Category ID"
    value={category_id}
    onChange={(e)=>{

      setCategory_id(e.target.value);

    }}/>
  </div>

  <div class="col-md-12" >
    <input type="text" class="form-control" id="category_name" placeholder="Product Category Name"
    value={category_name}
    onChange={(e)=>{

      setCategory_name(e.target.value);

    }}/>
  </div>

  <div class="col-md-12">
    <input type="text" class="form-control" id="quantity" placeholder="Quantity"
    value={quantity}
    onChange={(e)=>{

      setQuantity(e.target.value);

    }}/>
  </div>
<br></br>
  <center>
  <div class="col-md-12">
    <button type="submit" class="btn btn-success">Update</button>

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
    );
}
export default EditProduct;