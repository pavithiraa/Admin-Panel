import React from "react";
import "./borderpage.css";
import Footer from "../components/Footer/Footer";
function BorderElmt1({text,color}) {
  return (
      <div className="card">
 <div
      id="Bcom"
      style={{
        borderLeft: `5px solid ${color}`,
      }}
      className="card-body"
    >
      .border-left {text}
    </div>
      </div>
   
  );
}
function BorderElmt2({text,color}) {
    return (
        <div className="card">
   <div
        id="Bcom"
        style={{
          borderBottom: `5px solid ${color}`,
        }}
        className="card-body"
      >
        .border-left {text}
      </div>
        </div>
     
    );
  }

export default function BordersPage() {
  return (
    <div className="borderPage">
      <div className="container-fluid">
        <div className="row">
          <div style={{color:"#858796"}} className="col-md-12 col-sm-12">
            <h3>Borders</h3>
            <p>
              Bootstrap's default utility classes can be found on the official{" "}
              <span style={{ color: "#4e73df" }}> Bootstrap Documentation</span>{" "}
              page. The custom utilities below were created to extend this theme
              past the default utility classes built into Bootstrap's framework.
            </p>
          </div>
        </div>
        <div className="row">
        <div className="col-md-6 col-sm-12">
          
          <BorderElmt1 color="#4e73df" text="primary"/>
          <BorderElmt1 color="#858796" text="secondary"/>
          <BorderElmt1 color="#1cc88a" text="success"/>
          <BorderElmt1 color="#36b9cc" text="info"/>
          <BorderElmt1 color="#f6c23e" text="warning"/>
          <BorderElmt1 color="#e74a3b" text="danger"/>
          <BorderElmt1 color="#5a5c69" text="dark"/>
      
      </div>
      <div className="col-md-6 col-sm-12">
        
        <BorderElmt2 color="#4e73df" text="primary"/>
        <BorderElmt2 color="#858796" text="secondary"/>
        <BorderElmt2 color="#1cc88a" text="success"/>
        <BorderElmt2 color="#36b9cc" text="info"/>
        <BorderElmt2 color="#f6c23e" text="warning"/>
        <BorderElmt2 color="#e74a3b" text="danger"/>
        <BorderElmt2 color="#5a5c69" text="dark"/>
    
    </div>
        </div>
       
      </div>
      <Footer/>
    </div>
  );
}
