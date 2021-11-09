import React from "react";
import Input from "@material-ui/core/Input";
import "./AdminLogin.css";
import { FormControl, InputLabel } from "@material-ui/core";
import Button from "@material-ui/core/Button";

function AdminLogin() {
  return (
    <div className="loginContainer">
      <div className="headingLogin">Admin Login</div>
      <div className="loginInput">
        <FormControl>
          <InputLabel htmlFor="my-input">User Name</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
      </div>

      <div className="loginInput">
        <FormControl>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
      </div>
      <div className="loginBtn">
      <Button variant="contained" color="primary" className="loginBtn">
        LOGIN
      </Button>
      </div>
    </div>
  );
}
export default AdminLogin;
