import { useEffect, useState } from 'react'
import axios from 'axios'
import { Ecosynergy } from './ecosynergy'
import { Input } from './input'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Button } from './button'
function Equipe() {
  const [nomeEqui, setNomeEqui] = useState("")
  const [descEqui, setDescEqui] = useState("")
  const [numfunc , setNumfunc] = useState("")
  const [area , setArea] = useState("")
  const navigate = useNavigate();

  useEffect(()=>{
  Cookies.set("Area",area)
  Cookies.set("NomeEqui",nomeEqui)
  Cookies.set("Desc",descEqui)
  Cookies.set("NumFunc",numfunc)

  },[area,nomeEqui,descEqui,numfunc])



  function handleNomeEqui(event) {
   
   console.log(event)
    setNomeEqui(event)



  }
  function handleDescEqui(event) {
   
   console.log(event.target.value) 
   setDescEqui(event.target.value)
  }
  function handleNumfunc(event){
   console.log(event.target.value)
    setNumfunc(event.target.value)
  }
  function handleArea(event) {
    console.log(event.target.value)
    setArea(event.target.value)

  }
  function handleEnviar(){
    
    console.log(Cookies.get().Area)
    console.log(Cookies.get().NumFunc)
    console.log(Cookies.get().Desc)
    console.log(Cookies.get().NomeEqui)

    axios({
      method: "post",
      url: "http://159.223.132.87/leiturasmq7/",
      data:{Mq7Value:700}
    });
    navigate("/equipe2")
  }
  return (
    <>
      <Ecosynergy qbolas={4}>
        <div>
        <Input id="NomeEqui" value={nomeEqui} place="Selecione o nome da sua equipe" Onchange={handleNomeEqui}></Input>
        </div>
        <p>
 Qual setor da industria de sua empressa:

        </p>
        <select name="setor" id="setor" onChange={handleArea}>
          <option value="textil">Textil </option>
          <option value="auto">Automobilistica </option>
          <option value="petro">PetroQuimica </option>
          <option value="farma">Farmaceutico </option>
          <option value="alime">Alimenticio</option>
          <option value="base">Base</option>
          <option value="sider">Siderugica</option>
          <option value="meta">Metalurgica</option>
          <option value="agro">Agropecuario</option>
          <option value="naval">Naval</option>
          <option value="eletro">eletroeletronica</option>
          <option value="outrasin">Trabalho em outras industrias</option>
          <option value="outrosse">Trabalho em outro setor da economia</option>
          
      
        </select>
        <p>
        Qual é a quantidade de pessoas trabalhando em sua empressa
        </p>
        <select name="setor" id="setor" onChange={handleNumfunc}>
          <option value="1-50"> 1-50 </option>
          <option value="51-200"> 51-200  </option>
          <option value="201-500"> 201-500 </option>
          <option value="501-1000"> 501-1000 </option>
          <option value="1001-5000"> 1001-5000 </option>
          <option value="5001-10000"> 5001-10000 </option>
          <option value="10000-20000"> 10000-20000 </option>
          <option value="20001+"> 20001+ </option>
        </select>
        <p>
       Caso queria insira uma descrição a sua equipe:
        </p>
        <textarea onChange={handleDescEqui} id="desc" name="descrição" rows="4" cols="50" style={{borderRadius:"10px", width:"300px"}}>

          </textarea>
        <Button text="Enviar" style={{marginTop:"20px"}} func={handleEnviar}></Button>

      </Ecosynergy>
    </>
  )
}

export default Equipe
