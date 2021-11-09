import React from "react";
import Input from "@material-ui/core/Input";
import { FormControl, InputLabel } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./CustomerLogin.css";


import { Link } from "react-router-dom";

function CustomerLogin(){

    return (
        <welcomePicture>
          <div className="welcomePicture">
          <div className="loginContainer">
      <div className="headingLogin">Login</div>
      <div className="inputLogin">
      <div className="loginInput">
        <FormControl>
          <InputLabel htmlFor="my-input">User Name</InputLabel>
          <br/><br/>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
      </div>

      <div className="loginInput">
        <FormControl>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <br/><br/>
          <Input id="my-input" aria-describedby="my-helper-text" 
          />
        </FormControl>
      </div>
      </div>
      <div className="loginBtn">
      <Button variant="contained" className="loginBtn" id="login">
        LOGIN
      </Button>
      &nbsp;
      <Link to={"/signup"}>
      <Button variant="contained" className="signinBtn" id="signin">
        SIGN-UP
      </Button>
      </Link>
      </div>
    </div>

          </div>
        </welcomePicture>
        );
}

export default CustomerLogin;