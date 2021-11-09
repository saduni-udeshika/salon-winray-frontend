import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router';
import '../Services/Service.css'
import './SingleItem.css'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'
import { orange, green, red, blue} from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';


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
    
    function update(uid){
        history.push(`/salon/item/update/${uid}`)
    }

      
    return (
      <div>
      <header className="serviceHeader">
              <ul>
                  <li><Link to="/AddService">{'CREATE NEW'}</Link></li>
                  <li><Link to="/Service">SERVICES&PACKAGES</Link></li>
                  </ul>
  </header>
  <br></br>
  <br></br>
        <div className="container" align="center">
        
<div className="detailcard">
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
                            <table className="singleitembtns">  
                        <div> 
                                    &nbsp;&nbsp;&nbsp; &nbsp;
                                    <button className="mx-2 productbtn" style={{backgroundColor:green[400]}} onClick={()=>update(id)}>
                                        Update <EditIcon/>
                                        </button>
                             
                        </div>
                        </table>               
            </div>
           </div>
           </div>
            <br></br>
        <div>
            <div> 
            <h2 align="left"> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Related Services & Packages
              <br></br>
              <br></br>
            </h2>
            </div>
               <table className="relatedproduct">
            <div className="products">
                <div className="container productGridr" > 
                {services.slice(0, 5).map((Service,key)=>( 
                        <div key={key}> 
                            <div class="productcard">
                                    <div class="imgBx">
                                        <img  src="/image/d.jpg" alt="service"/>
                                    </div>
                                    <div class="p-3">
                                        <h6>{Service.title}</h6>
                                        <h6>Rs.{Service.price}.00</h6>
                                    <div align="right">
                                        <span> 
                                          
                                                         &nbsp;&nbsp;&nbsp;
                                            <button class="relatdbtn" style={{backgroundColor:blue[400]}} onClick={()=>view(Service._id)}> View</button>
                                        </span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </table>
        </div>
       </div>
      
    )
}

export default ServiceDetails
