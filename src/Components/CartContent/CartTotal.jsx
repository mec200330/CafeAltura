import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";



const CartTotal =()=>{
    
    const {cart} = useContext(DataContext)
  
    const total = cart.reduce((acc, el)=> acc+el.price *el.quantity, 0)
    const totalQuantity = cart.reduce((acc, el)=> acc+el.quantity, 0)
    console.log(totalQuantity);
    
    return(
        <p>{total.toFixed(2)}
        
        </p>
        
    )

}
export default CartTotal