import '../css/footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-bottom'>
          <p>© 2026 Meu Portfólio. Todos os direitos reservados.</p>
        </div>
        <div className='footer-brand'>
          <h3>
            Meu<span>Portfólio</span>
          </h3>

          <p>
            Desenvolvedor apaixonado por tecnologia e criação de soluções web.
          </p>
        </div>

        <div className='footer-links'>
          <h4>Links rápidos</h4>

          <a href='#inicio'>Início</a>
          <a href='#sobre'>Sobre</a>
          <a href='#skills'>Skills</a>
          <a href='#projetos'>Projetos</a>
          <a href='#contato'>Contato</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
