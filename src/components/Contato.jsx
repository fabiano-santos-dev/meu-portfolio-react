import { Mail, MapPin, Briefcase } from 'lucide-react';
import { useState } from 'react';

import '../css/contato.css';

function Contato() {
  const [enviando, setEnviando] = useState(false);
  const [mensagemEnviada, setMensagemEnviada] = useState(false);
  const [erro, setErro] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEnviando(true);
    setMensagemEnviada(false);
    setErro(false);

    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://formspree.io/f/xyeydenr', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setMensagemEnviada(true);
        event.target.reset();
      } else {
        setErro(true);
      }
    } catch {
      setErro(true);
    } finally {
      setEnviando(false);
    }
  };

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

            <form className='contato-form' onSubmit={handleSubmit}>
              <input type='text' placeholder='Seu nome' name='name' />

              <input type='email' placeholder='Seu email' name='email' />

              <textarea
                placeholder='Sua mensagem'
                rows='13'
                name='message'
              ></textarea>
              <button type='submit' disabled={enviando}>
                {enviando ? 'Enviando...' : 'Enviar mensagem'}
              </button>
              {mensagemEnviada && (
                <p className='mensagem-sucesso'>
                  ✅ Mensagem enviada com sucesso!
                </p>
              )}

              {erro && (
                <p className='mensagem-erro'>
                  ❌ Não foi possível enviar a mensagem. Tente novamente.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contato;
