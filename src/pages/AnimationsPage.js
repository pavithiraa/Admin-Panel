import React from "react";
import { Navbar, Container, DropdownButton, Dropdown } from "react-bootstrap";
import Footer from '../components/Footer/Footer'
function AnimationCard({flag,text,text1}) {
  return (
      <div className="card">
          <div className="card-header">
              {text1}
          </div>
          <div className="card-body">
      <code
        style={{
          margin: "20px",
        }}
      >
       {text}
      </code>
      <small
        style={{
          color: "#858796",
          display: "block",
          margin: "20px",
        }}
      >
        Navbar Dropdown Example:
      </small>
      <Navbar
        style={{
          margin: "20px",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse
            style={{
              color: "grey",
            }}
            className="justify-content-end"
          >
            <DropdownButton
              style={{
                marginLeft: "320px",
              }}
              variant="light"
              align="end"
              title="Dropdown"
              id="dropdown-menu-align-right"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{display:flag ? 'block' : 'none'}}>
      <small
        style={{
          color: "#858796",
          display: "block",
          margin: "20px",
        }}
      >
         Dropdown Button Example:
      </small>
      <DropdownButton style={{margin:'20px'}}id="dropdown-basic-button" title="Dropdown">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
      </div>
     
      <small
        style={{
          color: "#858796",
          display: "block",
          margin: "20px",
        }}
      >
        Note: This utility animates the CSS transform property, meaning it will
        override any existing transforms on an element being animated! In this
        theme, the grow in animation is only being used on dropdowns within the
        navbar.
      </small>
    </div>
      </div>
    
  );
}

export default function AnimationsPage() {
  return (
    <div
      style={{ background: "#f8f9fc", color: "#858796" }}
      className="conainer-fluid "
    >
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h3>Animation Utilities</h3>
          <p>
            Bootstrap's default utility classes can be found on the official{" "}
            <span style={{ color: "#4e73df" }}> Bootstrap Documentation</span>{" "}
            page. The custom utilities below were created to extend this theme
            past the default utility classes built into Bootstrap's framework.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6">
         
            <AnimationCard text="animated--grow-in" text1="Grow In Animation Utiltity"/>
           
          </div>
          <div className="col-md-6 col-sm-12">
          <AnimationCard text="animated--fade-in" text1="Fade In Animation Utiltity" flag="second"/>
          </div>
        </div>
     <Footer/>
    </div>
  ); 
}
