import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router';
import ReactDOM from "react-dom";
import "./Service.css";
import axios from 'axios';
import {Link} from 'react-router-dom'

import { red, blue } from '@material-ui/core/colors';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Services() {
  const[id,setId]=useState("");
  const [services, setServices] = useState([])
  const history=useHistory()
const [loading,setLoading ] =useState(false);
const[posts,setPosts]= useState([]);
const[searchtitle,setSearchtitle]=useState("");

useEffect(()=>{
const loadPosts = async()=>{
  setLoading(true);
  const response = await axios.get("http://localhost:8070/service/");

setPosts(response.data);
setLoading(false);
};
loadPosts();
}, []);

 const config = {
  headers: {
      "content-Type": "application/json"
  }
};


  useEffect(() => {
   async function getServices() {
      axios.get(`http://localhost:8070/service`).then((res) => {
        setServices(res.data)
        //console.log(res.data)   
      }).catch((err) => {
        alert(err)
      })
    }
    getServices();
  }, [])
  
  function view(id){
    history.push(`/salon/item/${id}`)
  }
  async function deleteService(id){        
    await axios.delete(`http://localhost:8070/service/delete/${id}`,config).then(() => {
        alert("Item deleted successfully")
      
    }).catch((error) => {
        alert(`Failed to delete the product\n${error.message}`)
    }) 
} 
return(
  <div className="container">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <header className="serviceHeader">
    <div className="logo">
                <h1>
                    <Link to={"/CustomerView"}>{'SERVICES MANAGEMENT'}</Link>
                </h1>
            </div>
            <ul>
                <li><Link to="/AddService">{'CREATE NEW'}</Link></li>
                <li><Link to="/Service">SERVICES & PACKAGES</Link></li>
                <li><Link to="/DetailsPage">SERVICES REPORTS</Link></li>
                </ul>
</header>
<div className="filter-menu">
<input type="text"style={{width:"16%", height:"25%"}}  placeholder="Enter your search" onChange={(e)=>setSearchtitle(e.target.value)}/> </div>
{loading ?(
  <h4>Loading...</h4>
) : (
  posts
  .filter((value)=>{
    if(searchtitle === ""){
      return value;
    }else if(value.title.toLowerCase().includes(searchtitle.toLowerCase())){
      return value;
    }
  })
.map((services)=>
<div key={services.title}>
       
<div class="column">
                <div class="productcard">
                    <div class="imgBx">
                        <img  src="./image/d.jpg" alt="service"/>
                    </div>
                    <div class="p-3">
                    
                        <h6>{services.title}</h6>
                        <h6>Rs.{services.price}.00</h6>
                       
                          <span> 
                          
                          <button className="mx-2 productbtn" style={{backgroundColor:red[500]}} 
                          onClick={()=>{if (window.confirm('Are you sure you want to delete this record?'))deleteService(services._id)}} >
                                        DELETE <DeleteForeverIcon/>
                                        </button>
                              &nbsp;&nbsp;&nbsp;
                              <button class="productviewbtn" style={{backgroundColor:blue[400]}} onClick={()=>view(services._id)}>
                                        VIEW
                                    </button>
                              
                          </span> 
                        
                    </div>
                </div>
                </div>
            </div>
        ))}
       
        </div>
  )
       }export default Services