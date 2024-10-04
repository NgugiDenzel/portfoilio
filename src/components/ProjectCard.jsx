import PropTypes from 'prop-types';



const ProjectCard = ({ title, description,  codeLink, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="project-info">
        <h3 className="text-2xl">{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={codeLink} target="_blank" rel="noreferrer" className='text-3xl'>Source Code</a>
        </div>
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,      
    description: PropTypes.string.isRequired, 
    codeLink: PropTypes.string,               
    image: PropTypes.string.isRequired,       
  };
  
  ProjectCard.defaultProps = {
    codeLink: '#',  
  };
export default ProjectCard;
