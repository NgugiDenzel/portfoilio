// import ProjectCard from '../components/ProjectCard';
import advice from "../assets/images/advice.jpg"
import commerce from "../assets/images/NewProject.jpg"
import easyBank from '../assets/images/active-states.jpg'
import news from '../assets/images/desktop-design.jpg'

const Projects = () => {
//   const projects = [
//     {
//       title: "E-commerce Platform",
//       description: "A modern e-commerce platform built with React and Stripe integration.",
//       codeLink: "https://github.com/NgugiDenzel/commerce",
//       image: "./assets/NewProject.jpg"
//     },
//     {
//       title: "Advice Generatpr app",
//       description: "An app that gives random advice when you need it.",
//       codeLink: "https://github.com/NgugiDenzel/git",
//       image: "./assets/advice.jpg"
//     }
 // ];

  return (
      
      <div className="projectcontainer px-12 py-2">
      {/* <h2 className='text-5xl flex justify-center text-red-400 '>My Projects</h2><br /> */}
      <div className="grid grid-cols-2">
      <div className="p-6 ">
      <img src={advice} alt='image advice' className='h-48 w-80'/>
      <div className="project-info">
        <h3 className="text-2xl"></h3>
        <p className="text-white">description: this app takes advices from an api and displays them onto a screen</p>
        <div className="project-links">
          <a className="text-white hover:text-red-600" href='https://github.com/NgugiDenzel/git' target="_blank" rel="noreferrer" >Source Code</a>
        </div>
      </div>
    </div>
    <div className="p-6 ">
      <img src={commerce} alt='image advice' className='h-48 w-80'/>
      <div className="project-info">
        <h3 className="text-2xl"></h3>
        <p className="text-white">description: this is an online shopping app</p>
        <div className="project-links">
          <a className="text-white hover:text-red-600" href='https://github.com/NgugiDenzel/commerce' target="_blank" rel="noreferrer" >Source Code</a>
        </div>
      </div>
    </div>
    <div className="p-6 ">
      <img src={news} alt='image advice' className='h-48 w-80'/>
      <div className="project-info">
        <h3 className="text-2xl"></h3>
        <p className="text-white">description: this is a news website </p>
        <div className="project-links">
          <a className="text-white hover:text-red-600" href='https://github.com/NgugiDenzel/news' target="_blank" rel="noreferrer" >Source Code</a>
        </div>
      </div>
    </div>
    <div className="p-6 ">
      <img src={easyBank} alt='image advice' className='h-48 w-80'/>
      <div className="project-info">
        <h3 className="text-2xl"></h3>
        <p className="text-white">description: this web app is a landing page for an online bank</p>
        <div className="project-links">
          <a className="text-white hover:text-red-600" href='https://github.com/NgugiDenzel/easyBank' target="_blank" rel="noreferrer" >Source Code</a>
        </div>
      </div>
    </div>
        
      </div>
    </div>
  );
};

export default Projects;
