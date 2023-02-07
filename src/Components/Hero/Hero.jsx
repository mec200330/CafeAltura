import Bottom from "../bottom/Bottom";
import '../bottom/botton.css'
import heroimg from '../../Assets/image/Hero imageHoja de cafe.png'
import './hero.css'
const Hero =(props)=>{

    return(

     <section className='hero row'>
       <article class="col"> 
      <h3 className='heroh3'>{props.titleOne}</h3>
      <h1 className='heroh1'>{props.titleTwo}</h1>
      <p className='herop1'>{props.parrOne}</p>
      <Bottom clasebotton='bottom1' nombrebotton='Descubrir Origenes'></Bottom>  
      <Bottom clasebotton='bottom2' nombrebotton='Comprar café'></Bottom> 
     </article>
    
   
     <article className="col">
      <img className="heroimg" src={heroimg}/>
    </article>

  </section>
    
)
    
}
export default Hero