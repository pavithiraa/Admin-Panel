import React from "react";
// import LoginForm from './Login'
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
function RegForm({ welcome, loginTxt, account }) {
  return (
    <div
      style={{
        background: "white",
      }}
      className="row  "
    >
      <div className="col-md-12 col-sm-12 loginRow">
        <div className="imgDiv">
          <img
          style={{width:'600px'}}
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
            alt=""
          />
        </div>
        <div className=" form">
          <h3 className="textCenter">{welcome}</h3>
          {/* <div style={{ display: "flex" }}> */}
            <Form.Control
              style={{ display: loginTxt === "Register" ? "block" : "none" }}
              size="sm"
              type="text"
              placeholder="First Name"
              className="formControl"
            />
            <Form.Control
              style={{ display: loginTxt === "Register" ? "block" : "none" }}
              size="sm"
              type="text"
              placeholder="Last Name"
              className="formControl"
            />
          {/* </div> */}
          <Form.Control 
            size="sm"
            type="text"
            placeholder="Enter Email address..."
            className="formControl "
          />
          {/* <div style={{ display: "flex" }}> */}
            <Form.Control
              size="sm"
              type="text"
              placeholder="Password"
              className="formControl"
            />
            <Form.Control
              style={{ display: loginTxt === "Register" ? "block" : "none" }}
              size="sm"
              type="text"
              placeholder=" Repeat Password"
              className="formControl"
            />
          {/* </div> */}
          <Form.Check
            style={{ display: "none" }}
            className="formCheck"
            type="checkbox"
            id={`check-api-'checkbox'`}
          >
            <Form.Check.Input className="checkBox" type="checkbox" isValid />
            <Form.Check.Label>Remember Me</Form.Check.Label>
          </Form.Check>
          <Button className="buttons" variant="primary">
            {loginTxt}
          </Button>{" "}
          <hr className="divider" />
          <Button className="buttons" variant="danger">
            <i class="fab fa-google fa-fw btnIcon"></i>
            {loginTxt} with Google
          </Button>{" "}
          <Button className="buttons" id="dark">
            <i class="fab fa-facebook-f btnIcon"></i>
            {loginTxt} with facebook
          </Button>{" "}
          <Link className="nextPg" to="/Forgot Password">
            Forgot Password?
          </Link>
          <Link className="nextPg" to="/Login">
            {account}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default function Register() {
  return (
    <div>
      <RegForm
        welcome="Create an Account !"
        loginTxt="Register"
        account="Already have an Account ? Login!"
      />
    </div>
  );
}
