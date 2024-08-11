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
import "./mdcadastro4.css"

import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from "./navbarlateral";
import "./404.css"
import axios from "axios";
import { cifracesar } from "./cifradecesar";
export function Cadastro4(props){
    let navigate=useNavigate()
    const [nacionalidade, setNacionalidade] = useState("")
    const [genero, setGenero] = useState("")
    const [Nome, setNome] = useState("")
    const [cadastro, setcadastro] = useState(true)

    const  handleEnviar = async ()=>{
      let erros = document.getElementsByClassName("erros")
      let erro = document.getElementsByClassName("erro")
      
      let inputs = document.getElementsByClassName("inplog" )
      console.log(inputs)
      console.log(genero)
      console.log(nacionalidade)

      for(let x=0; x<inputs.length; x++) {
        if(erros[x].style.opacity =="1"){
         erros[x]?.removeChild(erros[x].lastChild);
         erro[x].style.opacity = "0"
         erros[x].style.opacity = "0"
              }
        
        if(!inputs[x].value && (erros[x].textContent == "")){
         erro[x].style.opacity = "1"
         erros[x].style.opacity = "1"
         if(inputs[x] == inputs[0]){
           erros[x].append("NOME OBRIGATORIO")
           setcadastro(false)
         }
         else if(inputs[x] == inputs[1]){
          erros[x].append("GENERO OBRIGATORIO")
          setcadastro(false)
        }
        else if(inputs[x] == inputs[2]){
          erros[x].append("NACIONALIDADE OBRIGATORIO")
          setcadastro(false)
        }
      }   
 }
 if(cadastro){
  Cookies.set("Genero",genero)
  Cookies.set("Nacionalidade",nacionalidade)
  Cookies.set("NomeCom",Nome)
  
  const data = {
    "username": Cookies.get().Nome,
    "fullName": Nome,
    "email": Cookies.get().Email,
    "password": Cookies.get().Senha,
    "gender": genero,
    "nationality": nacionalidade
  };
  
  
   axios.post('http://ec2-44-220-83-117.compute-1.amazonaws.com/auth/signup', data,)
    .then(response =>{
      console.log(response)
      console.log('Resposta:', response.data);
      Cookies.set('ID',response.data.id)
      console.log(Cookies.get().Email)
      console.log(Cookies.get().Senha)



      const data2 = {            
        "identifier": Cookies.get().Email,
        "password": Cookies.get().Senha             
    };
        axios.post('http://ec2-44-220-83-117.compute-1.amazonaws.com/auth/signin', data2).then(res=>{
      console.log(res)
      Cookies.set("Token", res.data.accessToken)
      }).catch(res=>console.log(res))
      navigate("/equipevisao")
    })
    .catch(error => {
      console.error('Erro:', error);
    });
    console.log(Cookies.get().ID)
    Cookies.set("NomeEqui2","")
 }
      }
    function handleChangeNacionalidade(event) {
        console.log(event.target.value)
        setNacionalidade(event.target.value)
      }
      function handleGenero(event) {
        console.log(event.target.value)
        setGenero(event.target.value)
      }
      function handleNome(event){
        console.log(event.target.value)
        setNome(event.target.value)
      }
    return(
      <div style={{display:"flex", flexDirection:"column", backgroundImage: `url('${fundo}')`, width:"100vw", height:"100vh", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionX:"center",backgroundPositionY:"", justifyContent:"center",alignItems:"center",textAlign:"center"}}>
      <div id='imgmargin' className="imgmargindiv" style={{display:"flex",flexDirection:"row", width:"100vw",}}>
  <div id="imgs" >  
  <img src={`${logo}`} className='img'alt="" />
    <img src={`${letraverde}`} className='img'   alt="" /></div>
  
      </div>
      <div id="mdcon" style={{backgroundColor:"white",  borderRadius:"17px",boxShadow:"4px 4px 4px 3px rgba(0, 0, 0, 0.2)"}}>
      <p id="mdtxt1cad4">Estamos quase lá</p>
      <p className='diverro'style={{  textAlign:"left",marginTop:"5px",marginBottom:"5px"}}>NOME COMPLETO</p>
      <input  className="inplog" value={Nome} onChange={handleNome} />
          <div className='diverro' style={{justifyContent:"left",alignItems:"center",display:"flex",flexDirection:"row"}}>
     <div className='erro' style={{opacity:"0"}}>
         <svg className='mdsinal' style={{marginRight:"20px"}} version="1.0" mlns="http://www.w3.org/2000/svg"
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
</svg></div>
      <div className='erros' style={{color:"#FF6300", opacity:"0", display:"flex", alignItems:"center",justifyContent:"center", fontSize:"12px"}}>
  
      </div>
      
     </div>
     <p className='diverro'style={{  textAlign:"left",marginTop:"5px",marginBottom:"5px"}}>GENERO</p>

<select className="inplog" id="mdinp3cad4"   onChange={handleGenero} value={genero}>
  
<option value="" >Selecione seu genero</option>
<option value="Masculino">Masculino</option>
<option value="Feminino">Feminino</option>
<option value="Outros">Prefiro não indentificar</option>
</select>
<div className='diverro' style={{justifyContent:"left",alignItems:"center",display:"flex",flexDirection:"row"}}>
     <div className='erro' style={{opacity:"0"}}>
         <svg className='mdsinal' style={{marginRight:"20px"}} version="1.0" mlns="http://www.w3.org/2000/svg"
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
</svg></div>
      <div className='erros' style={{color:"#FF6300", opacity:"0", display:"flex", alignItems:"center",justifyContent:"center", fontSize:"12px"}}>
  
      </div>
      
     </div>
     <p className='diverro'style={{  textAlign:"left",marginTop:"5px",marginBottom:"5px"}}>NACIONALIDADE</p>
      
<select id="mdinp3cad4" className="inplog" onChange={handleChangeNacionalidade}   value={nacionalidade}>
<option value="" disabled={true} >Selecione sua nacionalidade</option>
  {paises && paises.map((nome)=>(
  <option value={nome.nome}>{nome.nome}</option>
  ))}
<option value="naoind">Prefiro não indentificar</option>
</select>    
<div className='diverro' style={{justifyContent:"left",alignItems:"center",display:"flex",flexDirection:"row"}}>
     <div className='erro' style={{opacity:"0"}}>
         <svg className='mdsinal' style={{marginRight:"20px"}} version="1.0" mlns="http://www.w3.org/2000/svg"
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
</svg></div>
      <div className='erros' style={{color:"#FF6300", opacity:"0", display:"flex", alignItems:"center",justifyContent:"center", fontSize:"12px"}}>
  
      </div>
      
     </div>  
          
          <div id='botoeslogin1'>
          <Button text={"Entrar"} func={handleEnviar} id="mdbtncad4">Enviar</Button>
    
            </div>
            
        </div>
        
              </div>
        

)}