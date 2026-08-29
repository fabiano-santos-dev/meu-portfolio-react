import { Target, Rocket, Lightbulb } from 'lucide-react';
import '../css/sobre.css';
function About() {
  return (
    <section id='sobre' className='about'>
      <div className='container about-container'>
        <div className='about-image'>
          <img src='/fas2.png' alt='Fabiano Alves' />
        </div>

        <div className='about-content'>
          <p className='section-subtitle'>SOBRE MIM</p>

          <h2>Um pouco sobre mim</h2>

          <p>
            Sou estudante de desenvolvimento web e estou sempre em busca de
            novos conhecimentos. Gosto de transformar ideias em projetos reais e
            funcionais.
          </p>

          <p>
            Atualmente estou focado em aprender cada vez mais sobre React,
            JavaScript, Git e Git-Hub e boas práticas de desenvolvimento.
          </p>

          <div className='about-cards'>
            <div className='about-card'>
              <Target size={32} />
              <span>Focado</span>
            </div>

            <div className='about-card'>
              <Rocket size={32} />
              <span>Dedicado</span>
            </div>

            <div className='about-card'>
              <Lightbulb size={32} />
              <span>Criativo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
