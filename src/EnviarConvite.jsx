
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
import Navbar from './navbarlateral'
import Navbar2 from './navbarlateral2'
import { Navbar4 } from './Navbar4'
import { Navbar3 } from './navbar3'
function EnviarCon() {
  let erros = document.getElementById("erros")
  let erro = document.getElementById("erro")
  let Equi=[]
const [Email, setEmail] = useState()
function handlEmail(e){

setEmail(e.target.value)
console.log(Email)
}
function handleEnviar(){
  const headers = {
    headers: {
      "Authorization": `Bearer ${Cookies.get().Token}`
    }
  };
  console.log(Email)
  console.log(Cookies.get())
  console.log(erros)
  console.log(erro)

  if(erros?.style.opacity =="1"){
    erros?.removeChild(erros.lastChild);
    erro.style.opacity = "0"
    erros.style.opacity = "0"
         }
         else{
          axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/user/v1/findEmail/${Email}`, headers).then(res=>{
            console.log(res)
            axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/user/${res.data.id}`, headers).then(res=>{
              console.log(res)
              let furaFor
              for (let index = 0; index < res.data.length; index++) {
                console.log(Cookies.get().NomeEqui2 == res.data[index].name)
                if(Cookies.get().NomeEqui2 == res.data[index].name){
                  furaFor=true
                 }
              }if(furaFor){
                erro.style.opacity = "1"
                erros.style.opacity = "1"
                erros.append("Usuario já se faz presente em sua Equipe")  
              }
            }).catch(res=>{
  
            })
          }).catch(res =>{
            erro.style.opacity = "1"
            erros.style.opacity = "1"
            erros.append("Email inexistente")
          }  )
          axios.post(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/${91}/user/${55}`, {headers})
          .then(res => {
            console.log(res)
          }).catch(res=>console.log(res))
        }
        
         }
  
  return (
    <>
    <Navbar3></Navbar3>
    <div style={{justifyContent:"center"  ,display:"flex"}}>
    <Navbar4 ></Navbar4>
    <div style={{display:"flex", flexDirection:"column", backgroundColor: `#f5ebe0`, width:"92vw", height:"92vh", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionX:"center",backgroundPositionY:"", justifyContent:"center",alignItems:"center",textAlign:"center"}}>
    <div style={{display:"flex",flexDirection:"row", width:"100vw",}}>
<div style={{width:"40vw", display:"flex", alignItems:"center", textAlign:"left",justifyContent:"left", marginRight:"20px", fontSize:"20px"}}>  
<div id='divimg' style={{width:"50vw", display:"flex", alignItems:"center", textAlign:"left",justifyContent:"left", marginRight:"20px" ,fontSize:"20px"}}>  
</div>

</div>

    </div>
    <div id='md22con' style={{backgroundColor:"#D9D9D9",borderRadius:"20px",  height:"20vw",boxShadow:"4px 4px 4px 3px rgba(0, 0, 0, 0.2)"}}>
      <p id="mdtxtgeral" style={{ fontWeight:"bolder",fontSize:"22px" }}>Convide pessoas para participipar de sua equipe</p>
    <p style={{ fontWeight:"bolder",fontSize:"22px" }} id='mdtxtem'>Ensira o email do usuario que queira convidar, coloque-o abaixo</p>
    <div id="mdbotaodiv" style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"8vh"}}>
        <input style={{borderRadius:"20px", height:"4vh", width:"20vw"}} value={Email} onChange={handlEmail}></input>
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
      <Button id="md2btn" text={"Enviar"} func={handleEnviar} style={{ backgroundColor:"#279301",color:"white", fontWeight:"bold",borderRadius:"10px",border:"0px solid white"}}>Enviar</Button>

        </div>
        
    </div>
    
          </div>
          </div>
    </>
  )
}

export default EnviarCon
