

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
import { cifracesar } from './cifradecesar'
import "./404.css"
import { Navigate, useNavigate } from 'react-router-dom'
import "./mediascadas2.css"
function Login() {
  console.log(Cookies.get())
  const [Nome, setNome] = useState("")
  const [cadastro, setcadastro] = useState(false)
  const [email, setEmail] = useState("")
  const [consenha, setConSenha] = useState("")
  const [senha, setSenha] = useState("")
  const [olho, setOlho] = useState(true)
  const [type, settype] = useState("password")

  const [olho2, setOlho2] = useState(true)

  let navigate=useNavigate()


  function handleChangeEmail(event) {
    setEmail(event)
  }
  function handleChangeNome(event) {
    setNome(event)
    }
    function handleChangeSenha(event) {
    setSenha(event.target.value)
    
     }
  function handleChangeconSenha(event) {
    setConSenha(event.target.value)
    

  }
  function handleChangeconOlho(event) {
    setOlho(false)
    console.log(olho)

  }
  function handleChangeconOlho2(event) {
    setOlho(true)
    console.log(olho)


  }
  function handleChangeconOlho3(event) {
    setOlho2(false)
    console.log(olho)

  }
  function handleChangeconOlho4(event) {
    setOlho2(true)
    console.log(olho)


  }
  
  function handleEnviar(){
    
    setcadastro(true)
    let erros = document.getElementsByClassName("erros")
    let erro = document.getElementsByClassName("erro")

    let inputs = document.getElementsByClassName("inplog" )
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regex2 = /^(?=.*[a-zA-Z]{6,})(?=.*[!@#$%^&*()])(?=.*[0-9]).*$/;
    const isValidSe = regex2.test(senha)
    const isValid = regex.test(email);
    
      const data = {            
        "identifier": email,
        "password": senha             
    };
    
    console.log(cadastro)

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

        }else if(inputs[x]== inputs[1]){
          erros[x].append("EMAIL OBRIGATORIO")
          setcadastro(false)

        }
        else{
          erros[x].append("SENHA OBRIGATORIO")
          setcadastro(false)

        }
      }
      else if(!isValidSe && (!erros[2].textContent == "SENHA INVÁLIDA SUA SENHA DEVE CONTER LETRAS MINÚSCULAS E MAIÚSCULAS, NUMEROS E CARACTER ESPECIAIS" || erros[2].textContent == "")){
        erros[2].append("SENHA INVÁLIDA, SUA SENHA DEVE CONTER LETRAS MINÚSCULAS E MAIÚSCULAS, NUMEROS E CARACTER ESPECIAIS")
        erro[2].style.opacity  = "1"
        erros[2].style.opacity = "1"
        setcadastro(false)

      }
      else if(consenha != senha && (!erros[3].textContent == "CONFIRME A MESMA SENHA" || erros[3].textContent == "")){
        erros[3].append("CONFIRME A MESMA SENHA ")
        erro[3].style.opacity  = "1"
        erros[3].style.opacity = "1"
        setcadastro(false)

      }
        else if(!isValid && (!erros[1].textContent == "EMAIL INVÁLIDO" || erros[1].textContent == "")){
        erros[1].append("EMAIL INVÁLIDO")
        erro[1].style.opacity  = "1"
        erros[1].style.opacity = "1"
        setcadastro(false)

        }
        

    
}
if(cadastro == true){
  console.log("a")

  axios.post('http://ec2-44-220-83-117.compute-1.amazonaws.com/auth/signin', data)
  .then(response => {
   console.log(data)
   console.log(response)
   console.log("a")
    if(response.status == 200){
      erro[1].style.opacity = "1"
      erros[1].style.opacity = "1"
      erros[1].append("EMAIL EM USO")
      return false
    }
    })
    const data2 = {            
      "identifier": Nome,
      "password": senha             
  };
  
  axios.post('http://ec2-44-220-83-117.compute-1.amazonaws.com/auth/signin', data2)
  .then(response => {
    if(response.status == 200){
      erro[0].style.opacity = "1"
      erros[0].style.opacity = "1"
      erros[0].append("USERNAME EM USO")
      return false
    }
  })
  erros[0].style.opacity = "0"
  erros[1].style.opacity = "0"

  Cookies.set("Nome",Nome)
  Cookies.set("Email",email)
  Cookies.set("Senha",senha)
  navigate("/cadastro4")
}
  }
  function handleCancelar(){
    setEmail("")  
    setSenha("")
  }


  
  return (
    <>

    <div style={{display:"flex", flexDirection:"column", backgroundImage: `url('${fundo}')`, width:"100vw", height:"100vh", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionX:"center",backgroundPositionY:"", justifyContent:"center",alignItems:"center",textAlign:"center"}}>
    <div id='imgmargin' style={{display:"flex",flexDirection:"row", width:"100vw",}}>
<div id="imgs" >  
<img src={`${logo}`} className='img'alt="" />
  <img src={`${letraverde}`} className='img'   alt="" /></div>

    </div>
    <div id="mdcon" style={{backgroundColor:"white",  borderRadius:"17px",boxShadow:"4px 4px 4px 3px rgba(0, 0, 0, 0.2)"}}>
      <p id="mdtxt1" style={{ fontWeight:"bolder"}}> Bem vindo ao mundo verde</p>
      
      <div style={{ display:'flex',flexDirection:"column",overflow:"hidden",justifyContent:"center", alignItems:"center",textAlign:"center", }}>
      <div id="mdgoogle" style={{border:"2px solid #aaa", borderRadius:"20px",   display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center",alignItems:"center",}}>
      <svg id='mdsvg' viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>Google-color</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Color-" transform="translate(-401.000000, -860.000000)">
            <g id="Google" transform="translate(401.000000, 860.000000)">
                <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05">

</path>
                <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335">

</path>
                <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853">

</path>
                <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4">

</path>
            </g>
        </g>
    </g>
</svg>
<span id="mdtxtgoogle" style={{ color:"#777", marginLeft:"30px", textAlign:"center", alignItems:"center"}}><span>Continuar com google</span></span>
      </div>
      
     
           <div style={{display:"flex", flexDirection:"row", alignItems:"center",justifyContent:"center",marginTop:"10px"}}><div className="linha" style={{border:"1px solid #d6d9de", height:"0.0001px", }}></div><span id="mdou" style={{ color:"#d6d9de"}}>OU  </span> <div className="linha" style={{border:"1px solid #d6d9de", height:"0.0001px", }}></div></div>
</div>

      <p className='diverro'style={{  textAlign:"left"}}>NOME DE USUARIO</p>

      <Input className="inplog" value={Nome}  style={{ border:"2px solid #aaa",borderRadius:"16px"}} Onchange={handleChangeNome}/>
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
     <p className='diverro'style={{  textAlign:"left"}}>EMAIL</p>

      <Input className="inplog" value={email}  style={{ border:"2px solid #aaa",borderRadius:"16px"}} Onchange={handleChangeEmail}/>
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
     <p className='diverro'style={{  textAlign:"left",marginTop:"5px",marginBottom:"5px"}}>SENHA</p>

      <div style={{display:"flex", justifyContent:"center", alignItems:"center",textAlign:"center"}}>
      <input className="inplog" type={olho ? 'password' : ''} style={{border:"2px solid #aaa",borderRadius:"16px"}} value={senha}   onChange={handleChangeSenha}/>
    
{ olho == true &&
<span onClick={handleChangeconOlho}>
<svg className='olhos'   style={{marginLeft:"-60px", backgroundColor:"white", }}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
<svg className='olhos'  style={{marginLeft:"-60px", backgroundColor:"white", }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 11.98C8.09 1.31996 15.91 1.32996 22 11.98" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 12.01C15.91 22.67 8.09 22.66 2 12.01" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</span>
}
      </div>
      <div  className='diverro'style={{mustifyContent:"left",alignItems:"center",display:"flex",flexDirection:"row"}}>
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
     <p className='diverro'style={{  textAlign:"left",marginTop:"5px",marginBottom:"5px"}}>CONFIMAR SENHA</p>

     <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <input className="inplog" type={olho2 ? 'password' : ''} style={{border:"2px solid #aaa",borderRadius:"16px"}} value={consenha}   onChange={handleChangeconSenha}/>
    
    { olho2 == true &&
    <span onClick={handleChangeconOlho3}>
    <svg className='olhos'   style={{marginLeft:"-60px", backgroundColor:"white", }}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <span onClick={handleChangeconOlho4}>
    <svg className='olhos'  style={{marginLeft:"-60px", backgroundColor:"white", }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 11.98C8.09 1.31996 15.91 1.32996 22 11.98" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22 12.01C15.91 22.67 8.09 22.66 2 12.01" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
    }
    
      
      </div>
      <div  className='diverro'style={{mustifyContent:"left",alignItems:"center",display:"flex",flexDirection:"row"}}>
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
<div className='erros' style={{color:"#FF6300", opacity:"0", display:"flex", alignItems:"center",justifyContent:"center", fontSize:"11.5px"}}>
  
      </div>
     </div>
     
          <div>
          <Button id="mdbtn" func={handleEnviar} text={"Entrar"} style={{ backgroundColor:"#279301",color:"white", fontWeight:"bold",borderRadius:"10px",border:"0px solid white"}}>Enviar</Button>
          <div id="mdaviso" style={{backgroundColor:"#aaa", borderBottomLeftRadius:"20px", borderBottomRightRadius:"20px", display:"flex", textAlign:"center",justifyContent:"center"}}>
          <span id="avisotxt" >Ao clicar  no botão acima, você concorda com os Termos de Serviço <a href="">Ler termos</a></span>
        </div>
          </div>
        
    </div>
    
          </div>
    </>
  )
}

export default Login