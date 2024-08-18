import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { Input } from "./input";
import { Button } from "./button";
import { Link } from "react-router-dom";
import InputPer from "./inputper";
import { paises } from './paises';
import fundo from "./image.png"
import logo from "./logo.png"
import letraverde from "./letraverde.png"

import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from "./navbarlateral";
import "./404.css"
export function Redefinir(props){
    let navigate=useNavigate()

    const [nacionalidade, setNacionalidade] = useState(0)
    const [genero, setGenero] = useState(0)
    function handleChangeNacionalidade(event) {
        console.log(event.target.value)
        setNacionalidade(event.target.value)
      }
      function handleGenero(event) {
        console.log(event.target.value)
        setGenero(event.target.value)
      }
    return(
        <div style={{display:"flex", flexDirection:"column", backgroundImage: `url('${fundo}')`, width:"100vw", height:"100vh", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionX:"center",backgroundPositionY:"", justifyContent:"center",alignItems:"center",textAlign:"center"}}>
        <div style={{display:"flex",flexDirection:"row", width:"100vw",}}>
    <div style={{width:"40vw", display:"flex", alignItems:"center", textAlign:"left",justifyContent:"left", marginRight:"20px", fontSize:"20px"}}>  
    <div style={{width:"50vw", display:"flex", alignItems:"center", textAlign:"left",justifyContent:"left", marginRight:"20px", marginTop:"-10vh",fontSize:"20px"}}>  
    <img src={`${logo}`} style={{width:"150px", height:"150px", marginRight:"20px"}} alt="" />
      <img src={`${letraverde}`} style={{width:"150px", height:"150px"}} alt="" /></div>
    
    </div>
    
        </div>
        <div style={{backgroundColor:"white", width:"65vw", borderRadius:"17px",boxShadow:"4px 4px 4px 3px rgba(0, 0, 0, 0.2)",  height:"70vh"}}>
          <p style={{marginTop:"20px",marginBottom:"20px", fontSize:"40px",fontWeight:"bolder", marginBottom:"50px"}}>Estamos quase lá</p>
            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"row"}}>
            <div style={{display:"flex", justifyContent:"center",flexDirection:"column", gap:"4vh"}}>
             <div >
             <p style={{marginRight:"16vw"}}>Nome</p>
            <Input className="inplog"   style={{ padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px",fontSize:"18px",  height:"4.5vh",marginBottom:"5px", width:"18vw"}} />
             </div>
             <div>
             <p style={{marginRight:"16vw"}}>Email</p>
            <Input className="inplog"   style={{ padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px",fontSize:"18px",  height:"4.5vh",marginBottom:"5px", width:"18vw"}} />
             </div>
             <div>
             <p style={{marginRight:"16vw"}}>Senha</p>
            <Input className="inplog"   style={{ padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px",fontSize:"18px",  height:"4.5vh",marginBottom:"5px", width:"18vw"}} />
             </div>
             
                </div>
                <div style={{display:"flex", justifyContent:"center",flexDirection:"column"}}>
                <div style={{display:"flex", justifyContent:"center",flexDirection:"column", gap:"4vh"}}>
             <div >
             <p style={{marginRight:"16vw"}}>Nome</p>
            <Input className="inplog"   style={{ padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px",fontSize:"18px",  height:"4.5vh",marginBottom:"5px", width:"18vw"}} />
             </div>
             <div>
             <p style={{marginRight:"16vw"}}>Email</p>
            <Input className="inplog"   style={{ padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px",fontSize:"18px",  height:"4.5vh",marginBottom:"5px", width:"18vw"}} />
             </div>
             <div>
             <p style={{marginRight:"16vw"}}>Senha</p>
            <Input className="inplog"   style={{ padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px",fontSize:"18px",  height:"4.5vh",marginBottom:"5px", width:"18vw"}} />
             </div>
             
                </div>
            </div>
            </div>
   
          
          <div id='botoeslogin1'>
          <Button text={"Entrar"} func={()=>{navigate(`/equipevisao`)}}  style={{width:"18vw", marginBottom:"2vh",height:"5.5vh", marginTop:"3vh", backgroundColor:"#279301",color:"white", fontWeight:"bold",borderRadius:"10px",border:"0px solid white"}}>Enviar</Button>
    
            </div>
            
        </div>
        
              </div>
        

)}