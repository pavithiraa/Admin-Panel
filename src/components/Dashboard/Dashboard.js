import React from "react";
import "./Dashboard.css";
// import Footer from "../Footer/Footer";
// import Charts from "../Chart/AreaChart";
import { ProgressBar } from "react-bootstrap";
// import BarChart from "../Chart/BarCharts"
import DoughnutChart from "../Chart/Doughnut";
import AreaCharts from "../Chart/AreaChart";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="row">
        <div className="col-md-2 col-sm-2">
          <h3>Dashboard</h3>
        </div>
        <div className="col-md-3 col-sm-3"></div>
        <div className="col-md-5 col-sm-5 heading-row"></div>
        <div className="col-md-2 col-sm-2">
          <button type="button" className="btn btn-primary">
            <span>
              <i class="fas fa-download"></i>
            </span>
            Generate Report
          </button>
        </div>
      </div>
      <div className="row cardRow">
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
        {/* <Cards/>
          <Cards/>
          <Cards/>
          <Cards/> */}
      </div>
      <div className="row">
        <div className="col-md-8 col-sm-12 ">
          <div className="card">
            <div
              style={{ display: "flex", background: "#f8f9fc" }}
              className="card-header"
            >
              <div
                // style={{fontWeight:'700',color:'#4e73df'}}
                className="col-md-11 chart-heading "
              >
                Earnings Overview
              </div>
              <div className="col-md-1">
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </div>
            </div>
            <div className="card-body">
              <AreaCharts />
            </div>
          </div>
        </div>
        {/* <div className="col-md-1"></div> */}
        <div className="col-md-4 col-sm-12">
          <div id="donut" className="card">
            <div
              style={{ display: "flex", background: "#f8f9fc" }}
              className="card-header"
            >
              <div className="col-md-11 chart-heading">Revenue sources</div>
              <div className="col-md-1">
                <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
              </div>
            </div>
            <div className="card-body">
              <DoughnutChart />
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "20px" }} className="row">
        <div className="col-md-6">
          <div className="card">
            <div  style={{ background: "rgb(248, 249, 252)" }}className="card-header chart-heading">Projects</div>
            <div className="card-body">
              <div className="col-md-12 col-sm-12">
                <Progress
                  text1="Server Migration"
                  text2="20%"
                  color="danger"
                  width="20"
                />
                <Progress
                  text1="Sales Tracking"
                  text2="40%"
                  color="warning"
                  width="40"
                />
                <Progress
                  text1="Customer database"
                  text2="60%"
                  color="primary"
                  width="60"
                />
                <Progress
                  text1="Payout Details"
                  text2="80%"
                  color="info"
                  width="80"
                />
                <Progress
                  text1="Account Setup"
                  text2="100%"
                  color="success"
                  width="100"
                  comp="Completed!"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="card">
            <div  style={{ background: "rgb(248, 249, 252)" }}className="card-header chart-heading">Illustration</div>
            <div style={{ padding: "50px" }} className="card-body">
              <img
                style={{ width: "200px", textAlign: "center" }}
                src="http://127.0.0.1:5500/img/undraw_posting_photo.svg"
                alt=""
              />
              <p style={{ paddingTop: "30px" }}>
                Add some quality, svg illustrations to your project courtesy of
                <span style={{ color: "#4e73df" }}>unDraw</span>, a constantly
                updated collection of beautiful svg images that you can use
                completely free and without attribution!
              </p>
              <a href="#123" style={{ color: "#4e73df" }}>
                Browse Illustrations on unDraw...
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }} className="row">
        <div
          style={{ display: "flex", flexWrap: "wrap" }}
          className="col-md-6 col-sm-12"
        >
          <Button text="Primary" color="#4e73df" />
          <Button text="Success" color="#1cc88a" />

          <Button text="Info" color="#36b9cc" />
          <Button text="Warning" color="#f6c23e" />
          <Button text="Danger" color="#e74a3b" />
          <Button text="Secondary" color="#858796" />
          <Button text="Light" light="yes" color="#faf8fc" />
          <Button text="Dark" color="#5a5c69" />
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="card">
            <div
              style={{ background: "rgb(248, 249, 252)" }}
              className="card-header chart-heading"
            >
              Development Approach
            </div>
            <div className="card-body">
              <p>
                SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
                order to reduce CSS bloat and poor page performance. Custom CSS
                classes are used to create custom components and custom utility
                classes.
              </p>
              <p>
                {" "}
                Before working with this theme, you should become familiar with
                the Bootstrap framework, especially the utility classes.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export function Cards({ text, amount, icon, color, flag }) {
  return (
    <div
      style={{ borderLeft: `.25rem solid ${color}` }}
      className="cardContainer"
    >
      <div className="cardContent">
        <h3 style={{ color: color }} className="card-heading">
          {text}
        </h3>

        <div className="amount">
          <h5 style={{ fontWeight: "700" }}>
            {amount}
            <div style={{ display: flag ? "block" : "none" }}>
              <ProgressBar className="Progress" now={50} variant="info" />
            </div>
          </h5>
        </div>
      </div>
      <div>
        <i className={`${icon} cardIcon`}></i>
      </div>
    </div>
  );
}
function Progress({ text1, text2, color, width, comp }) {
  return (
    <div>
      <h4 class="small font-weight-bold text-secondary">
        {text1}
        {/* //  */}
        <b style={{ float: "right", color: "#858796" }}>
          {comp ? `${comp}` : `${text2}`}
        </b>
      </h4>
      <div class="progress mb-4">
        <div
          class={`progress-bar bg-${color}`}
          role="progressbar"
          style={{ width: text2 }}
          aria-valuenow={width}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}
function Button({ text, color, light }) {
  return (
    <div
      className="Buttoncard"
      style={{ background: color, color: light ? "grey" : "white" }}
    >
      {text}
      <p style={{ color: light ? "lightgray" : "rgba(255,255,255,.4)" }}>
        {color}
      </p>
    </div>
  );
}
