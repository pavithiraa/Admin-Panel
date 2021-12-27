import React from "react";
import "./login.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function LoginForm({welcome,loginTxt,account}) {
  return (
    <div
      style={{
        background: "white",
      }}
      className="row  "
    >
      <div className="col-md-12 col-sm-12 loginRow">
        <div className="imgDiv">
          <img id="img"
            src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
            alt=""
          />
        </div>
        <div className=" form">
          <h3 className="textCenter">{welcome}</h3>
          <Form.Control style={{display:loginTxt==="Register" ? 'block' : 'none'}}
            size="sm"
            type="text"
            placeholder="First Name"
            className="formControl"
          />
           <Form.Control style={{display:loginTxt==="Register" ? 'block' : 'none'}}
            size="sm"
            type="text"
            placeholder="Last Name"
            className="formControl"
          />
          <Form.Control
            size="sm"
            type="text"
            placeholder="Enter Email address..."
            className="formControl"
          />

          <Form.Control
            size="sm"
            type="text"
            placeholder="Password"
            className="formControl"
          />
            <Form.Control style={{display:loginTxt==="Register" ? 'block' : 'none'}}
            size="sm"
            type="text"
            placeholder=" Repeat Password"
            className="formControl"
          />
          <Form.Check
            className="formCheck"
            type="checkbox"
            id={`check-api-'checkbox'`}
          >
            <Form.Check.Input className="checkBox" type="checkbox" isValid />
            <Form.Check.Label>Remember Me</Form.Check.Label>
          </Form.Check>
          <Button className="buttons" variant="primary">
           { loginTxt}
          </Button>{" "}
          <hr className="divider" />
          <Button className="buttons" variant="danger">
            <i class="fab fa-google fa-fw btnIcon"></i>
            { loginTxt} with Google
          </Button>{" "}
          <Button className="buttons" id="dark">
            <i class="fab fa-facebook-f btnIcon"></i>
            { loginTxt} with facebook
          </Button>{" "}
          <Link className="nextPg" to="/Forgot Password">
            Forgot Password?
          </Link>
          <Link className="nextPg" to="/Register">
            {account} 
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <div className="login">
      {/* <div className=" container card ">
        <div className="card-body loginRow">
            <div className="col-md-6 col-sm-12">
            <div className="imgDiv">
            <img
              src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
              alt=""
            />
          </div>
            </div>
         <div className="col-md-6 col-sm-12">
         <div className=" form">
            <h3 className="textCenter">Welcome Back!</h3>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Enter Email address..."
              className="formControl"
            />
            <Form.Control
              size="sm"
              type="text"
              placeholder="Password"
              className="formControl"
            />
            <Form.Check
              className="formCheck"
              type="checkbox"
              id={`check-api-'checkbox'`}
            >
              <Form.Check.Input className="checkBox" type="checkbox" isValid />
              <Form.Check.Label>Remember Me</Form.Check.Label>
            </Form.Check>
            <Button className="buttons" variant="primary">
              Login
            </Button>{" "}
            <hr className="divider" />
            <Button className="buttons" variant="danger">
            <i class="fab fa-google fa-fw btnIcon"></i>
              Login with Google
            </Button>{" "}
            <Button className="buttons" id="dark">
            <i class="fab fa-facebook-f btnIcon"></i>
              Login with facebook
            </Button>{" "}
            <Link className="nextPg" to='/Forgot Password'>Forgot Password?</Link>
            <Link className="nextPg" to='/Forgot Password'>Create an Account</Link>
           
          </div>
         </div>
         
        </div>
      </div> */}
      <LoginForm welcome="Welcome Back!" loginTxt="Login" account="Create an Account!"/>
    </div>
    // <div className="container login">
    //   <div className="row">

    //         <div className="col-md-6 col-sm-12">
    //         <div className="card">
    //       <div className="card-body ">
    //           <img
    //             src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
    //             alt=""
    //           />
    //         </div>

    //       </div>
    //     </div>
    //     <div className="col-md-6 col-sm-12 form">
    //         <div className="card">
    //             <div className="card-body">
    //             <input placeholder="enter userName"></input>
    //             </div>
    //         </div>

    //     </div>

    //   </div>
    // </div>
  );
}
