import CafeAPI from "../Components/CafeApi/CafeAPI"
import Cards from "../Components/cards1/Cards"
import 'bootstrap/dist/css/bootstrap.css';
import './shop.css'

const Shop = ()=>{
    return(
        <div>
            <div className="homeTwo row">
                <h2 className="homeh2">Últimos origenes</h2>
            <CafeAPI/>
            </div>
            <div className="row">
    <Cards cardsh2='Café con las mejores condiciones'/>
     </div>

        </div>
    )
}
export default Shop