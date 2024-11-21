

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
  const [metaDI, setmetaDI]= useState(0)
  const [metavalue, setMetavalue] = useState(0);
  const [Metas, setMetas]= useState([])

  const [metaMes, setmetaMes]= useState(0)
  const [metaAnual, setmetaAnual]= useState(0)

  let navigate = useNavigate()
  useEffect(() => {
    const headers = {
      headers: {
        "Authorization": `Bearer ${Cookies.get().Token}`
      }
    };
    console.log(Cookies.get())
axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/id/${Cookies.get().NomeEquiID}`,headers).then((res)=>{
setmetaDI(res.data.dailyGoal)
setmetaMes(res.data.monthlyGoal)
setmetaAnual(res.data.annualGoal)
if(metavalue==0){
  setMetavalue(res.data.dailyGoal)

}
console.log(Metas)
})
  }, [tempo, metavalue,Metas]);

  function handleMetaChange(e) {
    setMetavalue(e)
  }

     
  return (
    <>

    <div style={{display:"flex", flexDirection:"column", backgroundImage: `url('${fundo}')`, width:"100vw", height:"100vh", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionX:"center",backgroundPositionY:"", alignItems:"center",textAlign:"center"}}>
    <div id='imgmargin' style={{display:"flex",flexDirection:"row", width:"100vw",height:"15vh",alignItems:"center",}}>
<div id="imgs" >  
<img src={`${logo}`} className='img'alt="" />
  <img src={`${letraverde}`} className='img'   alt="" /></div>

    </div>
    <div id="mdcon" style={{backgroundColor:"white", borderRadius:"17px",boxShadow:"4px 4px 4px 3px rgba(0, 0, 0, 0.2)",marginTop:"10vh"}}>
      <p id="mdlogP1" style={{ fontWeight:"bolder"}}>Defina suas metas de gases personalizadas</p>
      <p className="diverro" style={{textAlign:"left"}}>Tipo da meta</p>
    <select id="mdinp3cad4"
          name="metaPorTem"
          onChange={(e) => {
            if (e.target.value === "dia") {
              setMetavalue(metaDI)
              setTempo(0)
            }  else if (e.target.value === "men") {
              setMetavalue(metaMes)
              setTempo(1)

            } else {
              setMetavalue(metaAnual)
              setTempo(2)

            }
          }}
          style={{ padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px",fontSize:"18px",  }}
        >
          <option value="dia">Diaria</option>
          
        
          <option value="men">Mensal</option>
          <option value="anl">Anual</option>
        

        </select>
        <p className="diverro" style={{textAlign:"left"}}>Valor da meta</p>
        <Input type="number" className="inplog" value={metavalue} style={{ padding:"0px 10px",border:"2px solid #aaa",borderRadius:"16px",fontSize:"18px",}}  Onchange={handleMetaChange} /><br />
        <Button text="Definir esta meta" id="mdbtncad4" style={{ backgroundColor:"#279301",color:"white", fontWeight:"bold",borderRadius:"10px",border:"0px solid white"}} func={(e)=>{

if(tempo == 0){
  console.log()
  setmetaDI(`${metavalue}`)
  const headers = {
    headers: {
      "Authorization": `Bearer ${Cookies.get().Token}`
    }
  };
  let data ={
   'dailyGoal':metavalue, 
  }
  axios.put(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/${Cookies.get().NomeEquiID}`,data,headers).then((res)=>{console.log(res)})
  console.log(data)
  Metas[0] = metavalue
}

else if(tempo == 1){
  const headers = {
    headers: {
      "Authorization": `Bearer ${Cookies.get().Token}`
    }
  };
  let data ={
   'monthlyGoal': metavalue, 
  }
  axios.put(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/${Cookies.get().NomeEquiID}`,data,headers).then((res)=>{console.log(res)})
  setmetaMes("300000")
  Metas[1] = metavalue

}
else if(tempo == 2){
  setmetaAnual("3600000")          
  const headers = {
    headers: {
      "Authorization": `Bearer ${Cookies.get().Token}`
    }
  };
  let data ={
   'annualGoal' :metavalue,
  }
  axios.put(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/${Cookies.get().NomeEquiID}`,data,headers).then((res)=>{console.log(res)})
  console.log(data)
  Metas[2] = metavalue

}
console.log(Metas)

                    

          


        }}></Button>
        <hr></hr>
        <p>Defina suas metas como padrão</p>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:"20px",margin:"0px 10px"}}>
          <Button id="mdbtncad4" func={()=>{ 
                      if(tempo == 0){
                        setmetaDI("10000")
                        const headers = {
                          headers: {
                            "Authorization": `Bearer ${Cookies.get().Token}`
                          }
                        };
                        let data ={
                         'dailyGoal':10000.00, 
                        }
                        Metas[0] = 10000

                        console.log(data)
                        axios.put(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/${Cookies.get().NomeEquiID}`,data,headers).then((res)=>{console.log(res)})
                      }
                    
                      else if(tempo == 1){
                        const headers = {
                          headers: {
                            "Authorization": `Bearer ${Cookies.get().Token}`
                          }
                        };
                        let data ={
                         'monthlyGoal': 300000.00, 
                        }
                        Metas[1] = 300000

                        console.log(data)

                        axios.put(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/${Cookies.get().NomeEquiID}`,data,headers).then((res)=>{console.log(res)})
                        setmetaMes("300000")
                      }
                      else if(tempo == 2){
                        setmetaAnual("3600000")          
                        const headers = {
                          headers: {
                            "Authorization": `Bearer ${Cookies.get().Token}`
                          }
                        };
                        let data ={
                         'annualGoal' :3600000,
                        }
                        console.log(data)
                        Metas[2] = 3600000

                        axios.put(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/${Cookies.get().NomeEquiID}`,data,headers).then((res)=>{console.log(res)})
                      }

          }

          }
          style={{backgroundColor:"#279301",color:"white", fontWeight:"bold",borderRadius:"10px",border:"0px solid white"}} text="Definir essa"> </Button>
          <Button func={()=>{
                       const headers = {
                        headers: {
                          "Authorization": `Bearer ${Cookies.get().Token}`
                        }
                      };
                      let data ={
                       'dailyGoal':10000.00, 
                       'monthlyGoal': 300000.00, 
                       'annualGoal' :3600000,
                      }
                      axios.put(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/${Cookies.get().NomeEquiID}`,data,headers).then((res)=>{console.log(res)})
           setmetaDI("10000")
           setmetaMes("300000")
            setmetaAnual("3600000")
            Metas[0] = 10000
            Metas[1] = 300000
            Metas[2] = 3600000
          }} id="mdbtncad4" style={{ backgroundColor:"#279301",color:"white", fontWeight:"bold",borderRadius:"10px",border:"0px solid white"}}   text="Definir todas "> </Button>
        </div>
    </div>
          </div>
    </>
  )
}

export default Metas