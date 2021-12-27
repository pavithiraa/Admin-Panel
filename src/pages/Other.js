import React from "react";
import { ProgressBar, Button, Dropdown, DropdownButton } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
export default function Other() {
  return (
      <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <h3>Others</h3>
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
          <div className="card">
            <div className="card-header">Overflow Hidden Utiltity</div>
            <div className="card-body">
              <p>
                Use <code>.o-hidden</code> to set the overflow property of any
                element to hidden.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Progress small Utiltity</div>
            <div className="card-body">
              <small
                style={{
                  color: "#858796",
                  display: "block",
                  margin: "20px",
                }}
              >
                Normal Progress bar
              </small>
              <ProgressBar style={{ margin: "20px" }} now={75} />
              <small
                style={{
                  color: "#858796",
                  display: "block",
                  margin: "20px",
                }}
              >
                Small Progress bar
              </small>
              <ProgressBar style={{ margin: "20px", height: "8px" }} now={75} />
              <p>
                Use <code>.o-hidden</code> to set the overflow property of any
                element to hidden.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Dropdown (no Arrow)</div>
            <div className="card-body">
              <DropdownButton
                variant="secondary"
                style={{ margin: "20px" }}
                id="dropdown-basic-button"
                title="Dropdown"
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
              <p>
                Use <code>.no-arrow</code> alongside the <code>.dropdown</code>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="card">
            <div className="card-header">Rotation Utiltity</div>
            <div className="card-body">
              <p
                style={{ margin: "20px", padding: "20px", textAlign: "center" }}
              >
                <Button
                  style={{ transform: "rotate(15deg)", margin: "auto" }}
                  variant="primary"
                >
                  .rotate-15
                </Button>
              </p>
              <hr style={{ margin: "1rem 2rem" }} />
              <p
                style={{ margin: "20px", padding: "20px", textAlign: "center" }}
              >
                <Button
                  style={{ transform: "rotate(-15deg)", margin: "auto" }}
                  variant="primary"
                >
                  .rotate-15
                </Button>
              </p>

              {/* <p>
                Use <code>.o-hidden</code> to set the overflow property of any
                element to hidden.
              </p> */}
            </div>
          </div>
        </div>
      </div>
     
    </div>
    <Footer/>
    </>
  );
}
