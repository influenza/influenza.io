import Login from "./App";
import { Link } from "react-router-dom";
import logo from "./logo.png"
import "./Home.css";
import "./404.css";

import axios from "axios";
import { Button } from "./button";
function Inicio(){


    return(         
        <> 
        <div style={{height:"10vh",backgroundColor:"green",width:"100vw",display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        <div style={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
        <img src={`${logo}`} style={{width:"150px", height:"150px", marginRight:"20px"}} alt="" />

        </div>
        <div style={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
            <button id="Btncada"style={{backgroundColor:"green", color:"#cfe1b9", border:"#cfe1b9 2px solid", borderRadius:"2px", }}>Cadastro</button>
            <button>Login</button>

        </div>
        </div>
     
        </>

    )
}
export default Inicio