import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom'
import './Customerview.css';
import {blue, orange, red, yellow} from '@material-ui/core/colors';


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
    history.push(`/salons/item/${id}`)
  }

return(
  <div className="container">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <header>
    <div className="logo">
                <h1>
                    <Link to={"/CustomerView"}>{'OUR SERVICES & PACKAGES'}</Link>
                </h1>
            </div>
           
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
                        &nbsp;&nbsp;
                         <button class="viewbtn" style={{backgroundColor:blue[400]}}  onClick={()=>view(services._id)}>
                                VIEW
                                    </button>
                                    <button class="viewbookbtn" style={{backgroundColor:yellow[800]}}> <Link to={"/AddAppointment"} >BOOK NOW</Link>
                     
                                    </button></span>
                    </div>
                </div>
                </div>
            </div>
        ))}
       
        </div>
  )
  
      
       

       }export default Services