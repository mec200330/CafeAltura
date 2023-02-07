import Bottom from "../bottom/Bottom"


const Form = ()=>{

return(
<form className="col form" id="form">
<label for="nombre" > <small>Nombre Completo</small></label> 
<input type="text" class="form-control" id="nameInput"></input>
<input className="subbtn" type="submit" value="Enviar" id="submit"></input>
</form>
)
}
export default Form