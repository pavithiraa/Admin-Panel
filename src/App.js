
import React from "react";

import Header from "./Header/Header";
import Sidebar from "./sidebar/sidebar";

function App() {
  return (
    <>
    <div style={{display:'flex',background:'#f8f9fc'}}>
        <Sidebar />
        <Header/>      
    </div>
  
    </>
  );
}

export default App;
