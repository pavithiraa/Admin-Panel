import React from "react";
import "./button.css";
import Button from "react-bootstrap/esm/Button";
import Footer from "../Footer/Footer";
// import { SplitButton } from "react-bootstrap";
// import {ButtonToolbar,InputGroup} from "react-bootstrap"
function CircleBtn({ color, icon, size }) {
  return (
    <div
      style={{
        margin: "5px",
      }}
      className="btnCircle"
    >
      <Button size={size} style={{ borderRadius: "100%" }} variant={color}>
        <i class={icon}></i>
      </Button>
    </div>
  );
}

function SplitButton({ text, color, icon, flag, size }) {
  return (
    // <a href="#b1" class={`btn btn-${color} btn-icon-split`}>
    //   <span className="icon text-white-50">
    //     <i
    //       style={{
    //         padding: "-0.625rem 1.75rem;",color: flag ? 'grey': ''
    //       }}
    //       className={icon}
    //     ></i>
    //   </span>
    //   <span
    //     style={{
    //       marginLeft: "34px",color: flag? 'black' : 'white'
    //     }}
    //     className="text"
    //   >
    //    {text}
    //   </span>
    // </a>
    <Button
      size={size ? "lg" : ""}
      style={{
        position: "relative",
        display: "block",
        width: size === "lg" ? "250px" : "220px",
        margin: "20px",
      }}
      variant={color}
    >
      <i
        style={{
          color: flag ? "grey" : "",
          position: "absolute",
          background: "rgba(0, 0, 0, 0.15)",
          /* width: 42px; */
          top: "0",
          left: "0px",
          padding: size === "lg" ? "12px" : "10px",
        }}
        class={icon}
      ></i>
      <span style={{ marginLeft: "28px", color: flag ? "black" : "white" }}>
        {text}
      </span>
    </Button>
  );
}

export default function ButtonsPage() {
  return (
    <div className="buttonDiv">
      <div className=" container-fluid buttonDiv">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h3>Buttons</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="card">
              <div style={{ background: "#f8f9fc" }} className="card-header ">
                Circle Buttons
              </div>
              <div className="card-body">
                <p>
                  Use Font Awesome Icons (included with this theme package)
                  along with the circle buttons as shown in the examples below!
                </p>
                <ul>
                  <li>
                    <p>
                      <code>.btn-circle</code>
                    </p>
                    <CircleBtn color="primary" icon="fab fa-facebook-f" />
                    <CircleBtn color="success" icon="fas fa-check" />
                    <CircleBtn color="info" icon="fas fa-info-circle" />
                    <CircleBtn
                      color="warning"
                      icon="fas fa-exclamation-triangle"
                    />
                    <CircleBtn color="danger" icon="fas fa-trash" />
                  </li>
                  <li>
                    <p>
                      <code>.btn-circle .btn-sm</code>
                    </p>
                    <CircleBtn
                      color="primary"
                      icon="fab fa-facebook-f fa-xs"
                      size="sm"
                    />
                    <CircleBtn
                      color="success"
                      icon="fas fa-check fa-xs"
                      size="sm"
                    />
                    <CircleBtn
                      color="info"
                      icon="fas fa-info-circle fa-xs"
                      size="sm"
                    />
                    <CircleBtn
                      color="warning"
                      icon="fas fa-exclamation-triangle fa-xs"
                      size="sm"
                    />
                    <CircleBtn
                      color="danger"
                      icon="fas fa-trash fa-xs"
                      size="sm"
                    />
                  </li>
                  <li>
                    <p>
                      <code>.btn-circle .btn-lg</code>
                    </p>
                    <CircleBtn
                      color="primary"
                      icon="fab fa-facebook-f "
                      size="lg"
                    />
                    <CircleBtn color="success" icon="fas fa-check " size="lg" />
                    <CircleBtn
                      color="info"
                      icon="fas fa-info-circle "
                      size="lg"
                    />
                    <CircleBtn
                      color="warning"
                      icon="fas fa-exclamation-triangle "
                      size="lg"
                    />
                    <CircleBtn color="danger" icon="fas fa-trash " size="lg" />
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ margin: "20px 0px" }} className="card">
              <div className="card-header ">Brand Buttons</div>
              <div className="card-body">
                <p>
                  Google and Facebook buttons are available featuring each
                  company's respective brand color.
                  <p>
                    They are used on the user login and registration pages. You
                    can create more custom buttons by adding a new color
                    variable in the _variables.scss file and then using the
                    Bootstrap button variant mixin to create a new style, as
                    demonstrated in the <code>_buttons.scss</code> file.
                  </p>
                </p>
                <div className="btn btn-google btn-block">
                  <Button
                    style={{
                      display: "block",
                      width: "100%",
                      margin: "5px 0px",
                    }}
                    variant="danger"
                  >
                    <i class="fab fa-google fa-fw"></i>
                    .btn-google
                  </Button>
                  <Button
                    style={{ display: "block", width: "100%" }}
                    variant="primary"
                  >
                    <i class="fab fa-facebook-f"></i>
                    .btn-facebook
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="card">
              <div className="card-header">Split Buttons</div>
              <div className="card-body">
                Works with any button colors, just use the{" "}
               <p> <code>.btn-icon-split</code> class and the markup in the
                examples below. The examples below also use the{" "}
                <code>.text-white-50</code> helper class on the icons for
                additional styling, but it is not required.</p>
                <SplitButton
                  text="Split button Primary"
                  color="primary"
                  icon="fas fa-flag"
                />
                <SplitButton
                  text="Split button Success"
                  color="success"
                  icon="fas fa-check"
                />
                <SplitButton
                  text="Split button Info"
                  color="info"
                  icon="fas fa-info-circle"
                />
                <SplitButton
                  text="Split button Warning"
                  color="warning"
                  icon="fas fa-exclamation-triangle"
                />
                <SplitButton
                  text="Split button Danger"
                  color="danger"
                  icon="fas fa-trash"
                />
                <SplitButton
                  text="Split button Secondary"
                  color="secondary"
                  icon="fas fa-arrow-right"
                />
                <SplitButton
                  text="Split button Light"
                  color="light"
                  flag="light"
                  icon="fas fa-arrow-right"
                />
                <p>Also works with small and large button classes!</p>
                <Button
                  size="sm"
                  style={{
                    position: "relative",
                    display: "block",
                    width: "150px",
                    margin: "20px",
                  }}
                  variant="primary"
                >
                  <i
                    style={{
                      position: "absolute",
                      background: "rgba(0, 0, 0, 0.15)",

                      top: "0",
                      left: "0px",
                      padding: "8px",
                    }}
                    class="fas fa-flag "
                  ></i>
                  <span>SplitButton</span>
                </Button>
                <SplitButton
                  text="Split button Primary"
                  size="lg"
                  color="primary"
                  icon="fas fa-flag"
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "20px" }} className="row">
          <div className="col-md-6 col-sm-12">
           
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Footer />
      </div>
    </div>
  );
}
// function CircleBtn(){
//     return <
// }
