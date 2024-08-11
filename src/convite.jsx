import { useState } from 'react'
import "./Login.css"
import axios from 'axios'
import { Link, useNavigate,useParams} from "react-router-dom";
import { Button } from './button';
import { Ecosynergy } from './ecosynergy';
import { Input } from './input';
import Cookies from 'js-cookie';
function Convite() {
const [check, setCheck] = useState(false)
const [email2,setEmail2]=useState("")

function handleChangeEmail2(e){
setEmail2(e)
}
const { cifra } = useParams();

console.log(`${decodeURIComponent(cifra)}`)

function handleChangeCheck(e){
console.log(e.target.checked)
setCheck(e.target.checked)
}
function handleEnviar(){
     if(check==false){
        alert("Voce deve aceitar os termos de servico para continuar ")
      }
      else{
        Cookies.set("Cadastro",true)
        console.log(Cookies.get())
      }
}
function handleCancelar(){
setEmail2("")
document.getElementById("termosin").checked=false
}
  return (
    <>
<Ecosynergy>
 
    <p id='texconem'>Enviamos um codigo para seu email, coloque-o abaixo</p>
    <Input id="CadasEmail2" value={email2} place="Selecione o codigo" Onchange={handleChangeEmail2}/>
      <div id='termos'>
      <label for="vehicle2"> Aceito os termos de uso</label>
      <input type="checkbox" id="termosin" onChange={handleChangeCheck}/>
      </div>
      <Link to="//termosuso"><p id='leia'>leia os termos de servico</p></Link>
      <div id='botoeslogin1'>
      <Button id={"Enviar"} func={handleEnviar} text={"Enviar"}>Enviar</Button>
            <Link to="/cadastro2">
            <Button text={"Voltar"} ></Button>
            </Link>
          <Button id={"Cancelar"} func={handleCancelar} text={"Cancelar"}></Button>
        </div>
        </Ecosynergy>
    </>
  )
}

export default Convite
