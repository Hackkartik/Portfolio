  import Aboutimage from "../assets/hero-image.png"
 const About=()=>{
  return(
    <div className="about" id="about">
      <div className="about-container">
        <h2 className="about-head">About me</h2>
        <div className="about-content">
          <img src={Aboutimage} alt=""  className="about-img"/>
          <div className="about-text-container">
          <p className="about-para">
            I am a Passionate frontend developer with a focus on building
            modern and responsive web application. with a strong foundation 
            in frontend technologies, I strive to create seamless and efficient
            user experience.
          </p>
          <div className="about-space"> 
            <div className="about-item">
              <label  className="about-label">HTML & CSS</label>
              <div className="about-grow">
                <div className="about-fill">

                </div>
              </div>
            </div>
            <div className="about-item">
              <label  className="about-label">JAVASCRIPT</label>
              <div className="about-grow">
                <div className="about-fill">

                </div>
              </div>
            </div>
            <div className="about-item">
              <label  className="about-label">REACTJS</label>
              <div className="about-grow">
                <div className="about-fill">

                </div>
              </div>
            </div>
          </div>
          <div></div>
          </div>
        </div>
      </div>

      
    </div>
  )
 }
 export default About