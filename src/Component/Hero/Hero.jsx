  import "./Hero.css"
  import pic from "../../assets/pic.jpeg"


  const Hero = () => {
     return (
        <div className="me">
        <div  className="text">
         <h3>Welcome to my world!</h3>
         <p>Hi, I'm Oyewole Olufunmi</p> 
         <p>A versatile, hardworking individual; driven to meet or exceed a company’s expectations to deliver high-quality software products. Experienced in Java, JavaScript, Swift, SQL, Go, and Python. An effective listener that can communicate technical information in an easily understandable way. Offers a strong background in creative problem-solving and a proven ability to multi-task and prioritize in fast-paced, stressful environments.</p>
         <button className="resume">Download my resume</button>
        </div>
        <div className="img">
         <img src= {pic} alt="" />
        </div>
        </div>


     )

  }

  export default Hero