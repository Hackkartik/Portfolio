 import "./App.css"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Hero from "./Components/Hero"
import NavBar from "./Components/Navbar"
import Service from "./Components/Service"

 
 function App(){
  return(
    <div>
      <h1>  <NavBar />  </h1>
      <h1>   <Hero /> </h1>
      <h1> <About /> </h1>
      <h1> <Service />    </h1>
      <h1>   <Contact /> </h1>
      
    </div>
  )
 }

 export default App