import Hero from "../../Component/Hero/Hero.jsx"
import Capability from "../../Component/Capability/Capability.jsx";
import Experience from "../../Component/Experience/Experience.jsx";
import Contact from "../../Component/Contact/Contact.jsx";
import Project from "../../Component/Project/Project.jsx";
import dessert from "../../assets/svg/dessert.jpeg"
import Furniro from "../../assets/svg/Furniro.jpeg"
import Worldflag from "../../assets/svg/worldflag.jpeg"
import Lookgood from "../../assets/svg/lookgood.jpeg"
import Kuda from "../../assets/svg/Kudaclone.jpeg"
import Nike from "../../assets/svg/nike.jpeg"
import "../../Component/Project/Project.css"
import About from "../../Component/About/About.jsx"
import "./Home.css"
// import Footer from "../../Static/Footer/Footer.jsx";
function Home() {
    return(
     <>
       <Hero/>
       <About/>
       <Capability/>
       <Experience/>
       <div className="Card">
       <h1>SOME OF MY HANDS-ON PROJECT</h1>

       <div className="pro">
       <Project className= "card1" img={Furniro} alt = "" Text= "This was my first milestone project, created using HTML and CSS based on a Figma design. It’s a webpage displaying a variety of furniture products for sale. "
       btn = {"Source Code"} btn2={"Demo"} link1={"https://github.com/Becca-Hamzy/Furniture.git"}  link2={"https://becca-hamzy.github.io/Furniture/"}/>

      <Project className= "card1" img={Nike} alt = "" Text= "Built a Nike webpage using HTML and CSS as part of an early-stage hands-on project to test and strengthen my knowledge of HTML and CSS."
       btn = {"Source Code"} btn2={"Demo"} link1={"https://github.com/Becca-Hamzy/Nike.git"}  link2={"https://becca-hamzy.github.io/Nike/"}/>

       <Project className= "card1" img={Lookgood} alt = "" Text= "Designed an application for ordering cosmetics using HTML, CSS, and JavaScript for functionality. The app is designed to simplify the process of purchasing cosmetics for women and perfumes for men."
       btn = {"Source Code"} btn2={"Demo"} link1={"https://github.com/Becca-Hamzy/Look-Good-Cosmetics.git"}  link2={"https://becca-hamzy.github.io/Look-Good-Cosmetics/"}/>

       <Project className= "card1" img={dessert} alt = "" Text= "Cloned a fully mobile-responsive application from Frontend-mentor that enables users to order a variety of foods, using HTML, CSS, and JavaScript for functionality."
       btn = {"Source Code"} btn2={"Demo"} link1={"https://github.com/Becca-Hamzy/Dessert.git"}  link2={"https://becca-hamzy.github.io/Dessert/"}/>

      <Project className= "card1" img={Worldflag} alt = "" Text= "Retrieved data from an API to display detailed information about countries and regions around the world. The site dynamically presents key details for each country, including population, currency, and capital, offering users an interactive and informative experience of global data."
       btn = {"Source Code"} btn2={"Demo"} link1={"https://github.com/Becca-Hamzy/Country-Flags.git"}  link2={"https://becca-hamzy.github.io/Country-Flags/"}/>

       <Project className= "card1" img={Kuda} alt = "" Text= "Built a replica of the Kuda website, concentrating on routing and styling using styled-components. This project allowed me to gain practical experience in creating seamless navigation flows and ensuring a consistent, responsive design through the integration of styled-components."
       btn =  {"Source Code"} btn2={ "Demo"} link1={"https://github.com/Becca-Hamzy/Kuda-clone.git"} link2={"https://kuda-clone-six.vercel.app/"}/>
       </div>

       </div>

       <Contact/>
       {/* <Footer/> */}


     
     </>


    )
}

export default Home