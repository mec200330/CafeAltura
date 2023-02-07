import { Link } from "react-router-dom"
import CafeAPI from "../CafeApi/CafeAPI"
import imgarrow from '../../Assets/image/IconFlecha.png'
import './card.css'
import 'bootstrap/dist/css/bootstrap.css';
const Card =()=>{
 
    return(
<section className='home row'>
<h2 className="homeh2">Novedades</h2>

    <CafeAPI isShortened={true}/>
    {/* <h1>HOLA</h1>
    <CafeAPI/> */}

<div className="row justify-content-center">
 <Link to='/shop' className="link1 col-3 ccb">Ver todo <img src={imgarrow}></img> </Link>
</div>
</section>
    )
}
export default Card