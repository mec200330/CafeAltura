import './botton.css'
const Bottom =(props)=>{
    

    return(
        <button disabled={props.estado} onClick={props.comprar} className={props.clasebotton}>{props.nombrebotton}</button>
    )
}

export default Bottom