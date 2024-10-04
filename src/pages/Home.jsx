// src/pages/Home.jsx
import image_denzel from 'C:/Users/Admin/portfolio/src/assets/images/denzel.jpg'

import Contact from './Contact';

const Home = () => {
  return (
    <div className="mb-10 container">
       <figure className='flex justify-center'> <img src={image_denzel} className=' rounded-full' alt="" /></figure>
      <p className="text-3xl text-orange-700 flex justify-center px-16">
      Hi i am Denzel, a frontend developer
      Bringing ideas to life using code 

      </p><br />
      <p className='text-2xl text-blue-400'>I specialize in creating responsive, user-friendly web applications using modern technologies like React and Tailwind CSS. With a passion
         for clean, efficient code,
          I love solving problems and delivering exceptional digital experiences.</p>

   
    <br /><br /><br />
    <Contact />
    </div>
  );
};

export default Home;
