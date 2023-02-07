import { Link } from "react-router-dom"
import './contact.css'
import Form from "../form/Form"
import Bottom from "../bottom/Bottom"

const Contact = (props) =>{

    return(
<section className="row contact">
    <article className="col contact1">
        <h3 className="contacth3">Entra en contacto con nosotros</h3>
        <p className="contactp">Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes posible.</p>
        <p className="contactp">También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de la tienda.</p>
        <p className="contactp">742 Evergreen Terrace</p>
        <p className="contactp">Springfield, OR 12345</p>
        <p className="contactp"> <img src={props.contactimg}/> {props.contactp6}</p> 
        <Link to='#' className="contacta"> <p className="contactp">{props.contactp4} <strong><u className="text-dark">{props.contactp5}</u></strong></p> </Link>
    </article>
    
      <Form/> 
      

    
    
</section>
        
    )
}
export default Contact