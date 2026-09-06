import { Mail, MapPin, Briefcase } from 'lucide-react';

import '../css/contato.css';

function Contato() {
  return (
    <>
      <section id='contato' className='contato'>
        <p className='section-subtitle'>ENTRE EM CONTATO</p>

        <h2>Vamos conversar?</h2>

        <p className='contato-description'>
          Tem um projeto em mente ou quer trocar uma ideia? Entre em contato
          comigo.
        </p>
        <div className='contato-info'>
          <div className='contato-layout'>
            <div className='contato-info'>
              <div className='contato-item'>
                <div className='contato-icon'>
                  <Mail size={28} />
                </div>
                <h3>Email</h3>

                <p>fasnaweb2020@gmail.com</p>
              </div>

              <div className='contato-item'>
                <div className='contato-icon'>
                  <MapPin size={28} />
                </div>

                <h3>Localização</h3>
                <p>Brasil, Itajubá - Minas Gerais</p>
              </div>

              <div className='contato-item'>
                <div className='contato-icon'>
                  <Briefcase size={28} />
                </div>

                <h3>Disponibilidade</h3>
                <p>Aberto a novos projetos</p>
              </div>
            </div>

            <form className='contato-form'>
              <input type='text' placeholder='Seu nome' />

              <input type='email' placeholder='Seu email' />

              <textarea placeholder='Sua mensagem' rows='13'></textarea>

              <button type='submit'>Enviar mensagem</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contato;
