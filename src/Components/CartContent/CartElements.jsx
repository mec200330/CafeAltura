import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import './CartElements.css'

const CartElements = ()=>{
    const {cart, setCart} = useContext (DataContext)
    
    console.log(cart);
    return cart.map((coff)=>{
        const sumar = ()=>{
        console.log('aqui');
        coff.quantity++
        setCart([...cart])
        console.log(coff);
        }
        return (
            <div className="modal-container row">
        <article className='items col'key={coff._id} >
        
         <img  src={coff.img_url}/>         
         <a className='bottom3' >{coff.brand}</a>
         <p>Precio: {coff.price.toFixed(2)}€</p>
         <p className="restar">-</p> 
         <p >Cantidad: {coff.quantity} Und(s)</p>
          <p className="sumar"  onClick={()=>sumar()}>+</p>
         <p> Subtotal: {(coff.price * coff.quantity).toFixed(2)}€</p>
        <span className="delete-product">❌</span>
        </article>

            </div>
        
        )
    })
}
export default CartElements