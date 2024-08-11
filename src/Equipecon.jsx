import { useState } from 'react'
import axios from 'axios'
import { Ecosynergy } from './ecosynergy'
import { Input } from './input'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
function EquipeCon(props) {


  function handleEnviar(){
    axios({
      method: "post",
      url: "http://159.223.132.87/leiturasmq7/",
      data:{Mq7Value:700}
    });
  }
  console.log(Cookies.get().Cadastro)
  return (
    <>
      <Ecosynergy bolas={0} bola={false}> 
      <p>Voce foi convidado para a equipe {Cookies.get().NomeEqui}</p>
      {Cookies.get().Cadastro ?
      <button>Aceitar convite</button>
      :
      <div>
      <p>Voce deve fazer seu cadastro para prosseguir</p>
      <button>Clique aqui para fazer cadastro</button>
     </div>
      }
      </Ecosynergy>
    </>
  )
}

export default EquipeCon
