import { useEffect, useState } from "react"

export default function InputPer(props){
    const [texto,setTexto] = useState("text")
    const [valor, setValor] = useState(props.text)
    

        if(props.type == "text"){
            if(props.width && props.height){
                return(
                    <textarea type="text" value={valor} onChange={(e)=>{
                        setValor(e.target.value)
                    }} style={{fontSize:"30px",borderColor:"#AAAAAA",borderBottom:"2px solid",width:props.width , borderRadius:"10px", height:props.height,justifyContent:"start"}}>{valor}</textarea>
                        )
            }else{
                return(
                    <input type="text" value={valor} onChange={(e)=>{
                        setValor(e.target.value)
                    }} style={{fontSize:"30px",borderColor:"#AAAAAA",width:"450px" , borderBottom:"2px solid", padding:"10px",  height:"50px",justifyContent:"start"}}></input>                        )
            }
        
        }
        else{
            if(props.width && props.height){
                return(
                    <div style={{fontSize:"30px",borderColor:"#AAAAAA",borderBottom:"2px solid",width:props.width, borderRadius:"10px", height:props.height}}>{valor}</div>
                        )
            }
            else{
                return(
                    <div style={{fontSize:"30px",borderColor:"#AAAAAA",width:"450px",borderBottom:"2px solid", padding:"10px",  height:"4vh",textAlign:"center",display:"flex",alignItems:"center"}}>{props.text}</div>
                        )
            }
        }
}