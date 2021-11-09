import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from 'react-router-dom';
import "./AllProduct.css";

export default function AllProduct() {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            const response = await axios.get("http://localhost:8070/product/");
            setPosts(response.data);
            setLoading(false);
        }
        loadPosts();
    }, []);


    const [products, setProducts] = useState([]);
    useEffect(() => {
        function getProducts() {
            axios.get("http://localhost:8070/product/").then((res) => {
                setProducts(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getProducts();
    }, [products]);


    function deleteProduct(_id) {
        axios.delete("http://localhost:8070/product/delete/" + _id).then((res) => {
            console.log(res.data);
            alert("Delete Successfully");

        }).catch((err) => {
            alert(err)
        });
        setProducts(products.filter((products) => products._id !== _id))

    }


    return (
        <><div className="allproduct">
            <hr />
            <center>
            <h1>PRODUCT MANAGEMENT</h1>
           </center>
            <hr />
            
            <input className="search1"
                style={{ width: "10%", height: "30px" }}
                type="text"
                placeholder="   Enter Product ID "
                onChange={(e) => setSearchName(e.target.value)} />



        </div><div className>
                <center>
                    <table class="my-table">
                        <thead>
                            <tr class="my-tr">
                                <th class="my-th" scope="col">Product ID</th>
                                <th class="my-th" scope="col">Product Name</th>
                                <th class="my-th" scope="col">Description</th>
                                <th class="my-th" scope="col">Price</th>
                                <th class="my-th" scope="col">Category ID</th>
                                <th class="my-th" scope="col">Category Name</th>
                                <th class="my-th" scope="col">Quantity</th>
                                <th class="my-th" scope="col"></th>
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
                                        value.product_id.includes(searchName.toUpperCase())
                                    ) {
                                        return value;
                                    }


                                }).map((products) =>



                                    <tr class="my-tr" key={products._id}>
                                        <td class="my-td">{products.product_id}</td>
                                        <td class="my-td">{products.product_name}</td>
                                        <td class="my-td" >{products.description}</td>
                                        <td class="my-td" >{products.price}</td>
                                        <td class="my-td">{products.category_id}</td>
                                        <td class="my-td" >{products.category_name}</td>
                                        <td class="my-td">{products.quantity}</td>


                                        <div class="btn">
                                            <Link to={`/EditProduct/${products._id}`} class="btn btn-success btn-sm">
                                                Update</Link>
                                            &nbsp;
                                            <button type="button" class="btn btn-danger btn-sm" onClick={() => deleteProduct(products._id)}>Delete</button>
                                        </div>

                                    </tr>

                                ))}


                    </table>
                </center>

                <br></br>

                <center>
                    <Link to={"/AddProduct"} className="btn btn-warning">Add New Product</Link>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Link to={"/ProductPage"} className="btn btn-warning">Product Page</Link>
                </center>

            </div></>
    )
}