import '../css/projetos.css';

function Projetos() {
  return (
    <section id='projetos' className='projetos'>
      <p className='section-subtitle'>MEUS PROJETOS</p>

      <h2>Projetos em destaque</h2>
      <div className='projetos-grid'>
        {/* PROJETO 1 */}
        <article className='projeto-card'>
          <div className='projeto-image'>
            <img src='/01_home.png' alt='Construlink' />
          </div>

          <div className='projeto-content'>
            <h3>
              CONSTRULINK - Conectando clientes aos profissionais certos para
              cada serviço.
            </h3>

            <p>
              O Construlink é uma plataforma desenvolvida para conectar clientes
              a profissionais das áreas de construção, manutenção e reformas. A
              aplicação permite que clientes encontrem profissionais por
              especialidade ou região, visualizem seus perfis, acompanhem
              avaliações e solicitem contato para serviços.
            </p>

            <div className='projeto-techs'>
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
              <span>REACT</span>
            </div>

            <a href='#' className='projeto-link'>
              Ver projeto
            </a>
          </div>
        </article>

        {/* PROJETO 2 */}
        <article className='projeto-card'>
          <div className='projeto-image'>
            <img src='/portifolio.png' alt='Meu Portfólio' />
          </div>

          <div className='projeto-content'>
            <h3>Meu Portfólio</h3>

            <p>
              Portfólio pessoal desenvolvido com React, JavaScript, HTML e CSS.
            </p>

            <div className='projeto-techs'>
              <span>REAACT</span>
              <span>JAVASCRIPT</span>
              <span>CSS</span>
            </div>

            <a href='#' className='projeto-link'>
              Ver projeto
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projetos;
