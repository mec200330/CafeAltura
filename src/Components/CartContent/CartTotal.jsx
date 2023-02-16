import { useContext } from "react";
import { DataContext } from "../Context/DataContext";


const CartTotal =()=>{
    
    const {cart} = useContext(DataContext)
  
    const total = cart.reduce((acc, el)=> acc+el.price *el.quantity, 0)
    
    
    return(
        <h3>Total a pagar: {total.toFixed(2)}€ 
        
        </h3>
        
    )

}
export default CartTotal