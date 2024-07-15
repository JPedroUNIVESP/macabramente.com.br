import church from './church.png';
import './App.css';
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";






function App() {

  const instagramUrl = 'https://www.instagram.com/macabra.mente/';
  const whatsappUrl = 'https://api.whatsapp.com/send/?phone=5519991320789&text&type=phone_number&app_absent=0';


  return (
    <div className="App">
      
      <header className="App-header">
      <title>Macabra Mente</title>
        <img src={church} className="App-logo" alt="logo" />
        <p className='smythe-regular-new'>
          Em breve
        </p>
        <a
          className="smythe-regular"
        >
          Macabra Mente
        </a>

        <div style={styles.iconContainer}>

        <a href={whatsappUrl} >
        <FaWhatsapp />
        </a>
        
        <a href={instagramUrl} >
        <FaInstagram />
        </a>

        </div>


      </header>
    </div>
  );
}


const styles = {
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
    margin: '20px',
    fontSize: '50px', // Tamanho dos ícones
  }
};


export default App;
