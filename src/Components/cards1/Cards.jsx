import Cards1a from '../cards1a/Cards1a'
import './cards1.css'
import ilustrationcheck from '../../Assets/image/Illustrationcheck.png'
import ilustrationtruck from '../../Assets/image/IllustrationTruck.png'
import ilustrationgif from '../../Assets/image/IllustrationGif.png'
const Cards = (props)=>{
return (

    <section className='cards row'>
    <h2 className='cardsh2'>{props.cardsh2}</h2>
   <Cards1a cardsimg={ilustrationcheck} cardsh3='Recibe tu pedido sin preocuparte' cardsp='Tienes cosas mas importantes en la cabeza, por eso con nuestra suscripción de café, nuca te quedarás sin tu taza de la mañana'/>
   <Cards1a cardsimg={ilustrationtruck} cardsh3='Envío en 24/48h' cardsp='Pide tu café antes de las 12h y lo recibirás al día siguiente.'/>
   <Cards1a cardsimg={ilustrationgif} cardsh3='Descuentos y beneficios' cardsp='Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa. para que lo descubras junto a nosotros.' />
  </section>
)

}
export default Cards