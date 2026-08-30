import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import '../css/skills.css';

function Skills() {
  return (
    <section id='skills' className='skills'>
      <p className='section-subtitle'>MINHAS HABILIDADES</p>

      <h2>Tecnologias que utilizo</h2>
      <div className='skills-grid'>
        <div className='skill-card'>
          <FaHtml5 />
          <h3>HTML5</h3>
        </div>

        <div className='skill-card'>
          <FaCss3Alt />
          <h3>CSS3</h3>
        </div>

        <div className='skill-card'>
          <FaJs />
          <h3>JavaScript</h3>
        </div>

        <div className='skill-card'>
          <FaReact />
          <h3>React</h3>
        </div>

        <div className='skill-card'>
          <FaGitAlt />
          <h3>Git</h3>
        </div>

        <div className='skill-card'>
          <FaGithub />
          <h3>GitHub</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;
