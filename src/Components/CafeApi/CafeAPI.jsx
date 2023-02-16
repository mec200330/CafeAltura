import Bottom from "../bottom/Bottom";
import './CafeApi.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";


const CafeAPI = (props) => {
const {coffe, fetching, cart, setCart}= useContext (DataContext)

const buyProducts = (add) =>{

   const coffeeObj = {
        ...add,
        quantity: 1
    }

    console.log(coffeeObj);
 
const repeat = cart.some((repeatProduct)=> repeatProduct._id === coffeeObj._id)
console.log(repeat); 
if(repeat){
    cart.map((prod)=>{
        if(prod._id===coffeeObj._id){
            prod.quantity++
        }
    })
}else {
    setCart([...cart, coffeeObj])
}
console.log(cart);
}



    const {isShortened} = props
return(

    <div className="bagcoffe row">
{fetching && 'Loading'} 
{isShortened && coffe.map((coff)=>{
   
if (coff.price===9 && coff.available === true){
    return( 
        <article className='test1 col'key={coff._id} >
          <img  src={coff.img_url}/>         
         <a className='bottom3' >{coff.brand}</a>
         <p>{coff.price.toFixed(2)}€</p>
        
         <Bottom comprar={()=>buyProducts(coff)} clasebotton='bottom4' nombrebotton='Añadir'></Bottom>
         
         </article>
    )
}
})}
{!isShortened && coffe.map((coff)=>{
     
    return( 
        <article className='col test1'key={coff._id}>
         <img className='bagcoffeimg' src={coff.img_url}/>         
         <a className='bottom3' >{coff.brand}</a>
         <p>{coff.price.toFixed(2)}€</p>
         <Bottom  comprar={()=>buyProducts(coff)} clasebotton='bottom4' nombrebotton='Añadir'></Bottom>
        </article>
    )

})}

    </div>
)

}

export default CafeAPI