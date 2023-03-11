import { useContext } from "react"
import { DataContext } from '../../Context/DataContext'
import { Link } from 'react-router-dom'



const CheckoutBox =({send})=>{
    
    const {total, freeSend} = useContext(DataContext)
    return(
<div className="totalCart">
            <div className="totalDetails">
                <h3>Total del carrito</h3>
                <hr />
                <div className="subTotalDetails">
                    <p className="subtotalTitle">SUBTOTAL</p>
                    <p className="subtotalAmount subtotal"> <span className='subtotalR'>{(total).toFixed(2)}€</span></p>
                </div>
                <div className="subTotalDetails">
                    <p className="subtotalTitle">ENVÍO</p>
                    <p className="subtotalAmount shippingAmount"><span>{send===0 ? 'GRATIS' : freeSend.toFixed(2)}</span></p>
                </div>
                <hr />
                <div className="detailOfTotal">
                    <p className="totalTitle">TOTAL</p>
                    <div className="totalAmount">
                        <h3 className="subtotalAmount total">{(total+(send===0 ? 0 : freeSend)).toFixed(2)}€</h3>
                        <p className="subtotalIVA iva">Incluye {(total*0.21).toFixed(2)}€ de IVA</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="buttonsWrapper">
              <Link to=''> <button type="submit" className="checkout"  disabled id='prueba'>Pagar y realizar pedido</button></Link> 
              
            </div>
        </div>
    )
}
export default CheckoutBox