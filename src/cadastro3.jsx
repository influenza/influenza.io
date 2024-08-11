


import React, { useEffect, useState } from 'react'
import "./Login.css"
import axios from 'axios'
import { Button } from './button'
import { Link } from 'react-router-dom'
import { Ecosynergy } from './ecosynergy'
import { Input } from './input'
import jsCookie from 'js-cookie'
import Cookies from 'js-cookie'
import fundo from "./image.png"
import logo from "./logo.png"
import letraverde from "./letraverde.png"
import { Navigate, useNavigate } from 'react-router-dom'
import "./mediacadastro3.css"
function Cadastro3() {
  const [code, setCode] = useState([]);
  const [x, setX] = useState(0);
  let navigate=useNavigate()

  console.log(Cookies.get())
  const [email2, setEmail2] = useState()
  const [senha, setSenha] = useState("")
  const [codcert, setcodcert] = useState("12345")
  useEffect(() => {
    const handleKeyPress = (e) => {

   if(x<=4){
    setCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[x] = e.key;
      
      return newCode;

    });

   }
      if (x < 5) {
        setX((prevX) => prevX + 1);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Backspace') {
        setCode((prevCode) => {
          const newCode = [...prevCode];
            newCode[x-1] = '';

          return newCode;
        });

        if (x > 0) {
          setX((prevX) => prevX - 1);
        }
      }
    };

    document.body.addEventListener("keypress", handleKeyPress);
    document.body.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      document.body.removeEventListener("keypress", handleKeyPress);
      document.body.removeEventListener("keydown", handleKeyDown);
    };
  }, [x]);

  function handleChangeEmail2(event) {
    Cookies.set("email",email2)
  }
function handlecodver(){
  axios.get()
  setEmail2(code.join(""))
  let erros = document.getElementById("erros")
  let erro = document.getElementById("erro")
  console.log(email2)
  console.log(code.join(""))
  erro.style.opacity = "0"
  erros.style.opacity = "0"
  erros.append("")
  erros?.removeChild(erros.lastChild);

  if(email2 ==undefined || !erros.textContent =="CODIGO DE VERIFICAÇÃO OBRIGATORIO" ){
    erro.style.opacity = "1"
    erros.style.opacity = "1"

    erros.append("CODIGO DE VERIFICAÇÃO OBRIGATORIO")


  }
  else if(email2 != codcert && email2 != undefined || !erros.textContent =="CODIGO DE VERIFICAÇÃO INCORRETO"){
        erro.style.opacity = "1"
    erros.style.opacity = "1"
    erros?.removeChild(erros.lastChild);
    erros.append("CODIGO DE VERIFICAÇÃO INCORRETO")
  }
  else if(email2 == codcert){
    Cookies.set("codcert",true)
    navigate(`/equipevisao`)
    
  }
}
  return (
    <>

    <div style={{display:"flex", flexDirection:"column", backgroundImage: `url('${fundo}')`, width:"100vw", height:"100vh", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionX:"center",backgroundPositionY:"", justifyContent:"center",alignItems:"center",textAlign:"center"}}>
    <div style={{display:"flex",flexDirection:"row", width:"100vw",}}>
<div style={{width:"40vw", display:"flex", alignItems:"center", textAlign:"left",justifyContent:"left", marginRight:"20px", fontSize:"20px"}}>  
<div id='divimg' style={{width:"50vw", display:"flex", alignItems:"center", textAlign:"left",justifyContent:"left", marginRight:"20px" ,fontSize:"20px"}}>  
<img src={`${logo}`} style={{width:"150px", height:"150px", marginRight:"20px"}} alt="" />
  <img src={`${letraverde}`} style={{width:"150px", height:"150px"}} alt="" /></div>

</div>

    </div>
    <div id='md2con' style={{backgroundColor:"white",  boxShadow:"4px 4px 4px 3px rgba(0, 0, 0, 0.2)"}}>
      <p id="mdtxtgeral" style={{ fontWeight:"bolder", }}>Estamos quase lá</p>
    <p id='mdtxtem'>Enviamos um codigo para seu email, coloque-o abaixo</p>
    <div id="mdbotaodiv" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <span className="mdbotao" style={{ padding:"0px 10px",border:"2px solid #aaa",fontSize:"18px", borderRadius:"20px",   height:"5vh",marginBottom:"5px", width:"2.5vw", display:"flex", justifyContent:"center", textAlign:"center", alignItems:"center"}}>{code[0]}</span>
    <span  className="mdbotao" style={{ padding:"0px 10px",border:"2px solid #aaa",fontSize:"18px", borderRadius:"20px",   height:"5vh",marginBottom:"5px", width:"2.5vw", display:"flex", justifyContent:"center", textAlign:"center", alignItems:"center"}}>{code[1]}</span>
    <span  className="mdbotao" style={{ padding:"0px 10px",border:"2px solid #aaa",fontSize:"18px", borderRadius:"20px",   height:"5vh",marginBottom:"5px", width:"2.5vw", display:"flex", justifyContent:"center", textAlign:"center", alignItems:"center"}}>{code[2]}</span>
    <span   className="mdbotao" style={{ padding:"0px 10px",border:"2px solid #aaa",fontSize:"18px", borderRadius:"20px",   height:"5vh",marginBottom:"5px", width:"2.5vw", display:"flex", justifyContent:"center", textAlign:"center", alignItems:"center"}}>{code[3]}</span>
    <span  className="mdbotao" style={{ padding:"0px 10px",border:"2px solid #aaa",fontSize:"18px", borderRadius:"20px",   height:"5vh",marginBottom:"5px", width:"2.5vw", display:"flex", justifyContent:"center", textAlign:"center", alignItems:"center"}}>{code[4]}</span>

    </div>
    <div id='erro'  style={{opacity:"0",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        </div>
      <div id='erros' className='txterro' style={{color:"#FF6300", opacity:"0", display:"flex", alignItems:"center",justifyContent:"center",}}>
      <svg version="1.0" style={{marginRight:"20px"}} mlns="http://www.w3.org/2000/svg"
 width="20px" height="20px " viewBox="0 0 225.000000 225.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
fill="#FF6300" stroke="none">
<path d="M1031 2065 c-24 -14 -50 -33 -58 -43 -29 -38 -937 -1548 -955 -1590
-37 -82 -7 -182 71 -237 l43 -30 993 0 993 0 43 30 c78 55 108 154 71 238 -11
25 -134 234 -273 464 -139 230 -346 573 -460 763 -114 190 -217 355 -229 367
-60 65 -163 81 -239 38z m127 -132 c35 -31 942 -1548 942 -1576 0 -60 43 -57
-975 -57 -1018 0 -975 -3 -975 57 0 28 907 1545 942 1576 11 9 26 17 33 17 7
0 22 -8 33 -17z"/>
<path d="M1068 1474 c-15 -8 -31 -27 -35 -42 -11 -44 13 -600 27 -617 19 -23
74 -29 107 -11 29 14 31 19 36 93 11 136 20 510 13 537 -12 49 -92 71 -148 40z"/>
<path d="M1082 685 c-44 -19 -68 -73 -52 -121 24 -72 102 -96 159 -48 59 50
46 140 -24 170 -41 17 -42 17 -83 -1z"/>
</g>
</svg>
      </div>
      
      <div id='mdbotoeslogin1'>
      <Button id="md2btn" text={"Entrar"} func={handlecodver} style={{ backgroundColor:"#279301",color:"white", fontWeight:"bold",borderRadius:"10px",border:"0px solid white"}}>Enviar</Button>

        </div>
        
    </div>
    
          </div>
    </>
  )
}

export default Cadastro3
