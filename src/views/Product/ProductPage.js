import React,{useState, useEffect} from "react";
import axios from "axios";
import {Link, NavLink} from 'react-router-dom';
import { useParams } from "react-router";
import "./ProductPage.css";


export default function ProductPage() {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        const loadPosts =async () =>{
            setLoading(true);
            const response =await axios.get("http://localhost:8070/product/");
            setPosts(response.data);
            setLoading(false);
        }
        loadPosts();
    }, []);
    

    const[products,setProducts] = useState([]);
    useEffect(() => {
       function getProducts() {
           axios.get("http://localhost:8070/product/").then((res) =>{
               setProducts(res.data);
           }).catch((err) =>{
               alert(err.message);
           })
       }
       getProducts();
    }, [products]);


    return (
        <><div className="productpage">
            <hr />
            <center>
            <h1>PRODUCT PAGE</h1>
            </center>
            <hr />

            <input className="search1"
            style={{ width:"15%" ,height:"30px"}}
            type="text"
            placeholder="    Enter Product Category"
            onChange={(e) => setSearchName(e.target.value)}/>


            
            </div>
            
    
                
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
                                value.category_name.includes(searchName.toUpperCase())
                            ){
                                return value;
                            }




               }).map((products) => 

               
              <div className="productContainer">
                  <div class="productCard">

                       <div class="product">{products.product_name}
                       
                       </div>
                      
                       <hr />

                       <div class="productDetails" key={products._id}>
                           <div class="pro">{products.product_id}</div>
                           
                           <div class="pro">{products.description}</div>
                           <div class="price">{products.price}</div>
                           <div class="category">{products.category_name}</div>


                           <Link to="/my">
                           <button className="product-btn">Add Wishlist</button> 
                            </Link>
 

                       </div>
                       </div></div>
                      

                       ))}

        </>
    )
}