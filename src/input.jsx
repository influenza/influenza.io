import { useEffect, useState } from "react"

export function Input(props){
    const [texto,setTexto] = useState("text")
 useEffect(() => {
        if(props.type != "text"){
            setTexto(props.type)
        }
        }, []);
    
    return(
        <input type={texto} className={props.className} id={props.id} value={props.value} style={props.style} placeholder={props.place} onChange={(event)=>{
            props.Onchange(event.target.value)
        }}/>
    )
}