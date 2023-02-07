import axios from "axios";
import { useEffect, useState } from "react";
import Bottom from "../bottom/Bottom";
import './CafeApi.css'
import 'bootstrap/dist/css/bootstrap.css';

const apiURL = 'https://cafe-de-altura-api.vercel.app/api/products'

const CafeAPI = (props) => {

    const {isShortened} = props
    const [coffe, setCoffe] = useState([])
    const [fetching, setFeching] = useState(true)
    const {coffeP, showCoffeP} = props

useEffect(()=>{
    axios
    .get(apiURL)
    .then((response)=>{
        setCoffe(response.data.products)
        setFeching(false)
    })
    .catch(err=> console.error(err))
}, [])



return(

    <div className="bagcoffe row">
{fetching && 'Loading'} 
{isShortened && coffe.map((coffe)=>{
if (coffe.price===9 && coffe.available === true){
    return( 
        <article className='test1 col'key={coffe.id} >
          <img  src={coffe.img_url}/>         
         <a className='bottom3' >{coffe.brand}</a>
         <p>{coffe.price.toFixed(2)}</p>
         <Bottom clasebotton='bottom4' nombrebotton='Añadir'></Bottom>
         </article>
    
    )
}
})}

{!isShortened && coffe.map((coffe)=>{

    return( 
        <article className='col test1'key={coffe.id}>
         <img className='bagcoffeimg' src={coffe.img_url}/>         
         <h3 className='bottom3' >{coffe.brand}</h3>
         <p>{coffe.price.toFixed(2)}</p>
         <Bottom clasebotton='bottom4' nombrebotton='Añadir'></Bottom>
        </article>
    
    )

})}

    </div>
)

}

export default CafeAPI