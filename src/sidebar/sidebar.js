import React, { useState } from "react";
import "./sidebar.css";
import { Link, } from "react-router-dom";
import PeopleIcon from '@material-ui/icons/People';

export default function Sidebar() {
  const [flag, setFlag] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
 
  return (
    <aside id="SidebarToggle1" className="sideBar">
      {/* <!-- Sidebar --> */}

      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink smiley fa-2x "></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

       
        <hr class="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link class="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div class="sidebar-heading">Interface</div>

        <li >
           <Components flag1={flag1} setFlag1={setFlag1}/>
        </li>
        <li >
           <Utilities flag2={flag2} setFlag2={setFlag2} />
        </li>
        <hr class="sidebar-divider" />
        <div class="sidebar-heading">Addons</div>
        <li >
          <Pages flag={flag} setFlag={setFlag}/>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li >
          <Link class="nav-link" to='/charts'>
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li >
          <Link class="nav-link" to='/tables'>
            <i class="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </Link>
        </li>
        <li >
          <Link class="nav-link" to='/Users'>
         < PeopleIcon/> 
            <span>Users</span>
          </Link>
        </li>
        <li >
          <Link class="nav-link" to='/tree'>
         < PeopleIcon/> 
            <span>Tree</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div  id='splArrow' >
              <i id="SplIcon"class="fas fa-angle-right"></i>
        </div>

        {/* <!-- Sidebar Message --> */}
        <div class="sidebar-card d-none d-lg-flex">
          <img
            class="sidebar-card-illustration mb-2 sidebar-card-image"
            src="https://img.icons8.com/emoji/452/rocket-emji.png"
            alt="..."
          />
          <p class="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            class="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>

        <hr />
      </ul>
     
    </aside>
  );
}


function DropItems({text}) {
  return (
    <li id="li">
      <Link
        style={{
          color: "black",
          textDecoration: "none",
        }}
        to={`/${text}`}
      >
        {text}
      </Link>
    </li>
   
  );
}

function Pages({ flag, setFlag}) {
  return (
    <div className="pages">
      <i class='fas fa-fw fa-folder'></i>
      <span
        onClick={() => {
          setFlag(!flag);
        }}
      >
        Pages
      </span>
      <span>
        <i class="fas fa-angle-right right-arrow"></i>
      </span>
      <div style={{ display: flag ? "block" : "none" }} >
        <ul className="dropList">
            <li className="sub-heading">Login Screens:</li>
          <DropItems flag={flag}text="Login"/>
          <DropItems flag={flag} text="Register"/>
          <DropItems flag={flag}text="Forgot Password"/>
          <li className="sub-heading">other pages:</li>
          <DropItems flag={flag} text="404 Page"/>
          <DropItems flag={flag} text="Blank Page"/>
        </ul>
      </div>
    </div>
  );
}
function Components({ flag1, setFlag1}) {
    return (
      <div className="pages">
        <i class='fas fa-fw fa-cog'></i>
        <span
          onClick={() => {
            setFlag1(!flag1);
          }}
        >
          Components
        </span>
        <span>
          <i class="fas fa-angle-right right-arrow"></i>
        </span>
        <div style={{ display: flag1 ? "block" : "none" }} >
          <ul className="dropList">
              <li className="sub-heading">Custom Components:</li>
            <DropItems flag={flag1}text="Buttons"/>
            <DropItems flag={flag1} text="Cards"/>
          </ul>
        </div>
      </div>
    );
  }
  function Utilities({ flag2, setFlag2}) {
    return (
      <div className="pages">
        <i class='fas fa-fw fa-cog'></i>
        <span
          onClick={() => {
            setFlag2(!flag2);
          }}
        >
          Utilities
        </span>
        <span>
          <i class="fas fa-angle-right right-arrow"></i>
        </span>
        <div style={{ display: flag2 ? "block" : "none" }} >
          <ul className="dropList">
              <li className="sub-heading">Custom Utilities:</li>
              <DropItems flag={flag2} text="Color"/>
            <DropItems flag={flag2}text="Border"/>
            <DropItems flag={flag2} text="Animation"/>
            <DropItems flag={flag2} text="other"/>
          </ul>
        </div>
      </div>
    );
  }
