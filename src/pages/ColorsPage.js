import React from "react";
import "./colors.css";
import Footer from "../components/Footer/Footer"
function TextGray({ text, color, top }) {
  return (
    <li
      className="element"
      style={{
        background: top ? "#5a5c69" : "white",
      }}
    >
      <p
        className="para"
        style={{
          color: color,
        }}
      >
        .text-gray-{text}
      </p>
    </li>
  );
}
function GrayScale({ Bg, clr,text1 }) {
  return <li className="element" style={{ background: Bg, color: clr }}>.bg-gray-{text1}</li>;
}
// function Background({colorName}){
//     return <li id="primaryBg" className="element colorCard ">

//         .bg-gradient-{colorName}

//     </li>
// }
export default function ColorsPage() {
  return (
      <>
    <div style={{ background: "#f8f9fc" }}>
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <h3>Colors</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Custom Text Color Utilities</div>
            <div className="card-body">
              <ul className="list">
                <TextGray top="top" text="100" color="#f8f9fc" />
                <TextGray top="top" text="200" color="#eaecf4" />
                <TextGray top="top" text="300" color="#dddfeb" />
                <TextGray top="top" text="400" color="#d1d3e2" />
                <TextGray text="500" color="#b7b9cc" />
                <TextGray text="600" color="#858796" />
                <TextGray text="700" color="#6e707e" />
                <TextGray text="800" color="#5a5c69" />
                <TextGray text="900" color="#3a3b45" />
              </ul>
              
            </div>
            
          </div>
          <div className="card">
            <div className='card-header'>
              Custom Font size Utitlities
            </div>
            <div className="card-body">
              <p style={{fontSize:'12px'}}>.text-xs</p>
              <p  style={{fontSize:'20px'}}>.text-lg</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <div className="card-header">
              Custom Background Gradient Utilities
            </div>
            <div className="card-body">
              <ul className="list">
                <li id="primaryBg" className="element colorCard ">
                  {" "}
                  .bg-gradient-primary{" "}
                </li>
                <li id="secondaryBg" className="element colorCard ">
                  {" "}
                  .bg-gradient-secondary{" "}
                </li>
                <li id="successBg" className="element colorCard ">
                  {" "}
                  .bg-gradient-success{" "}
                </li>
                <li id="infoBg" className="element colorCard ">
                  {" "}
                  .bg-gradient-info{" "}
                </li>
                <li id="warningBg" className="element colorCard ">
                  {" "}
                  .bg-gradient-warning{" "}
                </li>
                <li id="dangerBg" className="element colorCard ">
                  {" "}
                  .bg-gradient-danger{" "}
                </li>
                <li
                  id="lightBg"
                  style={{ color: "grey" }}
                  className="element colorCard "
                >
                  {" "}
                  .bg-gradient-light{" "}
                </li>
                <li id="darkBg" className="element colorCard ">
                  {" "}
                  .bg-gradient-dark{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="card">
            <div className="card-header">
              Custom GrayScale Background Utiltities
            </div>
            <div className="card-body">
              <ul className="list">
                <GrayScale Bg="#f8f9fc" clr="#858796" text1="100"/>
                <GrayScale Bg="#eaecf4" clr="#858796" text1="200"/>
                <GrayScale Bg="#dddfeb" clr="#858796" text1="300"/>
                <GrayScale Bg="#d1d3e2" clr="#858796"text1="400" />
                <GrayScale Bg="#b7b9cc" clr="#ffffff"text1="500" />
                <GrayScale Bg="#858796" clr="#ffffff"text1="600" />
                <GrayScale Bg="#6e707e" clr="#ffffff"text1="700" />
                <GrayScale Bg="#5a5c69" clr="#ffffff"text1="800" />
                <GrayScale Bg="#3a3b45" clr="#ffffff"text1="900" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    <Footer/>
    </>
  );
}
