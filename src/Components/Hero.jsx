import React from "react"
import Heroimage from "../assets/hero-image.png"
const Hero=()=>{
  return(
    <div className="hero-container" id="home"> 
      <img src={Heroimage} alt="" className="hero-img"/>
      <h1 className="hero-head">
        I am {" "}
        <span className="hero-text"> Kartik Jha </span>
                Full Stack Developer
      </h1>
      <p className="hero-style">
        I specialize in building modern and responsive web application.
      </p>
      <div className="hero-btn">
        <button className="contact-btn">Contact with me </button>
      
      <button className="resume-btn"> Resume</button>
      </div>
      
    </div>
  )
}
export default Hero
