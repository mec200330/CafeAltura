
import Card from "../Components/cards/Card"
import Cards from "../Components/cards1/Cards"
import Hero from "../Components/Hero/Hero"
import 'bootstrap/dist/css/bootstrap.css';
import Contact from "../Components/contact/Contact";
import Accordion from '../Components/Accordion/Accordion'


const Home = () =>{


    return(

    <body>
        
        <Hero titleOne='De la planta a tu taza' titleTwo='El mejor café del mundo, ahora en tu casa.' parrOne='Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.'/>
        <Cards cardsh2='Café con las mejores condiciones'/>
        <Card/>
        <Accordion  />
      <Contact/>
    
    </body>
)

}
export default Home