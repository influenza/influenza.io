import { useState } from 'react'
import "./Login.css"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { paises } from './paises';
import { Button } from './button';
import { Ecosynergy } from './ecosynergy';
import { Input } from './input';
import Cookies from 'js-cookie';
function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("")
  const [genero, setGenero] = useState(0)
  const [nacionalidade, setNacionalidade] = useState(0)
  function handleChangeNome(event) {
    console.log(event)
    setNome(event)
  }
  function handleGenero(event) {
    console.log(event.target.value)
    setGenero(event.target.value)
  }
  function handleChangeNacionalidade(event) {
    console.log("o")
    console.log(event.target.value)
    setNacionalidade(event.target.value)
  }
  function handleEnviar(){
      if(!nome||!genero||!nacionalidade){
        alert("Voce precisa escrever todos os campos")
        console.log(nome)
        console.log(genero)
        console.log(nacionalidade)
      }
      else{
        navigate("/cadastro2")
        Cookies.set("Nome",nome)
        Cookies.set("Nacionalidade",nacionalidade)
        Cookies.set("Genero",genero)
        console.log(Cookies.get().Genero)

//          axios({
//         method: "post",
//         url: "http://159.223.132.87/leituramq7",
//          data:{Nome:nome,Genero,genero,Nacionalidade:nacionalidade}
//        }).then(response => {
//          console.log(response);
//       });
      }
  }
  function handleCancelar(){
    setGenero("")
    setNacionalidade("")
    setNome("")
  }
  return (
    <>
    <Ecosynergy>

      <div id='form1'>
      <Input id="CadasNome" value={nome} place="Selecione seu nome" Onchange={handleChangeNome}/>
      <select id="genero" onChange={handleGenero} value={genero}>
      <option value="" >Selecione seu genero</option>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
        <option value="naoind">Prefiro não indentificar</option>
      </select>
      <select id="nacionalidade" onChange={handleChangeNacionalidade} value={nacionalidade}>
      <option value="" >Selecione sua nacionalidade</option>
          {paises && paises.map((nome)=>(
          <option value={nome.nome}>{nome.nome}</option>
          ))}
        <option value="naoind">Prefiro não indentificar</option>
      </select>      
      </div>
      <div id='botoeslogin1'>
      <Button id={"Enviar"} func={handleEnviar} text={"Enviar"}>Enviar</Button>
            <Link to="/">
            <Button text={"Voltar"} ></Button>
            </Link>
          <Button id={"Cancelar"} func={handleCancelar} text={"Cancelar"}></Button>
        </div>
        </Ecosynergy>
    </>
  )
}

export default Cadastro
