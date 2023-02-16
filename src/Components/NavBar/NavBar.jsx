// import {Link} from  'react-router-dom'
import Bottom from '../bottom/Bottom'
import Logo from '../../Assets/image/taza cafe.png'
import Iconphone from '../../Assets/image/IconIcon phone.png'
import CarIcon from '../../Assets/image/Carr.png'
// import './NavBar.css'

// const NavBar = (props) => {

//     return (

//         <header >
//             <article className='init'>
//                 <Link to={'/'} id='link'>
//                     cafedealtura.com
//                 </Link>
//                 <article className='cup'>
//                     <img src={TazaCafe} alt={props.altIcon} className='icon' />
//                 </article>
//             </article>

//             <article className='menu'>

//                 <Link to={'/Shop'} className='store'>
//                     Tienda
//                 </Link>
//                 <a href={props.href} className='Sus'>Suscripcion</a>
//                 <a href={props.href} className='business'>Para empresas</a>
//                 <a href={props.href} className='Us'>Sobre nosotros</a>
//                 <a href={props.href} className='cont'>Contacto</a>
//             </article>

//             <article>
//                 <div className='service'>
//                     <article className='link-button'>
//                         <picture>
//                             <img src={IconPhone} alt={props.altPhoneIcon} id='phone' />
//                         </picture>
//                         <a href={props.href} className='number'>+34 919 49 05 18</a>
//                     </article>

//                     <article className='button'>
//                         <Bottom clasebotton='btn-star' nombrebotton='Iniciar Sesión' />
//                     </article>
//                 </div>
//             </article>

//             <article className='car'>
//                 <div>
//                   <Link to={'cart'}>  <img src={CarIcon} id='' alt={props.carBuyName} />  </Link>  
//                 </div>
//             </article>
//         </header>
//     )


// }

// export default NavBar


import { Link} from "react-router-dom"
// import Button from '../Button/Button'
// import Cart from "../Cart/Cart"
// import Logo from "../../assets/img/coffeCup.png"
// import Iconphone from "../../assets/img/Iconphone.png"
// import Carr from "../../assets/img/Carr.png"
import './NavBar.css'
// import { DataContext } from "../../context/DataContext"
// import { useContext } from "react"

const Navbar = () => {
//     const { showCart, setShowCart, addItemToCart, cartItems, productsLength } = useContext(DataContext)

//     const toogleShowCart = () => {
//         setShowCart(!showCart)
//     }

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
                   <Link  to='/cart'> <img className="cart" src={CarIcon} alt="Carrito de compras" /></Link> 
                </div>
                {/* <div className="count-product">
                    <p>{productsLength}</p>
                </div> */}
            </div>
        </nav >
    )
            }
        export default Navbar
