import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router';
//import '../Services/Service.css'
//import '../SingleItem/SingleItem.css'
import './Customerview.css';
import axios from 'axios'
import '../../Appointment/AddAppointment';
import { Link } from '@material-ui/core';


function ServiceDetails(props) {
    const[id,setId]=useState("");
    const[title,setTitle]=useState("");
    const[price,setPrice]=useState("");
    const[duration,setDuration]=useState("");
    const[content,setContent]=useState("");
    const[category,setCategory]=useState("");
    const [services, setServices] = useState([]);
  const history=useHistory()
    const config = {
        headers: {
            "content-Type": "application/json"
        }
    };
    useEffect(() => {
    async function getServiceDetails() {
      axios.get(`http://localhost:8070/service/item/${props.match.params.id}`).then((res) => {
        setId(res.data.service._id)  
          setTitle(res.data.service.title)
        setPrice(res.data.service.price)
        setDuration(res.data.service.duration)
        setContent(res.data.service.content)
        setCategory(res.data.service.category)
        console.log(res)   
      }).catch((err) => {
        alert(err)
      })
    }
    getServiceDetails();

  }, [props])

    useEffect(() => {
      async function getServices() {
        axios.get(`http://localhost:8070/service`).then((res) => {
          setServices(res.data)
          console.log(res.data)   
        }).catch((err) => {
          alert(err)
        })
      }
      getServices();
    }, [])
    function view(id){
        history.push(`/salon/item/${id}`)
    }
    
   
      
    return (
      
        <div className="container">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
  
<div className="detail">
            <div className="detail">
                       <img src="/image/d.jpg " alt="" />
                 
           <div className="box-detail">
                        <div className="row">
                            <h2>{title}</h2>
                            <h6>#id: {id}</h6>
                        </div>
                        <br></br>
                        <br></br>
                        <h3>Price : Rs.{price}.00</h3>  
                        <br></br> 
                        <h4>Time : {duration} mins</h4> 
                        <br></br>
                        <h4>{content}</h4>
                        <br></br>
                        <h4>Category : {category}</h4>
                       
                       </div>
                     </div>                
            </div>
            
            <br></br>
       
        </div> 
        
    )
}

export default ServiceDetails
