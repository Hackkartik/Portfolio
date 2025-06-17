import React from "react";


const NavBar=()=>{
  return(
    <div className="navbar">   

      <dev className="navbar-container">

        <div className="logo">Kartik Jha</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">Aboutme</a>
          <a href="#service">Service</a>
        {/*}  <a href="#project">Projects</a>{*/} 
          <a href="#contact">Contacts</a>
        </div>
        <button className="connect-btn">Connect me</button>
      </dev>
    </div>
  )
}
 export default NavBar
