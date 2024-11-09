import "./About.css"
import CV from "../../assets/svg/myCV.pdf"

const About = () => {
   const handleDownload = () => {
      const link = document.createElement('a');
      link.href = CV
      link.download = 'Oyewole R. Olufunmi CV.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   }

   return(
     <div className="about" id="about">
        <div className="left">
         <h1>About Me</h1>
         <button className="res" onClick={handleDownload}>Downoad My Resume</button>
        </div>
        <div className="right">
        <h4>My name is Oyewole R. Olufunmi</h4>
        <p>A versatile, hardworking individual; driven to meet or exceed a company’s expectations to deliver high-quality software products. Experienced in Java, JavaScript, Swift, SQL, Go, and Python. An effective listener that can communicate technical information in an easily understandable way. Offers a strong background in creative problem-solving and a proven ability to multi-task and prioritize in fast-paced, stressful environments.</p>        

        </div>
        
     </div>

   )

}
export default About