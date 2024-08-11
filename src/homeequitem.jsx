import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { Input } from "./input";
import { Button } from "./button";
import { Link } from "react-router-dom";
import InputPer from "./inputper";
import { paises } from './paises';
import "./mdequipevisao1.css"
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from "./navbarlateral";
import "./404.css"
import Navbar2 from "./navbarlateral2";
import { Navbar4 } from "./Navbar4";
import { Navbar3 } from "./navbar3";
export function HomeTem(props){
    let navigate=useNavigate()
    const [imageperfil, setImageperfil] = useState(null);
    const [text ,settext] =useState("normal")
    const [nacionalidade, setNacionalidade] = useState(0)
    const [genero, setGenero] = useState(0)
    const [NomeEqui,SetNomeEqui]=useState(Cookies.get().NomeEqui2)
    const [handleEqui, SethandleEqui]=useState(Cookies.get().NomeEqui2.toLowerCase())
    const [Setor,SetSetor] = useState(Cookies.get().Area)

    function handleCon(e){
    if(genero && nacionalidade){
    Cookies.set("nacionalidade",nacionalidade)
    Cookies.set("genero",genero)
    console.log(Cookies.get().NomeEqui && Cookies.get().nacionalidade && Cookies.get().genero )
    console.log(Cookies.get().nacionalidade)
    }
    else{

    }
}
function handlePular(e){
    console.log(Cookies.get().genero)
    Cookies.set("nacionalidade","indefinido")
    Cookies.set("genero","indefinido")
    console.log(Cookies.get().genero)

    }
  
    function handleGenero(event) {
      console.log(event.target.value)
      setGenero(event.target.value)
    }
    function handleEnviar(){
        console.log("casemiro")
        navigate("/equipe4")

    }
    function handleEnviar2(){
      console.log("casemiro")
      navigate("/entrarequipe")

  }
    function handleChangeNacionalidade(event) {
        console.log(event.target.value)
        setNacionalidade(event.target.value)
      }
    const handleImageChange = (e) => {
    Cookies.set("NomeEqui",)

        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageperfil(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    console.log(Cookies.get())
    return(
        <>
        <Navbar3></Navbar3>
        <div id="mdequihomecon">
           <Navbar4></Navbar4>
           <div style={{display:"flex", flexDirection:"row", backgroundColor:"#f5ebe0", width:"92vw", height:"92vh",  textAlign:"center"}}>
            <div style={{display:"flex", justifyContent:"left"}}>
            <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", flexDirection:"column", width:"50vw"}}>
              <div style={{display:"flex",justifyContent:"left",gap:"20px"}}>
                <p style={{fontSize:"40px",fontWeight:"bold",marginTop:"20px",marginBottom:"20px"}}>
              Visão Geral da Equipe</p>
              <span style={{width:"200px"}}></span>
              </div>
              <div style={{justifyContent:"left"}}>
      <div style={{justifyContent:"center",display:"flex",gap:"100px"}}>
      <div style={{fontSize:"100px", fontWeight:"bold",backgroundImage:`url(${imageperfil})`,textAlign:"center", backgroundSize:"cover", backgroundPositionX:"center", backgroundPositionY:"center", backgroundColor:"#14B57A", width:"200px", height:"200px", borderRadius: "20%",justifyContent:"center",alignItems:"center", display:"flex"}}>
  {Cookies.get().NomeEqui2.split("")[0].toUpperCase()}
</div>
<div style={{display:"flex", justifyContent:"center",flexDirection:"column"}}>
  <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"20px"}}>
  <span style={{fontSize:"26px",fontWeight:"bold"}}>NOME DA EQUIPE</span>
  <input type="text" value={NomeEqui} style={{fontSize:"20px",color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA", textAlign:"center", width:"400px",height:"30px",marginBottom:"20px"}}/>

  </div>
  <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"20px"}}>
  <span style={{fontSize:"26px",fontWeight:"bold"}}>USERNAME DA EQUIPE</span>

<input type="text" value={handleEqui} style={{fontSize:"20px",color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA", textAlign:"center", width:"400px",height:"30px"}} />
  </div>
<div style={{listStyle:"none", width:"360px",fontSize:"16px", color:"#A6A6A6"}}>
  <ul>
    <li>
    Atenção com todos os dados inseridos nessa sessão, muda-los constantemente trará consequências.
    </li>
  </ul>
</div>
</div>
      </div>

      </div>
      <div style={{justifyContent:"left",display:"flex",flexDirection:"column"}}>
      <div style={{display:"flex",justifyContent:"left",gap:"20px"}}>

<span style={{fontSize:"32px",fontWeight:"bold"}}>
Descrição
</span>
<span style={{width:"400px"}}></span>

      </div>
      <div style={{width:"800px", height:"300px", backgroundColor:"white", borderRadius:"10px", marginTop:"40px"}}>

      </div>
      </div>
      <div style={{display:"flex",justifyContent:"left",gap:"20px"}}>
<span style={{width:"480px"}}></span>
        <button style={{width:"300px", backgroundColor:"#279301",borderRadius:"10px", height:"30px"}}>Adicionar</button>
        
      </div>
            </div>
            </div>
            <div style={{justifyContent:"space-around", display:"flex", width:"50vw", alignItems:"center",flexDirection:"column"}}>

            <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
            <span style={{fontSize:"26px",fontWeight:"bold"}}>INFORMAÇÕES GERAIS </span>

<input type="text" value={Setor} style={{fontSize:"20px",color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA",padding:"10px",  width:"400px",height:"30px"}} />
            
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <span style={{fontSize:"26px",fontWeight:"bold"}}>QUANTIDADE DE FUNCIONÁRIOS </span>

<input type="text" value={Setor} style={{fontSize:"20px",color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA",padding:"10px",   width:"400px",height:"30px"}} />
            
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <span style={{fontSize:"26px",fontWeight:"bold"}}>SEDE DA EMPRESA</span>

<input type="text" value={Setor} style={{fontSize:"20px",color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA", padding:"10px",  width:"400px",height:"30px"}} />
            
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <span style={{fontSize:"26px",fontWeight:"bold"}}>ESTADO</span>

<input type="text" value={Setor} style={{fontSize:"20px",color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA", padding:"10px", width:"400px",height:"30px"}} />
            
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <span style={{fontSize:"26px",fontWeight:"bold"}}>FUSO HORÁRIO</span>

<input type="text" value={Setor} style={{fontSize:"20px",color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA", padding:"10px",  width:"400px",height:"30px"}} />
            
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <span style={{fontSize:"26px",fontWeight:"bold"}}>E-MAIL EMPRESARIAL</span>

<input type="text" value={Setor} style={{fontSize:"20px",color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA",padding:"10px",   width:"400px",height:"30px"}} />
            
            </div>
            </div>
          </div>
        </div>
        </>
    )
}