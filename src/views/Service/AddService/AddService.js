import { useState } from 'react';
import axios from 'axios';
import './AddServices.css'
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Link, useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import {green, red, blue } from '@material-ui/core/colors';


function AddService() {
    const[service_id, setservice_id]=useState("");
    const[title,setTitle]=useState("");
    const[file,setFile]=useState(""); 
    const[price,setPrice]=useState("");
    const[duration,setDuration]=useState("");
    const[content,setContent]=useState("");
    const[category,setCategory]=useState("");
    const [previewSource, setPreviewSource] = useState();

  
    //handling the image uploading
    const handleFileInputChange = (event) => {
        const file = event.target.files[0]
        previewImage(file);
    };

    //display a preview of uploaded image
    const previewImage = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreviewSource(reader.result)
        }
    }

    const newService = {service_id,title,price,duration,content,category}

    async function add(event){
        event.preventDefault();

        const config = {
            headers: {
                "content-Type": "application/json"
            }
        };
        
        try {
            await axios.post("http://localhost:8070/service/add", newService, config)
            alert("Added Successfully")          
        }catch (error) {         
            alert("Can't be Added");
        }
    }
    

 
    return (
    <div className="container" >
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <header className="serviceHeader">
    <div className="logo">
                <h1>
                    <Link to={"/AddService"}>{'CREATE NEW'}</Link>
                </h1>
            </div>
            <ul>
                <li><Link to="/AddService">{'CREATE NEW'}</Link></li>
                <li><Link to="/Service">SERVICES&PACKAGES</Link></li>
                </ul>
</header>
<br></br>
        <div className="create_service">
            <form onSubmit={add} class="addService">
                <div className="row">
                    <div className="col-8">
                        <div className="row">
                        <div className="col-md-8 mb-4">
                                <div className="form-id">
                                    <OutlinedInput
                                    
                                        type="text" id="s_id" placeholder="Service ID" 
                                        required fullWidth
                                        onChange={(e)=>setservice_id(e.target.value)}
                                        inputProps={{style: {padding: 12}}}
                                    />
                                </div>
                            </div>
                            <div className="col-md-8 mb-4">
                                <div className="form-title">
                                    <OutlinedInput
                                        type="text" id="title" placeholder="Service Name" 
                                        required fullWidth
                                       
                                        onChange={(e)=>setTitle(e.target.value)}
                                        inputProps={{style: {padding: 12}}}
                                        inputProps={{maxLength:20}}
                                    />
                                </div>
                            </div>
                            <div> 
                                <div className="col-md-8 mb-4">
                                    <div className="form-price">
                                        <OutlinedInput 
                                            type="number"  id="price" placeholder="Service Price" required fullWidth
                                            onChange={(e)=>setPrice(e.target.value)}
                                            inputProps={{style: {padding: 12}}}
                                            inputProps={{ min: "0" }}
                                        />
                                    </div>
                                </div>
                            </div> 
                            <div> 
                                <div className="col-md-8 mb-4">
                                    <div className="form-duration">
                                        <OutlinedInput 
                                            type="number" id="duration" placeholder="Duration" required fullWidth
                                            onChange={(e)=>setDuration(e.target.value)}
                                            inputProps={{style: {padding: 12}}}
                                            inputProps={{ min: "0" }}
                                        />
                                    </div>
                                </div>
                            </div>   
                                         
                            <div className="col-md-10 mb-4">
                                <div className="form-content">
                                    <TextField
                                        multiline rows={1}
                                        id="content" placeholder="Service Description" 
                                        required fullWidth variant="outlined"
                                        onChange={(e)=>setContent(e.target.value)}
                                        inputProps={{style: {padding: 12}}}
                                        inputProps={{maxLength:70}}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 mb-4">
                                <div className="form-category">
                                    <label for="inputCategory">Category</label>
                                    <select id="inputState"className="form-control"onChange={(e)=>setCategory(e.target.value)}>
                                  <option selected>Hair Treatements</option>
                                  <option selected>Nail Treatements</option>
                                  <option selected>Body Treatements</option>
                                  <option selected>Our Packages</option>
                                  <option selected>Our Offers</option>
                                    </select>
                                </div>
                            </div>
                            </div>
                    <div className="col-4 d-flex justify-content-center">
                        <div>
                            {previewSource ? 
                                <img src={previewSource} alt="preview" className="previewImgservice"/>
                            :
                                <img src="/image/d.jpg" className="previewImgservice" alt="service pic"/>
                            }
                            <div className="form-group">
                                <label htmlFor="serviceimg">
                                    <input
                                        style={{ display: 'none' }}
                                        id="serviceimg"
                                        name="serviceimg"
                                        type="file"
                                        onChange={handleFileInputChange}
                                    />

                                    <Button color="primary" variant="contained" component="span">
                                        <AddAPhotoIcon/> &nbsp; Add Image
                                    </Button>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                        <button type="submit" className="btn btn-primary">CREATE</button>
                        &nbsp;
        <Link to="/Service">
        <button className="btn btn-danger">CANCEL</button> 
        </Link>
                        </div>
                    </div>
                </div>
            </form>             
        </div>                    
    </div>


        
    )
}

export default AddService
