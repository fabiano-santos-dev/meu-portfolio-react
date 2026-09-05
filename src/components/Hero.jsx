import '../css/hero.css';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Hero() {
  return (
    <>
      <section id='inicio' className='hero'>
        <div className='hero-glow'></div>

        <div className='container hero-container'>
          <div className='hero-content'>
            <p className='hero-subtitle'>Olá, eu sou</p>

            <h1>
              Fabiano <span>Alves</span>
            </h1>

            <h2>Desenvolvedor Web</h2>

            <p className='hero-description'>
              Sou estudante de Analise e Desenvolvimento de Sistemas e estou construindo minha
              experiência através de projetos modernos, funcionais e
              responsivos.
            </p>

            <div className='hero-buttons'>
              <a href='#projetos' className='btn btn-primary'>
                Meus projetos
                <ArrowRight size={20} />
              </a>

              <a href='/curriculo.pdf' className='btn btn-secondary' download>
                Baixar currículo
                <Download size={19} />
              </a>
            </div>

            <div className='social-links'>
              <a
                href='https://github.com/fabiano-santos-dev'
                target='_blank'
                rel='noreferrer'
                aria-label='GitHub'
              >
                <FaGithub size={24} />
              </a>

              <a
                href='https://www.linkedin.com/in/fabiano-fasnaweb-desenvolvedor/'
                target='_blank'
                rel='noreferrer'
                aria-label='LinkedIn'
              >
                <FaLinkedin size={24} />
              </a>

              <a href='#contato' aria-label='E-mail'>
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className='hero-image'>
            <div className='hero-circle'></div>
            <img src='/fs1.png' alt='Fabiano Alves' className='profile-image' />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
