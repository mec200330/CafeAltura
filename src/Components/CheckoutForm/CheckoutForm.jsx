import { useState } from "react"


const CheckoutForm =()=>{
const[name, setName] = useState(false)



const handleSubmit = (evt)=>{
    
  
  
}

return(

        <form onSubmit={handleSubmit} className="col form" id="form">
           <label>          
            <input type='radio' name="metodopago"   ></input>  Tarjeta débito  
            </label>
            <label>          
            <input type='radio' name="metodopago"></input> Transferencia bancaria a la cuenta ES12 1234 1234 123457890
            </label>
            <label>          
            <input type='radio' name="metodopago"></input> Bizum
            </label>





            <label for="nombre" className="nombre"> <small>Nombre Completo</small></label> 
            <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="nameInput"></input>
            
        </form>
    )
}
export default CheckoutForm