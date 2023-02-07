import './cards1a.css'
const Cards1a = (props)=>{
    return (
     <article className='col  cardsarticle' >
          <img src={props.cardsimg}/>
          <h3 className='cardsh3'>{props.cardsh3}</h3>
          <p className='cardsp'>{props.cardsp}</p>
        </article>
       
      
    )
    
    }
    export default Cards1a