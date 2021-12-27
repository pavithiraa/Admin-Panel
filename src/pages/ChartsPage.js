import React from "react";
import './ChartsPage.css'
import Footer from "../components/Footer/Footer"
import AreaCharts from "../components/Chart/AreaChart"
import Doughnut from '../components/Chart/Doughnut'
import BarCharts from "../components/Chart/BarCharts"
export default function ChartsPage() {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-md-12">
          <h3 >Charts</h3>
          <p className="chartPara">
            Chart.js is a third party plugin that is used to generate the charts
            in this theme. The charts below have been customized - for further
            customization options, please visit the <a href="#Doc">official Chart.js
            documentation.</a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div className="card">
            <div className="card-header">
              Area Chart
            </div>
            <div className="card-body">
            <AreaCharts/>
            </div>
            <div className="card-footer">
          <p className="chartPara">  Styling for the area chart can be found in the <code> /js/demo/chart-area-demo.js</code> file.</p>
            </div>
          </div>
         
        </div>
        <div className="col-md-4 col-sm-12">
        <div className="card">
            <div className="card-header">
              Donut Chart
            </div>
            <div className="card-body">
            <Doughnut/>
            </div>
            <div className="card-footer">
          <p className="chartPara">  Styling for the Donut chart can be found in the <code> /js/demo/chart-pie-demo.js</code> file.</p>
            </div>
          </div>
          
        </div>
      </div>
      <div className="row">
        <div className="col-md-7 col-sm-12">
        <div className="card">
            <div className="card-header">
              Bar Chart
            </div>
            <div className="card-body">
            <BarCharts/>
            </div>
            <div className="card-footer">
          <p className="chartPara">  Styling for the bar chart can be found in the <code> /js/demo/chart-bar-demo.js</code> file.</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
