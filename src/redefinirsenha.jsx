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
    setSenha(event)

  }
  
  function handleEnviar(){
    axios.post(`http://ec2-44-220-83-117.compute-1.amazonaws.com/auth/forgot-password/send-confirmation-code?email=${email}`).then((res)=>{
    Cookies.set("Email", email)
    Cookies.set("CodigoSenha", res.data)
    navigate("/codigosenha")
    })
  }
  
  return (
    <>

    <div style={{display:"flex", flexDirection:"column", backgroundImage: `url('${fundo}')`, width:"100vw", height:"100vh", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionX:"center",backgroundPositionY:"", justifyContent:"center",alignItems:"center",textAlign:"center"}}>
    <div style={{display:"flex",flexDirection:"row",marginTop:"", width:"100vw",}}>
    <div id='imgmargin' style={{display:"flex",flexDirection:"row", width:"100vw",height:"15vh",justifyContent:"",alignItems:"center",marginTop:"-20vh"}}>
<div id="imgs" >  
<img src={`${logo}`} className='img'alt="" />
  <img src={`${letraverde}`} className='img'   alt="" /></div>

    </div>


    </div>
    <div id='md2con' style={{backgroundColor:"white",  boxShadow:"4px 4px 4px 3px rgba(0, 0, 0, 0.2)",marginTop:"20vh"}}>    <p style={{fontSize:"30px",marginBottom:"35px",marginTop:"45px", fontWeight:"bolder"}}>Redefindo senha</p>
    <div>
    <p style={{fontSize:"18px", marginLeft:"0vw", marginTop:"10px",marginBottom:"15px", textAlign:"left",marginLeft:"6vw"}}>EMAIL:</p>
      <Input className="inplog" value={email}  style={{ padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px",fontSize:"18px",  height:"4.5vh",marginBottom:"25px", width:"24vw"}} Onchange={handleChangeEmail}/>
 
    </div>

          <Button func={handleEnviar} text={"Entrar"} style={{width:"25vw",height:"5.5vh", backgroundColor:"#279301",color:"white", fontWeight:"bold",borderRadius:"10px",border:"0px solid white"}}>Enviar</Button>

        
    </div>
    
          </div>
    </>
      )
}