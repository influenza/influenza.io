

import "./Login.css"
import { Button } from './button'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import fundo from "./image.png"
import logo from "./logo.png"
import letraverde from "./letraverde.png"
import { useEffect, useState } from 'react';
import "./Login.css";
import axios from 'axios';
import { Ecosynergy } from './ecosynergy';
import { Input } from './input';
import jsCookie from 'js-cookie';
function Metas() {
  const [tempo, setTempo] = useState(0);
  const [metavalue, setMetavalue] = useState('');
  const [meta, setmeta]= useState(["","","","",])
  let navigate = useNavigate()
  useEffect(() => {
    console.log(tempo);
    console.log(metavalue);
    console.log(meta);
    console.log(Cookies.get().Metas)


  }, [tempo, metavalue,meta]);

  function handleMetaChange(e) {
    console.log(e)
    
    setMetavalue(e)
  }

     
  return (
    <>

    <div style={{display:"flex", flexDirection:"column", backgroundImage: `url('${fundo}')`, width:"100vw", height:"100vh", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionX:"center",backgroundPositionY:"", justifyContent:"center",alignItems:"center",textAlign:"center"}}>
    <div style={{display:"flex",flexDirection:"row",marginTop:"-25vh", width:"100vw",}}>
<div style={{width:"50vw", display:"flex", alignItems:"center", textAlign:"left",justifyContent:"left", marginRight:"20px", fontSize:"20px"}}>  
<img src={`${logo}`} onClick={navigate("/")} style={{width:"150px", height:"150px", marginRight:"20px"}} alt="" />
  <img src={`${letraverde}`} style={{width:"200px", height:"200px"}} alt="" /></div>

    </div>
    <div id="mdcon" style={{backgroundColor:"white", borderRadius:"17px",boxShadow:"4px 4px 4px 3px rgba(0, 0, 0, 0.2)"}}>
      <p id="mdlogP1" style={{ fontWeight:"bolder"}}>Defina suas metas de gases personalizadas</p>
      <p className="diverro" style={{textAlign:"left"}}>Tipo da meta</p>
    <select id="mdinp3cad4"
          name="metaPorTem"
          onChange={(e) => {
            if (e.target.value === "dia") {
              setTempo(0);
            } else if (e.target.value === "sem") {
              setTempo(1);
            } else if (e.target.value === "men") {
              setTempo(2);
            } else {
              setTempo(3);
            }
          }}
          style={{ padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px",fontSize:"18px",  }}
        >
          <option value="dia">Diaria</option>
          
          <option value="sem">Semanal</option>
        
          <option value="men">Mensal</option>
          <option value="anl">Anual</option>
        

        </select>
        <p className="diverro" style={{textAlign:"left"}}>Valor da meta</p>
        <Input type="number" className="inplog" value={metavalue} style={{ padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px",fontSize:"18px",}}  Onchange={handleMetaChange} /><br />
        <Button text="Definir esta meta" id="mdbtncad4" style={{ backgroundColor:"#279301",color:"white", fontWeight:"bold",borderRadius:"10px",border:"0px solid white"}} func={()=>{
            meta[tempo]=metavalue

           Cookies.set("Metas",meta)

            setMetavalue("")

        }}></Button>
        <hr></hr>
        <p>Defina suas metas como padrão</p>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"20px",margin:"0px 10px"}}>
          <Button id="mdbtncad4" func={()=>{ 
                      if(tempo == 0){
                        meta[0]="10000"
                      }
                      else if(tempo == 1){
                        meta[1]="70000"
                      }
                      else if(tempo == 2){
                        meta[2]="300000"
                      }
                      else if(tempo == 3){
                        meta[3]="3600000"          

                      }
                      Cookies.set("Metas",meta)

          }

          }
          style={{backgroundColor:"#279301",color:"white", fontWeight:"bold",borderRadius:"10px",border:"0px solid white"}} text="Definir essa"> </Button>
          <Button func={()=>{
            meta[0]="10000"
            meta[1]="70000"
            meta[2]="300000"
            meta[3]="3600000"
            Cookies.set("Metas",meta)

          }} id="mdbtncad4" style={{ backgroundColor:"#279301",color:"white", fontWeight:"bold",borderRadius:"10px",border:"0px solid white"}}   text="Definir todas "> </Button>
        </div>
    </div>
          </div>
    </>
  )
}

export default Metas