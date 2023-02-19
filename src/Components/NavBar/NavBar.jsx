
import Bottom from '../bottom/Bottom'
import Logo from '../../Assets/image/taza cafe.png'
import Iconphone from '../../Assets/image/IconIcon phone.png'
import CarIcon from '../../Assets/image/Carr.png'
import { Link} from "react-router-dom"
import './NavBar.css'
import { DataContext } from '../../Context/DataContext'
import { useContext } from 'react'


const Navbar = () => {
    const { productsLength, setShowCart, showCart } = useContext(DataContext)

    const toogleShowCart = () => {
        console.log(showCart);
        setShowCart(!showCart)
    }

    return (
        <nav className="navBar">
            <article className="logo">
                <Link to="/">Cafedealtura.com</Link>
                <img src={Logo} alt="Coffe Cup" />
            </article>
            <article className="menuWrapper">
                <Link to="/shop">Tienda</Link>
                <Link to="">Suscipción</Link>
                <Link to="">Para empresas</Link>
                <Link to="">Sobre nosotros</Link>
                <Link to="">Contacto</Link>
            </article>
            <article className="contacLink">
                <div className="phoneContact">
                    <img src={Iconphone} alt="Phone" />
                    <p>+34 919 49 05 18</p>
                </div>
                <div className="logIn">
                    
                    <Bottom  clasebotton='btn-star'nombrebotton='Iniciar Sesión' />
                </div>
            </article>
            <div className="shopingCarIcon">
                <div>
                   <img onClick={()=>toogleShowCart()} className="cart" src={CarIcon} alt="Carrito de compras" />
                </div>
                <div className="count-product">
                    <p>{productsLength}</p>
                </div>
            </div>
        </nav >
    )
            }
        export default Navbar
