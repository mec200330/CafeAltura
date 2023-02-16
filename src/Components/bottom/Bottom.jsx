import './botton.css'
const Bottom =(props)=>{
    

    return(
        <button onClick={props.comprar} className={props.clasebotton}>{props.nombrebotton}</button>
    )
}

export default Bottom