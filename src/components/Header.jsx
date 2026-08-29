import '../css/header.css';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className='header'>
      <div className='container header-container'>
        <a href='#inicio' className='logo' onClick={closeMenu}>
          Meu<span>Portfólio</span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href='#inicio' onClick={closeMenu}>
            Início
          </a>

          <a href='#sobre' onClick={closeMenu}>
            Sobre
          </a>

          <a href='#skills' onClick={closeMenu}>
            Skills
          </a>

          <a href='#projetos' onClick={closeMenu}>
            Projetos
          </a>

          <a href='#contato' onClick={closeMenu}>
            Contato
          </a>
        </nav>

        <button
          className='menu-button'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Abrir menu'
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
