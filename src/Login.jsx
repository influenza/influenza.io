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
import "./mdlogin.css"
function Login() {
  let navigate=useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  let erros = document.getElementsByClassName("erros")
  let erro = document.getElementsByClassName("erro")

  let inputs = document.getElementsByClassName("inplog" )
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regex2 = /^(?=.*[a-zA-Z]{6,})(?=.*[!@#$%^&*()])(?=.*[0-9]).*$/;
  const isValidSe = regex2.test(senha)
  const isValid = regex.test(email);
  function handleChangeconOlho(event) {

    setOlho(false)
    console.log(olho)

  }
  const [olho, setOlho] = useState(true)

  function handleChangeconOlho2(event) {
    setOlho(true)
    console.log(olho)


  }


  function handleChangeEmail(event) {
    setEmail(event)

  }
  function handleChangeSenha(event) {
    setSenha(event.target.value)

  }
  
  function handleEnviar(){


    for(let x=0; x<inputs.length; x++) {

        if(!inputs[x].value){
          console.log("a")
        erro[x].style.opacity = "1"
        erros[x].style.opacity = "1"
        if(erros[x].textContent == ""){
          if(inputs[x] == inputs[0]){
            erros[x].append("EMAIL OBRIGATORIO")
          }else{
            erros[x].append("SENHA OBRIGATORIO")
  
          }
        }
      

      }
        else{

          console.log("a")

          const data = {            
            "identifier": email,
            "password": senha             
        };
        
        axios.post('http://ec2-44-220-83-117.compute-1.amazonaws.com/auth/signin', data)
        .then(response => {
          Cookies.set("LoginResponse", response)
          Cookies.set("Nome",response.data.username)
          Cookies.set("Email",email)
          Cookies.set("Senha",senha)
          Cookies.set("Token", response.data.accessToken)
          console.log(Cookies.get())

          
          const headers = {
            headers: {
              "Authorization": `Bearer ${response.data.accessToken}`
            }
          };
          
          axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/user/v1/findEmail/${email}`, headers)
            .then(res => {
              console.log(res)
              Cookies.set("genero", res.data.gender)
              Cookies.set("nacionalidade", res.data.nationality)
              Cookies.set("NomeCom", res.data.fullName)
              Cookies.set("ID", res.data.id)

              console.log(Cookies.get())
              axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/user/${res.data.id}`, headers)
              .then(res =>{
                console.log(res.data[0].members.length)
                let data=[]
                for(let i =0; i<res.data[0].members.length;i++){
                  data.push(i)
                }
                console.log(data)
                Cookies.set("NumeroEqui", data)
                console.log(Cookies.get().NumeroEqui.split(","))
                Cookies.set("NomeEqui2",res.data[0].name)
                navigate("/equipevisao")
              }).catch(res=>{
                console.log(res)
                Cookies.set("NomeEqui2","")
              })
            })
             .catch(error => {
          console.error(error);
        });  
        })
        .catch( RES=>{
        if(erros[x].textContent !=""){
          erros[x]?.removeChild(erros[x].lastChild);
          erro[x].style.opacity = "0"
          erros[x].style.opacity = "0"
          erro[x].style.opacity = "1"
          erros[x].style.opacity = "1"
          erros[x].append("LOGIN INVALIDO")
        }

        }
        )
          }
   
       
}
  }
  return (
    <>

    <div style={{display:"flex", flexDirection:"column", backgroundImage: `url('${fundo}')`, width:"100vw", height:"100vh", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionX:"center",backgroundPositionY:"", justifyContent:"center",alignItems:"center",textAlign:"center"}}>
    <div id="mdlogmartop" style={{display:"flex",flexDirection:"row", width:"100vw",}}>
    <div id='mdlogdiv'>  
<img src={`${logo}`} className='mdlogimg' alt="" />
  <img src={`${letraverde}`} className='mdlogimg' alt="" /></div>


      <div id="mdlogcad" ><span >Não possui conta? crie!</span>           <Button func={()=>{navigate("/cadastro2")}} text={"Cadastre-se"} >Enviar</Button>
      </div>
    </div>
    <div id='mdlogdiv1'>
      <p id='mdlogP1' >Bem vindo de volta</p>
      <div style={{display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center",textAlign:"center", }}>
      <div id="mdlogGoogle" >
      <svg width="35px" height="35px" viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
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
<span id='mdlogPGoo'><span>Continuar com google</span></span>
      </div>
           <div id="mdlogOu" ><div className='mdlogBarra'></div><span>OU </span> <div className='mdlogBarra'></div></div>
</div>
      <p id='mdlogEmail'>EMAIL</p>

      <Input className="inplog" value={email}  id="mdlogINP"Onchange={handleChangeEmail}/>
      <div className='mdlogErro'>
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
     <p id="mdlogPSenh" >SENHA</p>

     <div style={{display:"flex", justifyContent:"center", alignItems:"center",textAlign:"center"}}>
      <input className="inplog" type={olho ? 'password' : ''} id="mdlogINP" value={senha}   onChange={handleChangeSenha}/>
    
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
      
      <div className='mdlogErro'>
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
          <Button func={handleEnviar} text={"Entrar"} id="mdlogEnviar">Enviar</Button>

          </div>
        
    </div>
    
          </div>
    </>
  )
}

export default Login