import { useState } from 'react'
import "./Login.css"
import axios from 'axios'
import { Button } from './button'
import { Link, useNavigate } from 'react-router-dom'
import { Ecosynergy } from './ecosynergy'
import { Input } from './input'
import jsCookie from 'js-cookie'
import Cookies from 'js-cookie'
import fundo from "./image.png"
import logo from "./logo.png"
import letraverde from "./letraverde.png"
export default function RedefinirSenha(){
  let navigate=useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [senhaAtual, setSenhaAtual] = useState("")

  let erros = document.getElementsByClassName("erros")
  let erro = document.getElementsByClassName("erro")

  let inputs = document.getElementsByClassName("inplog" )
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regex2 = /^(?=.*[a-zA-Z]{6,})(?=.*[!@#$%^&*()])(?=.*[0-9]).*$/;
  const isValidSe = regex2.test(senha)
  const isValid = regex.test(email);
  const [olho, setOlho] = useState(true)
  const [olho2, setOlho2] = useState(true)

  function handleChangeconOlho(event) {

    setOlho(false)
    console.log(olho)

  }

  function handleChangeconOlho2(event) {
    setOlho(true)
    console.log(olho)


  }
  function handleChangeconOlho21(event) {

    setOlho2(false)
    console.log(olho)

  }

  function handleChangeconOlho22(event) {
    setOlho2(true)
    console.log(olho)


  }


  function handleChangeEmail(event) {
    setEmail(event)

  }
  function handleChangeSenhaAtual(event){
    setSenhaAtual(event.target.value)
  }
  function handleChangeSenha(event) {
    setSenha(event.target.value)

  }
  
  function handleEnviar(){
    const headers = {
      "Authorization": `Bearer ${Cookies.get().Token}`,
      "Content-Type": "application/json"
    };
    console.log(Cookies.get())
    axios.get()   
  }
  
  return (
    <>

    <div style={{display:"flex", flexDirection:"column", backgroundImage: `url('${fundo}')`, width:"100vw", height:"100vh", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionX:"center",backgroundPositionY:"", justifyContent:"center",alignItems:"center",textAlign:"center"}}>
    <div style={{display:"flex",flexDirection:"row",marginTop:"-25vh", width:"100vw",}}>
    <div style={{width:"50vw", display:"flex", alignItems:"center", textAlign:"left",justifyContent:"left", marginRight:"20px", fontSize:"20px"}}>  
<img src={`${logo}`} style={{width:"150px", height:"150px", marginRight:"20px"}} alt="" />
  <img src={`${letraverde}`} style={{width:"150px", height:"150px"}} alt="" /></div>


    </div>
    <div style={{backgroundColor:"white", width:"25vw", borderRadius:"17px",boxShadow:"4px 4px 4px 3px rgba(0, 0, 0, 0.2)",  height:"60vh"}}>
      <p style={{fontSize:"40px",marginBottom:"25px",marginTop:"45px", fontWeight:"bolder"}}>Bem vindo de volta</p>
      <p style={{fontSize:"18px", marginLeft:"1.5vw", marginTop:"10px",marginBottom:"5px", textAlign:"left"}}>EMAIL</p>
      <Input className="inplog" value={email}  style={{ padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px",fontSize:"18px",  height:"4.5vh",marginBottom:"5px", width:"21vw"}} Onchange={handleChangeEmail}/>
      <div style={{marginLeft:"1.5vw",justifyContent:"left",alignItems:"center",display:"flex",flexDirection:"row"}}>
     <div className='erro' style={{opacity:"0"}}>
         <svg style={{marginRight:"20px"}} version="1.0" mlns="http://www.w3.org/2000/svg"
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
      <p style={{fontSize:"18px", marginLeft:"1.5vw", marginTop:"10px",marginBottom:"5px", textAlign:"left"}}>SENHA ATUAL</p>

      <div style={{display:"flex", justifyContent:"center", alignItems:"center",textAlign:"center"}}>
      <input className="inplog" type={olho2 ? 'password' : ''} style={{padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px", fontSize:"18px",height:"4.5vh", marginBottom:"5px", width:"21vw"}} value={senhaAtual}   onChange={handleChangeSenhaAtual}/>
    
{ olho2 == true &&
<span onClick={handleChangeconOlho21}>
<svg width="50px" height="30px"   style={{marginLeft:"-60px", backgroundColor:"white", }}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path  d="M14.83 9.17999C14.2706 8.61995 13.5576 8.23846 12.7813 8.08386C12.0049 7.92926 11.2002 8.00851 10.4689 8.31152C9.73758 8.61453 9.11264 9.12769 8.67316 9.78607C8.23367 10.4444 7.99938 11.2184 8 12.01C7.99916 13.0663 8.41619 14.08 9.16004 14.83" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 16.01C13.0609 16.01 14.0783 15.5886 14.8284 14.8384C15.5786 14.0883 16 13.0709 16 12.01" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.61 6.39004L6.38 17.62C4.6208 15.9966 3.14099 14.0944 2 11.99C6.71 3.76002 12.44 1.89004 17.61 6.39004Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.9994 3L17.6094 6.39" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.38 17.62L3 21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19.5695 8.42999C20.4801 9.55186 21.2931 10.7496 21.9995 12.01C17.9995 19.01 13.2695 21.4 8.76953 19.23" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  </span>
}
{olho2 == false &&
<span onClick={handleChangeconOlho22}>
<svg width="50px" height="30px"  style={{marginLeft:"-60px", backgroundColor:"white", }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 11.98C8.09 1.31996 15.91 1.32996 22 11.98" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 12.01C15.91 22.67 8.09 22.66 2 12.01" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</span>
}
      </div>
      <div style={{marginLeft:"1.5vw",justifyContent:"left",alignItems:"center",display:"flex",flexDirection:"row"}}>
     <div className='erro' style={{opacity:"0"}}>
         <svg style={{marginRight:"20px"}} version="1.0" mlns="http://www.w3.org/2000/svg"
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
     <p style={{fontSize:"18px", marginLeft:"1.5vw", textAlign:"left",marginBottom:"5px"}}>CONFIRME SUA SENHA</p>

     <div style={{display:"flex", justifyContent:"center", alignItems:"center",textAlign:"center"}}>
      <input className="inplog" type={olho ? 'password' : ''} style={{padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px", fontSize:"18px",height:"4.5vh", marginBottom:"5px", width:"21vw"}} value={senha}   onChange={handleChangeSenha}/>
    
{ olho == true &&
<span onClick={handleChangeconOlho}>
<svg width="50px" height="30px"   style={{marginLeft:"-60px", backgroundColor:"white", }}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path  d="M14.83 9.17999C14.2706 8.61995 13.5576 8.23846 12.7813 8.08386C12.0049 7.92926 11.2002 8.00851 10.4689 8.31152C9.73758 8.61453 9.11264 9.12769 8.67316 9.78607C8.23367 10.4444 7.99938 11.2184 8 12.01C7.99916 13.0663 8.41619 14.08 9.16004 14.83" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 16.01C13.0609 16.01 14.0783 15.5886 14.8284 14.8384C15.5786 14.0883 16 13.0709 16 12.01" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.61 6.39004L6.38 17.62C4.6208 15.9966 3.14099 14.0944 2 11.99C6.71 3.76002 12.44 1.89004 17.61 6.39004Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.9994 3L17.6094 6.39" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.38 17.62L3 21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19.5695 8.42999C20.4801 9.55186 21.2931 10.7496 21.9995 12.01C17.9995 19.01 13.2695 21.4 8.76953 19.23" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  </span>
}
{olho == false &&
<span onClick={handleChangeconOlho2}>
<svg width="50px" height="30px"  style={{marginLeft:"-60px", backgroundColor:"white", }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 11.98C8.09 1.31996 15.91 1.32996 22 11.98" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 12.01C15.91 22.67 8.09 22.66 2 12.01" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</span>
}
      </div>
      
      <div style={{marginLeft:"1.5vw",justifyContent:"left",alignItems:"center",display:"flex",flexDirection:"row"}}>
      <div className='erro' style={{opacity:"0"}}>
         <svg style={{marginRight:"20px"}} version="1.0" mlns="http://www.w3.org/2000/svg"
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

            <Link to={'/redefinirsenha'}><p style={{color:"black"}}>Esqueci minha senha</p></Link>
          <Button func={handleEnviar} text={"Entrar"} style={{width:"18vw",height:"5.5vh", backgroundColor:"#279301",color:"white", fontWeight:"bold",borderRadius:"10px",border:"0px solid white"}}>Enviar</Button>

          </div>
        
    </div>
    
          </div>
    </>
      )
}