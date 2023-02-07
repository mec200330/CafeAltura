import {Link} from  'react-router-dom'
import Bottom from '../bottom/Bottom'
import TazaCafe from '../../Assets/image/taza cafe.png'
import IconPhone from '../../Assets/image/IconIcon phone.png'
import CarIcon from '../../Assets/image/Carr.png'
import './NavBar.css'

const NavBar = (props) => {

    return (

        <header >
            <article className='init'>
                <Link to={'/'} id='link'>
                    cafedealtura.com
                </Link>
                <article className='cup'>
                    <img src={TazaCafe} alt={props.altIcon} className='icon' />
                </article>
            </article>

            <article className='menu'>

                <Link to={'/Shop'} className='store'>
                    Tienda
                </Link>
                <a href={props.href} className='Sus'>Suscripcion</a>
                <a href={props.href} className='business'>Para empresas</a>
                <a href={props.href} className='Us'>Sobre nosotros</a>
                <a href={props.href} className='cont'>Contacto</a>
            </article>

            <article>
                <div className='service'>
                    <article className='link-button'>
                        <picture>
                            <img src={IconPhone} alt={props.altPhoneIcon} id='phone' />
                        </picture>
                        <a href={props.href} className='number'>+34 919 49 05 18</a>
                    </article>

                    <article className='button'>
                        <Bottom clasebotton='btn-star' nombrebotton='Iniciar Sesión' />
                    </article>
                </div>
            </article>

            <article className='car'>
                <div>
                    <img src={CarIcon} id='' alt={props.carBuyName} />
                </div>
            </article>
        </header>
    )


}

export default NavBar