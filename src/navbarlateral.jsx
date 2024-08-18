


import "./Login.css"
import { Button } from './button'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import fundo from "./image.png"
import logo from "./logo.png"
import letraverde from "./letraverde.png"
import { useEffect, useState } from 'react';
import "./Login.css";
import axios from 'axios';
import { Ecosynergy } from './ecosynergy';
import { Input } from './input';
import jsCookie from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom'

function Navbar(props) {
  const [idarr, setarr] = useState(['','','','','']);
  let navigate=useNavigate()

const stylechosen = {marginTop:"10vh" ,backgroundColor:"#DDD9CE", width:"15w",height:"10vh",textAlign:"center",justifyContent:"center",alignItems:"center",display:"flex",borderRadius:"20px"}
const divs = document.getElementsByClassName("navbar")
idarr[props.es]="chosen"
return (
    <div style={{backgroundColor:"white",marginRight:"200px",fontSize:"30px", width:"18vw", display:"grid",alignItems:"center",justifyContent:"space-evenly",textAlign:"center",height:"100vh",position:"fixed",overflow:"hidden"}}>
    <div id={idarr[0]} onClick={()=>{navigate("/equipevisao")}} className="navbar" >{Cookies.get().NomeEqui}</div>
    <div id={idarr[1]} onClick={()=>{navigate("/perfil")}}className="navbar" >Perfil</div>    
    <div id={idarr[2]} onClick={()=>{navigate("/dashboard")}}className="navbar" >Dashboard</div>    
    <div id={idarr[3]}onClick={()=>{navigate("/tabela")}} className="navbar">Tabela de dados</div>
    <div id={idarr[4]} onClick={()=>{navigate("/listausuarios")}}className="navbar">Gerenciamento de membros</div>
</div>    
  )
}

export default Navbar