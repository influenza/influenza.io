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
        navigate(`/equipe4`)

    }
    function handleEnviar2(){
      console.log("casemiro")
      navigate(`/entrarequipe`)

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

<div style={{display:"flex", flexDirection:"row", backgroundColor:"#f5ebe0", width:"92vw", height:"92vh", justifyContent:"center", textAlign:"center"}}>
<div style={{display:"flex",marginLeft:"-5.5vw",justifyContent:"center", flexDirection:"column", alignItems:"center", marginTop:"-5vh"}}>



  
  
    <div style={{ width:"65vw", display:"flex",flexDirection:"row", alignItems:"center",justifyContent:"space-between", textAlign:"center"}}>
          
      <p style={{fontSize:"40px"}}>Perfil da equipe </p>
  <Button type="button" text ="Redefinir dados" func={(()=>{
     

  })} style={{fontSize:"30px",width:"230px",marginRight:"-6vw",height:"65px"}}></Button>

      </div>
      <div style={{ width:"65vw", display:"flex",flexDirection:"row", justifyContent:"space-between", textAlign:"center"}}>
      <div style={{justifyContent:"left"}}>
      <div style={{justifyContent:"center",display:"flex"}}>
      <div style={{marginLeft:"20px",fontSize:"40px",backgroundImage:`url(${imageperfil})`,textAlign:"center", backgroundSize:"cover", backgroundPositionX:"center", backgroundPositionY:"center", backgroundColor:"#14B57A", width:"300px", height:"300px", borderRadius: "50%",justifyContent:"center",alignItems:"center", display:"flex"}}>

  {Cookies.get().NomeEqui2.split("")[0].toUpperCase()}

</div>

      </div>
      <p style={{fontSize:"30px", cursor:"pointer"}} onClick={()=>{
          setImageperfil("")
      }}>Remover</p>


      </div>
<div style={{fontSize:"30px", justifyContent:"space-around",flexDirection:"column",display:"flex",textAlign:"left ",alignItems:"center",marginRight:"-6vw"}}>
<div style={{display:"flex", flexDirection:"column"}}>

<span >Nome da equipe:</span>
<InputPer type={text} text={`${Cookies.get().NomeEqui}`}></InputPer>

</div>
<div style={{display:"flex", flexDirection:"column"}}>

<span >Plano da equipe:</span>
<InputPer style={{fontSize:"30px",backgroundColor:"#AAAAAA", padding:"10px", borderRadius:"20px",justifyContent:"start"}} type={text} text={`${Cookies.get().Plano}`}></InputPer>

</div>
<div style={{display:"flex", flexDirection:"column"}}>

<span >Membro fundador:</span>
<InputPer type={text} text={Cookies.get().Nome}></InputPer>
  </div>

  </div>

  </div>
  <div style={{ marginTop:"50px",marginLeft:"5.5vw", borderTop: "2px solid black ",  width:"92vw" }}></div>


  <div style={{ marginBottom:"30px",width:"65vw", display:"flex",flexDirection:"row", justifyContent:"space-between", textAlign:"left",marginTop:"35px"}}>
  <div style={{display:"flex", flexDirection:"column"}}>
<span style={{marginRight:"20px",justifyContent:"right",fontSize:"30px"}}>Numero de funcionarios:</span>

<InputPer type={text} text={Cookies.get().Numfunc}></InputPer>

  </div>

  <div style={{display:"flex",fontSize:"30px", flexDirection:"column", marginRight:"-6vw"}}>
<span style={{marginRight:"20px"}}>Area da industria:</span>
<InputPer type={text} text={Cookies.get().Area}></InputPer>

  </div >

  </div>
  <div style={{ marginBottom:"30px",width:"65vw", display:"flex",flexDirection:"row", justifyContent:"space-between", textAlign:"left",marginTop:"15px"}}>
  <div style={{display:"flex", flexDirection:"column"}}>
<span style={{marginRight:"20px",justifyContent:"right",fontSize:"30px"}}>Sede:</span>

<InputPer type={text} text={Cookies.get().Sede}></InputPer>

  </div>

  <div style={{display:"flex",fontSize:"30px", flexDirection:"column", marginRight:"-6vw"}}>
<span style={{marginRight:"20px"}}>Estado:</span>
<InputPer type={text} text={Cookies.get().Estado ? Cookies.get().Estado : Cookies.get().Estado==undefined? "Outro pais":"Outro pais" }></InputPer>

  </div >

  </div>


  <div style={{display:"flex",marginTop:"10px",flexDirection:"row",justifyContent:"space-around",marginBottom:"0px"}}>
  


</div>
</div>




      </div>
        </div>
        </>
    )
}