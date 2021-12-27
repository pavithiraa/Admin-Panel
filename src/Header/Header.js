import React from "react";
import { Badge } from "react-bootstrap";
import AnimationsPage from "../pages/AnimationsPage";
import "./Header.css";
import { Dropdown } from "react-bootstrap";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Footer from "../components/Footer/Footer";
import CardsPage from "../pages/CardsPage";
import BordersPage from "../pages/BordersPage";
import { Route } from "react-router-dom";
import ColorsPage from "../pages/ColorsPage";
import Dashboard from "../components/Dashboard/Dashboard";
import ButtonsPage from "../components/Button/ButtonsPage";
import Other from "../pages/Other";
import ForgotPassword from "../pages/ForgotPassword";
import NotFound, { BlankPage } from "../pages/NotFound";
import Charts from "../pages/ChartsPage";
import Tables from "../pages/Tables";
import { Users } from "../pages/Users";
import CenteredTree from "../pages/CenteredTree";
export default function Navbars() {
  // const [display,setDisplay]=useState(false);
  return (
    <main className="Navbar container-fluid">
      <ul className="row" style={{ display: "flex", height: "70px" }}>
        {/* <div className="col-md-2"></div> */}
        <li
          className="col-md-6 col-sm-12"
          // style={{ float: "left" }}
        >
          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <input
                // style={{ width: "400px" }}
                type="text"
                class="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i style={{ color: "white" }} class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>
        </li>
        {/* <li className="col-md-2 col-sm-2"></li> */}
        <div className="col-md-6 col-sm-12">
          <li className="listItm">
            {/* <div onClick={()=>{
            setDisplay(!display)
          }}className="userInfo">
                Douglas McGee
              <img
                class="img-profile"
                src='https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg'
                alt=""
              />
             
          </div> */}
            <Dropdown>
              <Dropdown.Toggle
                className="userDropItem"
                variant="light"
                id="dropdown-basic"
              >
                {/* <div 
  // onClick={()=>{
  //           setDisplay(!display)
  //         }}
          className="userInfo"> */}
                Douglas McGee
                <img
                  class="img-profile"
                  src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg"
                  alt=""
                />
                {/* </div> */}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="userDropItem" href="#/action-1">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item className="userDropItem" href="#/action-2">
                  Settings
                </Dropdown.Item>
                <Dropdown.Item className="userDropItem" href="#/action-3">
                  Activity Log
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="userDropItem" href="#/action-3">
                  LogOut
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li
            className="listItm"
            // style={{ float: "right" }}
          >
            <div className="icons">
              <i class="fas fa-envelope fa-1x"></i>

              <Badge className="badge" pill variant="danger">
                7
              </Badge>
            </div>
          </li>
          <li
            className="listItm"
            // style={{ float: "right" }}
          >
            <div className="icons">
              <i class="fas fa-bell fa-1x"></i>

              <Badge className="badge" pill variant="danger">
                9
              </Badge>
            </div>
          </li>
          {/* <li  id="lastBatch"></li> */}
        </div>
      </ul>
      {/* <ul className="userDropDown dropdown-menu dropdown-menu-right shadow animated--grow-in" style={{display:display? 'block' : 'none'}}>
        <li className="dropdown-item">profile</li>
        <li className="dropdown-item">settings</li>
        <li className="dropdown-item">Activity Log</li>
        <hr/>
        <li className="dropdown-item">Log Out</li>
      </ul> */}
      <Route exact path="/">
        <Dashboard />
        <Footer />
      </Route>
      <Route path="/Buttons">
        <ButtonsPage />
      </Route>
      <Route path="/Cards">
        <CardsPage />
      </Route>
      <Route path="/Color">
        <ColorsPage />
      </Route>
      <Route path="/Border">
        <BordersPage />
      </Route>
      <Route path="/Animation">
        <AnimationsPage />
      </Route>
      <Route path="/other">
        <Other />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/Forgot Password">
        <ForgotPassword />
      </Route>
      <Route path="/404 Page">
        <NotFound />
      </Route>
      <Route path="/Blank Page">
        <BlankPage />
      </Route>
      <Route path="/Charts">
        <Charts />
      </Route>
      <Route path="/Tables">
        <Tables />
      </Route>
      <Route path="/Users">
        <Users />
      </Route>
      <Route path="/tree">
        <CenteredTree />
      </Route>
    </main>
  );
}
