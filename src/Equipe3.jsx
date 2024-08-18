import { useState } from 'react'
import axios from 'axios'
import { Ecosynergy } from './ecosynergy'
import { Input } from './input'
import { Link } from 'react-router-dom'
import { cifracesar } from './cifradecesar'
import Assinatura from './Assinatura'
import { Button } from './button'
import fundo from "./image.png"
import logo from "./logo.png"
import letraverde from "./letraverde.png"
import "./mdequipe2.css"
function Equipe3() {
  const [nomeEqui, setNomeEqui] = useState("")
  const [assina, setassina] = useState(0)

  const [descEqui, setDescEqui] = useState("")



  function handleNomeEqui(event) {
    setNomeEqui(event)
  }
  function handleDescEqui(event) {
    setDescEqui(event)
  }
  function handleChangeSenha(event) {

    setSenha(event)
  }
  return (
    <>

<div style={{display:"flex", flexDirection:"column", backgroundImage: `url('${fundo}')`, width:"100vw", height:"100vh", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionX:"center",backgroundPositionY:"",textAlign:"center"}}>

<div id='imgmargin' style={{display:"flex",flexDirection:"row", width:"100vw",height:"15vh",justifyContent:"center",alignItems:"center",marginBottom:"20px"}}>
<img src={`${logo}`} className='img'alt="" />
    <img src={`${letraverde}`} className='img'   alt="" /></div>

    <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
    <div>
      <p id='mdequi3txt0' style={{fontWeight:"bold"}}>Escolha seu plano</p>
      
    </div>
    <div >
      <p id='mdequi3txt1' >Voce esta a um passo do seu futuro mais verde!!00000 Escolha um plano ecosynergy.</p>
    </div>

    {!assina &&
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>          
          <div onClick={()=>{
            setassina(0)
          }}
          ><p className="mdAnuMen" style={{color:"black"}}>Plano anual</p> <div className="mdAnuMendiv" style={{border:"2px solid black", height:"0.001px"}}></div></div>
          <div onClick={()=>{
            setassina(1)
          }}
          ><p className="mdAnuMen" style={{color:"#aaa"}}>Plano mensal</p> <div className="mdAnuMendiv" style={{border:"2px solid #aaa", height:"0.001px"}}></div></div>
    </div>
    }
      {assina == 1 &&
    <div className="mdAnuMendiv" style={{display:"flex",flexDirection:"row", justifyContent:"center,", width:"100vw"}}>          
          <div onClick={()=>{
            setassina(0)
          }}
          ><p className="mdAnuMen" style={{color:"#aaa"}}>Plano anual</p> <div className="mdAnuMendiv" style={{border:"2px solid #aaa", height:"0.001px"}}></div></div>
          <div onClick={()=>{
            setassina(1)
          }}><p className="mdAnuMen" style={{color:"black"}}>Plano mensal</p> <div className="mdAnuMendiv" style={{border:"2px solid black", height:"0.001px"}}></div></div>
    </div>
    }

    <div id="divAssinatura" style={{display:"flex", justifyContent:"center"}} >
    <Assinatura assinatura="Gratis" preco="R$ 0" listas={[]} />
       
       <Assinatura assinatura="Basico" preco={assina == 0? "R$ 72,99": "R$ 111,99"} listas={[]} />
          <Assinatura assinatura="Gold" preco={assina == 0? "R$ 105,99": "R$ 162,99"}  listas={["Banco de dados automatizado"]} />
          <Assinatura assinatura="Platina" preco={assina == 0? "R$ 116,99": "R$ 179,99"}  listas={["Banco de dados automatizado",
"Orientação para corte de emissões ",
"Selo de sustentabilidade"
]} />   
    </div>
    <div id="mddivavisoequi" style={{ fontWeight:"bold"}}>Ao Assinar estou fico ciente da necessidade do uso dos sensores MQ7 e MQ135 para o pleno funcionamento</div>
    </div>
       </div>

    </>
  )
}

export default Equipe3
