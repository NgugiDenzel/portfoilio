import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <nav className='bg-black text-white px-4 py-3 '>
          <a className='mr-6'><Link to="/">Home</Link></a>
          <a className='mr-6'><Link to="/about">About</Link></a>
          <a className='mr-6'><Link to="/projects">Projects</Link></a>
          <a className='mr-6'><Link to="/skills">Skills</Link></a>
          <a className='mr-6'><Link to="/contact">Contact</Link></a>
          
            <a className='float-right mx-5' href="https://github.com/"> github</a>
            <a className='float-right mx-5'href="">linkedin</a>
            <a className='float-right mx-5' href="https://www.instagram.com/denz_elngugi/">instagram</a>
        
      </nav>
    </header>
  );
};

export default Header;
