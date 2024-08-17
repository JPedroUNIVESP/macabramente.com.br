import React from 'react';
import './styles.css';
import foto1 from './FOTO-1.png';
import foto2 from './FOTO-2.png';
import foto3 from './FOTO-3.png';
import instagramicon from './Instagram-icon.png';
import whatsappicon from './whatsapp-icon.png';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import InstagramEmbed from './InstagramEmbed'; // Certifique-se de que o caminho está correto
import CarouselComponent from './CarouselComponent'; // Certifique-se de que o caminho está correto
import Footer from './Footer';


const App = () => {
  return (
    <div className="background-container">   
      <div className="images-container">
        <p className="centered-text paragrafo-1">MMXXIV</p>
        <div className="image-container">
          <img src={foto1} alt="Foto 1 Centralizada" className="small-image" />
        </div>
        <div className="image-container photo-2-container">
          <img src={foto2} alt="Foto 2 Centralizada" className="photo-2" />
        </div>
        <div className="image-container photo-3-container">
          <img src={foto3} alt="Foto 3 Centralizada" className="photo-3" />
        </div>
        <div className="bottom-row">
          <div className="image-container">
            <a href="https://www.instagram.com/macabra.mente/" >
              <img className="photo-4-container" src={instagramicon} alt="Foto 4" />
            </a>
          </div>
          <div className="image-container">
            <a href="https://api.whatsapp.com/send/?phone=5519991320789&text&type=phone_number&app_absent=0" >
              <img src={whatsappicon} alt="Foto 5" />
            </a>
          </div>
        </div>

        <div className="bottom-row2">
          <a href="https://api.whatsapp.com/send/?phone=5519991320789&text&type=phone_number&app_absent=0">
            <p className="session-text">agende sua sessão</p>
          </a>
        </div>

        <div className="text-links-container">
          <div className="left-text">
            <p>Ignorar aquilo<br />que te<br />incomoda não<br />faz com que a<br />dor vá<br />embora.</p>
            <p className="italic-text">Faça terapia</p>
          </div>
          <div className="right-links">
            <ul>
              <li><a href="#sobre-mim">Sobre mim</a></li>
              <li><a href="#psicoterapia">Psicoterapia</a></li>
              <li><a href="#macabra-mente">Macabra.mente</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div id="sobre-mim" className="sobre-mim-container">
        <h1 className="sobre-mim-title">SOBRE<br />MIM<br /></h1>
        <p>Olá! Me chamo Carol, tenho 27 anos, sou <strong className='strong'>Psicóloga clínica e pós-graduada em Terapia cognitivo-comportamental.</strong></p>
        <p>Desde a adolescência sempre me interessei pela mente e o comportamento humano, logo a área clínica me chamou atenção. Foi no estágio da graduação que me apaixonei pelo processo da psicoterapia e decidi onde atuar.</p>
        <p>Além de ser a responsável criativa pelo Instagram <a href="https://www.instagram.com/macabra.mente/" ><i className='strong'>@macabra.mente</i></a>, trabalho principalmente com psicoterapia na modalidade online ou presencial. Embora minha clínica fique localizada na cidade de Americana SP, é através da terapia online que consigo atender pacientes de qualquer lugar do Brasil ou fora dele.</p>
        <p>Tal qual meu Instagram, meu site também carrega minha identidade visual um pouco peculiar e ousada. Amo arte, livros, games e filmes! Sempre tento correlacionar tudo isso com o universo da Psicologia.</p>
      </div>
      <div>
      <CarouselComponent/>
      </div>
      <div id="psicoterapia" className="sobre-mim-container">
        <h1 className="sobre-mim-title2">PSICO<br />TERAPIA<br /></h1>
        <div className="instargram-title3">online/presencial</div>
        <ul className="ul-psicoterapia">
          <li>Minha abordagem é a <strong className='strong'>Terapia cognitivo-comportamental</strong>, mas também estudo as abordagens da terceira onda da Psicologia;</li>
          <li>Trabalho com <strong>adolescentes e adultos;</strong></li>
          <li>O processo envolve <strong>sessões semanais</strong> de 50 minutos até 1 hora cada, podendo ser na modalidade online ou presencial, não sendo possível o início quinzenal;</li>
          <li>As sessões online possuem uma maior flexibilidade de horário e são realizadas por <strong>vídeo-chamada</strong> pelo app que preferir, como Whatsapp ou o Meet;</li>
          <li>Não trabalho com convênio, porém, é possível conseguir <strong>reembolso</strong> do valor da sessão através do recibo ou nota fiscal.</li>
        </ul>
        <p className='strong italico'>Prezo muito pela autenticidade e acredito que este seja o meu diferencial nos atendimentos. Trabalho para proporcionar um ambiente seguro e acolhedor, livre de julgamentos, para que você possa encontrar seu caminho e aprender com suas próprias experiências.</p>
      </div>

      <div id="macabra-mente" className="sobre-mim-container">
        <h1 className="sobre-mim-title3">MACABRA<br />MENTE<br /></h1>
        <div className="instargram-title3"><a href="https://www.instagram.com/macabra.mente/" >@macabra.mente</a></div>
        <p>O meu Instagram nasceu de duas paixões: a odisseia da complexidade da mente humana e o gênero terror</p>
        <p>Faço desde a parte criativa até a escrita! Meu objetivo por lá é poder me arriscar com a minha estética, proporcionar reflexões e me comunicar da forma mais acessível possível. Afinal, autenticidade gera identificação</p>
        
        <InstagramEmbed />

       

      </div>

      <div className="whats-float">
    <a href="https://api.whatsapp.com/send/?phone=5519991320789&text&type=phone_number&app_absent=0"
       target="_blank">
        <i className="fa fa-whatsapp"></i><span>WhatsApp<br></br><small className="whatsapp-nome">Carol Marangoni</small></span>
    </a>




</div>

{/* <Footer /> */}
    </div>
  );
}

export default App;
