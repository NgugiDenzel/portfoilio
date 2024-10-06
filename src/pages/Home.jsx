// src/pages/Home.jsx
import image_denzel from '../assets/images/denzel.jpg'


const Home = () => {
  return (
    <div className="projectcontainer">
       <figure className='flex justify-center'> <img src={image_denzel} className=' rounded-full' alt="" /></figure>
      <p className="text-3xl text-white  px-16 flex justify-center">
      
      DENZEL <br />
      WEB DEVELOPER <br />
      Bringing ideas to life using code 
      </p><br />
      <br /><br />


      <div className='flex justify-center'><a href="/projects" className="bg-black outline-white text-white rounded-full px-4 py-3">View My Work</a></div>
      
   
    <br /><br /><br />
    </div>
  );
};

export default Home;
