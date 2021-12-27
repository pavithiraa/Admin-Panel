import React, { useState } from "react";
import "./cardsPage.css";
import { Cards } from "../components/Dashboard/Dashboard";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
// import AccordionComp from "./Accordion";
export default function CardsPage() {
  const [display, setDisplay] = useState(false);
  return (
      <>
    <div className=" container-fluid cardsPage">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h3>Cards</h3>
        </div>
      </div>
      <div className="row">
        <Cards
          text="Earnings (Monthly)"
          amount="$40,000"
          icon="fas fa-calendar fa-2x"
          color="#4e73df"
        />
        <Cards
          text="Earnings (Annual)"
          amount="$215,000"
          icon="fas fa-dollar-sign fa-2x"
          color="#1cc88a"
        />
        <Cards
          text="Tasks"
          amount="50%"
          icon="fas fa-clipboard-list fa-2x"
          color="#36b9cc"
          flag="yes"
        />
        <Cards
          text="Pending Requests"
          amount="18"
          icon="fas fa-comments fa-2x"
          color="#f6c23e"
        />
      </div>

      <div  className="row">
        <div className="col-md-6 col-sm-12">
          <div className="card">
            <div id="default"
              className="card-header"
            >
              Default Card Example
            </div>
            <div className="card-body">
              <p>
                This card uses Bootstrap's default styling with no utility
                classes added. Global styles are the only things modifying the
                look and feel of this default card example.
              </p>
            </div>
          </div>
          <div className="card">
            <div
              //   style={{ color: "#333", fontWeight: "400" }}
              className="card-header"
            >
              Basic Card Example
            </div>
            <div className="card-body">
              <p>
                This card uses Bootstrap's default styling with no utility
                classes added. Global styles are the only things modifying the
                look and feel of this default card example.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="card">
            <div style={{ display: "flex" }} className="card-header">
              DropDown card Example
              <DropdownButton
                style={{ marginLeft: "320px" }}
                variant="light"
                align="end"
                //   title="Dropdown right"
                id="dropdown-menu-align-right"
              >
                <Dropdown.Item eventKey="1"><p id="dropHead">Dropdown Header:</p></Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>
              {/* <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400 dropIcon"></i> */}
            </div>
            <div className="card-body">
              <p>
                Dropdown menus can be placed in the card header in order to
                extend the functionality of a basic card. In this dropdown card
                example, the Font Awesome vertical ellipsis icon in the card
                header can be clicked on in order to toggle a dropdown menu.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-header" onClick={() => setDisplay(!display)}>
              Collapse Card
              <i
                style={{ marginLeft: "420px" }}
                className="fas fa-angle-down"
              ></i>
            </div>
            <div
              //  style={{marginTop: display ? '-30px' : '0px'}}
              style={{ display: display ? "none" : "block" }}
              className="card-body"
            >
              <p>
                This is a collapsable card example using Bootstrap's built in
                collapse functionality. Click on the <b>card header</b> to see
                the card body collapse and expand!
              </p>
            </div>
          </div>
          {/* <AccordionComp /> */}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
