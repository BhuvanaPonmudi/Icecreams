import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import BootstrapCarousel from "./BootstrapCarousel";
import { useState } from "react";
import  "../styles/Login.css";
import { validEmail, validPassword } from "./Regex";


function Login() {


  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(true);
  const [pwdError, setPwdError] = useState(true);

  const validate = () => {
    if (!validEmail.test(email)) setEmailErr(true);
    else setEmailErr(false);

    if (!validPassword.test(password)) setPwdError(true);
    else setPwdError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailErr === false && pwdError === false) {
      setSubmitted(true);
    }
  };
  if (submitted) {

    return <BootstrapCarousel />;
  }
  const handle = () => {
    if (emailErr === false && pwdError === false) {
      localStorage.setItem("EmailID", email);
      localStorage.setItem("Password", password);
    }
  };

  return (

    <div className="Login">

      <h2>Already have an account? Log In.</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validate();
              handle();
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validate();
              handle();
            }}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
      

      
      <div className="signup">
     
        <h3>
          Don't have an account?<a href="Sign up.js">Sign Up</a>
        </h3>
      </div>

    </div>

  );
}
export default Login;
