import React from 'react'
import {Link} from "react-router-dom"
import {Form,Button} from "react-bootstrap"
function ForgotPasswordForm({welcome,loginTxt,account}) {
    return (
      <div
        style={{
          background: "white",padding:'20px',marginTop:'50px'
        }}
        className="row  "
      >
        <div className="col-md-12 col-sm-12 loginRow">
          <div className="imgDiv">
            <img style={{height:'600px'}}
              src="https://images.unsplash.com/photo-1517519014922-8fc06b814a0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMjgxMDAy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600"
              alt=""
            />
          </div>
          <div className=" form">
            <h3 className="textCenter">{welcome}</h3>
            <p style={{maxWidth:'400px',padding:'20px 30px',color:"#858796"}}>We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
            <Form.Control
            style={{margin:'20px 30px'}}
              size="sm"
              type="text"
              placeholder="Enter Email address..."
              className="formControl"
            />
            <Button className="buttons" variant="primary">
             { loginTxt}
            </Button>
            <Link className="nextPg" to="/Register">
              Create an Account! 
            </Link>
            <Link className="nextPg" to="/Login">
              Already Have an Account? Login !
            </Link>
           
          </div>
        </div>
      </div>
    );
  }
export default function ForgotPassword() {
    return (
        
            <ForgotPasswordForm welcome="Forgot Your Password?"loginTxt="Reset Password"/>
      
    )
}
