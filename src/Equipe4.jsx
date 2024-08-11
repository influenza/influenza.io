import { useEffect, useState } from 'react'
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
import { paises } from './paises'
import { estados } from './pestados'

function Equipe4() {

  let navigate=useNavigate()

  const [nacionalidade, setnacioNalidade] = useState("")
  const [estado, setEstado] = useState("")
  const [hdiv, sethdiv] = useState("78vh")

  const [nomeEqui, setNomeEqui] = useState("")
  const [Area, setArea] = useState("")
  const [Numfunc, setNumfunc] = useState("")
  const [cadastro, setcadastro] = useState(true)
  let erros = document.getElementsByClassName("erros")
  let erro = document.getElementsByClassName("erro")
  
  let inputs = document.getElementsByClassName("inplog" )
  function handleChangeEstado(event){
    setEstado(event.target.value)

  }
  function handleChangeNacionalidade(event){
setnacioNalidade(event.target.value)
  }
  function handleChangeEmail(event) {
    setNomeEqui(event)
  }

  function handleEnviar(){
    Cookies.set("NomeEqui",nomeEqui)
    Cookies.set("Numfunc",Numfunc)
    Cookies.set("Area", Area)
    Cookies.set("Sede",nacionalidade)
    Cookies.set("Estado",estado)

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
    
    }   
  } if(cadastro == true){
    const headers = {
      headers: {
        "Authorization": `Bearer ${Cookies.get().Token}`
      }
    };
    console.log(Cookies.get().NomeEqui.toLowerCase())
    axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/search/${nomeEqui.toLowerCase()}`,headers)
    .then(res=>{
      if(res.data ==[]){
        console.log(res)
        erro[0].style.opacity = "1"
        erros[0].style.opacity = "1"
        erros[0].append("NOME DA EQUIPE JÁ UTILIZADO")
      }else{
        navigate("/Equipe3")
      }

      })
  }

  }

  return (
    <>

    <div style={{display:"flex", flexDirection:"column", backgroundImage: `url('${fundo}')`, width:"100vw", height:"100vh", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionX:"center",backgroundPositionY:"", justifyContent:"center",alignItems:"center",textAlign:"center"}}>
    <div style={{display:"flex",flexDirection:"row",marginTop:"-15vh", width:"100vw",}}>
<div style={{width:"50vw", display:"flex", alignItems:"center", textAlign:"left",justifyContent:"left", marginRight:"20px", fontSize:"20px"}}>  
<img src={`${logo}`} style={{width:"150px", height:"150px", marginRight:"20px"}} alt="" />
  <img src={`${letraverde}`} style={{width:"200px", height:"200px"}} alt="" /></div>

    </div>
    <div style={{backgroundColor:"white", width:"25vw", borderRadius:"17px",boxShadow:"4px 4px 4px 3px rgba(0, 0, 0, 0.2)",  height:`${hdiv}`}}>
      <p style={{fontSize:"40px",marginBottom:"25px",marginTop:"45px", fontWeight:"bolder"}}>Crie sua equipe em segundos</p>
      <div style={{ justifyContent:"center", alignItems:"center",textAlign:"center", }}>

</div>
      <div style={{display:"flex", textAlign:"center",justifyContent:"space-between",alignItems:"center"}}>
      <span style={{fontSize:"18px", marginLeft:"1.5vw", marginTop:"10px",marginBottom:"1.5vh", textAlign:"left"}}>NOME DA EQUIPE</span><span style={{marginRight:"2vw",fontSize:"30px"}}>*</span>
      </div>

      <Input className="inplog" value={nomeEqui}  style={{ padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px",fontSize:"18px",  height:"4.5vh",marginBottom:"0.5vh", width:"21vw"}} Onchange={handleChangeEmail}/>
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
      <div>
      <p style={{fontSize:"18px", marginLeft:"1.5vw", textAlign:"left",marginBottom:"1.5vh"}}>SETOR DA INDUSTRIA</p>
      <select name="setor" id="setor" style={{ padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px",fontSize:"18px",  height:"4.5vh",marginBottom:"0.5vh", width:"22vw"}}  onChange={(e)=>{
        setArea(e.target.value)
      }}>
          <option value="textil">Textil </option>
          <option value="Automobilistica">Automobilistica </option>
          <option value="PetroQuimica">PetroQuimica </option>
          <option value="Farmaceutico">Farmaceutico </option>
          <option value="Alimenticio">Alimenticio</option>
          <option value="Base">Base</option>
          <option value="Siderugica">Siderugica</option>
          <option value="Metalurgica">Metalurgica</option>
          <option value="Agropecuario">Agropecuario</option>
          <option value="Naval">Naval</option>
          <option value="eletroeletronica">eletroeletronica</option>
          <option value="Outra industria">Trabalho em outras industrias</option>
          <option value="Outros">Trabalho em outro setor da economia</option>
          <option value="Prefiro não informar">Prefiro não informar</option>
          
      
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
      </div>
      <div>
      <p style={{fontSize:"18px", marginLeft:"1.5vw", textAlign:"left",marginBottom:"5px"}}>QUANTIDADE DE FUNCIONARIOS</p>
      <select name="setor" id="setor" style={{ padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px",fontSize:"18px",  height:"4.5vh",marginBottom:"0.5vh", width:"22vw"}}  onChange={(e)=>{
        setNumfunc(e.target.value)
      }}>
                  <option value="1-50"> 1-50 </option>
          <option value="51-200"> 51-200  </option>
          <option value="201-500"> 201-500 </option>
          <option value="501-1000"> 501-1000 </option>
          <option value="1001-5000"> 1001-5000 </option>
          <option value="5001-10000"> 5001-10000 </option>
          <option value="10000-20000"> 10000-20000 </option>
          <option value="20001+"> 20001+ </option>
          <option value="Prefiro não informar">Prefiro não informar</option>
      
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
      </div>
      <div>
      <p style={{fontSize:"18px", marginLeft:"1.5vw", textAlign:"left",marginBottom:"5px"}}>SEDE DA EMPRESA</p>
  
   <select id="nacionalidade" onChange={handleChangeNacionalidade}  style={{ padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px",fontSize:"18px",  height:"4.5vh",marginBottom:"15px", width:"21vw"}} value={nacionalidade}>
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
       
      </div>

        
      <div style={{marginLeft:"1.5vw",justifyContent:"left",alignItems:"center",display:"flex",flexDirection:"row"}}>
     </div>
        <div>
        
        </div>
          <div>
          <Button func={handleEnviar} text={"Entrar"} style={{width:"18vw",height:"5.5vh", backgroundColor:"#279301",color:"white", fontWeight:"bold",borderRadius:"10px",border:"0px solid white"}}>Enviar</Button>

          </div>
        
    </div>
    
          </div>
    </>
  )
}

export default Equipe4