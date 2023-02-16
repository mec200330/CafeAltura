import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import CartElements from "./CartElements"
import CartTotal from "./CartTotal"


const CartContent = ()=>{
const {cart} = useContext(DataContext)
//Condición para validar si el carrito esta vacio 

    return cart.length>0 ? (
    <div>
        <CartElements/>
        <CartTotal/>
    </div>
): (
    <div>Cesta vacia</div>
)

}
export default CartContent