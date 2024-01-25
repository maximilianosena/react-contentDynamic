//Guardo la funcion Header, mas la función que utiliza genRandomInt, el array y la imagen
//El enlace de la imagen lleva dos puntos, ya que cambió de carpeta
import reactImg from '../../assets/react-core-concepts.png'

//Importo el estilo utilizado en este jsx
import "./Header.css";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];


function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

//La exporto para utilizarlo en otros documentos
export default function Header () {

    const description = reactDescriptions[genRandomInt(2)]
  
    return ( <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  
    )
  }