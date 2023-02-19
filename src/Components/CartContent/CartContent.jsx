import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import CartElements from "./CartElements"
import CartTotal from "./CartTotal"
import "./CartContent.css"
import { Link } from "react-router-dom";


const CartContent = ()=>{
const {cart, showCart, setShowCart} = useContext(DataContext)

    const toogleShowCart = () => {
        console.log(showCart);
        setShowCart(!showCart)
    }
//Condición para validar si el carrito esta vacio 
const showShoppingCartBox = showCart ? "shoppingCartsShow" : "shoppingCarts"
  
   
  return cart.length>0 ? (
    <div className={showShoppingCartBox}>
        <div onClick={()=>toogleShowCart()} className="delete-product">X</div>
        <Link onClick={()=>toogleShowCart()} className="tramitar" to='/Cesta'> <h5 >Tramitar Pedido</h5> </Link>
        <CartElements>
        </CartElements>
       <h3 className="total">Total a pagar: {<CartTotal/>}€</h3> 
        
        
    </div>
): (
    <div className={showShoppingCartBox}>
         <div onClick={()=>toogleShowCart()} className="delete-product">X</div>
       <h3  >Cesta vacia</h3>  
    </div>
   
)

}
export default CartContent