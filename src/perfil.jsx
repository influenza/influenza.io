import Cookies from "js-cookie"
import "./mdhomeequi.css"
import axios from "axios";
import { useEffect, useState } from "react"
import { Input } from "./input";
import { Button } from "./button";
import InputPer from "./inputper";
import { Link } from "react-router-dom";
import Navbar from "./navbarlateral";
import Navbar2 from "./navbarlateral2";
import { Navbar3 } from "./navbar3";
import { Navbar4 } from "./Navbar4";
import { useNavigate } from "react-router-dom";
let Nome = Cookies.get().NomeCom
let Email = Cookies.get().Email
let nacionalidade = Cookies.get().Nacionalidade
let genero = Cookies.get().Genero


export function Perfil(props){
    let navigate=useNavigate()
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(()=>{
      console.log(Cookies.get().Nome)
  
      if(!Cookies.get().NomeEqui2){
        console.log(Cookies.get().Nome)
        navigate("/equipevisao")
      }
    },[])
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Adiciona o listener de resize
    useEffect(() => {
      window.addEventListener("resize", handleResize);
  
      // Remove o listener quando o componente é desmontado
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    const [imageperfil, setImageperfil] = useState(null);
    const [text ,settext] =useState("normal")
    const [nacionalidade, setNacionalidade] = useState(0)
    const [genero, setGenero] = useState(0)
    const [NomeEqui,SetNomeEqui]=useState(Cookies.get().NomeEqui2)
    const [handleEqui, SethandleEqui]=useState(Cookies.get().NomeEqui2?Cookies.get().NomeEqui2.toLowerCase():"")
    const [Setor,SetSetor] = useState()
    const [Func,SetFunc] = useState()
    const [fusohorario, SetfusoHorario] = useState()
    const headers = {
      headers: {
          "Authorization": `Bearer ${Cookies.get().Token}`
      }
  };
    axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/user/${Cookies.get().ID}`, headers)
    .then((res)=>{
      SetSetor(res.data[0].activity.sector)
      SetFunc(res.data[0].members.length)
      SetfusoHorario(res.data[0].timeZone)
    })
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
           <div id="mdEquiVis2Conger" style={{display:"flex", flexDirection:"row", backgroundColor:"#f5ebe0",  textAlign:"center"}}>
            <div style={{display:"flex", justifyContent:"left"}}>
            <div id="mdconEquiVIS2" style={{display:"flex", justifyContent:"space-around", alignItems:"center", flexDirection:"column", }}>
              <div id="mdcondiv1EquiVIS2" style={{display:"flex",justifyContent:"left"}}>
                <p id="mdconP1EquiVIS2" style={{fontWeight:"bold"}}>
              Visão Geral da Equipe</p>
              <span id="Gap200px"></span>
              </div>
              <div style={{justifyContent:"left"}}>
      <div id="mdcondivFOTOEquiVIS2" style={{justifyContent:"center",display:"flex"}}>
      <div id="mdcondivdivFOTOEquiVIS2"style={{ fontWeight:"bold",backgroundImage:`url(${imageperfil})`,textAlign:"center", backgroundSize:"cover", backgroundPositionX:"center", backgroundPositionY:"center", backgroundColor:"#14B57A",   borderRadius: "20%",justifyContent:"center",alignItems:"center", display:"flex"}}>
  {Cookies.get().NomeEqui2? Cookies.get().NomeEqui2.split("")[0].toUpperCase():""}
</div>

      </div>

      </div>
      <div id="mddivequiDesc" style={{justifyContent:"left",display:"flex",flexDirection:"column",}}>
      <div style={{display:"flex",justifyContent:"left",gap:"20px"}}>
      <div style={{display:"flex", justifyContent:"center",flexDirection:"column"}}>
  <div id="mdcondiv1EquiVIS2" style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center",}}>
  <span id="mdspanNomeEquiEQUIVIS" style={{fontWeight:"bold"}}>NOME DA EQUIPE</span>
  <input id="mdinputNomeEqui" type="text" value={NomeEqui} style={{color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA", textAlign:"center",}}/>

  </div>
  <div id="mdcondiv1EquiVIS2" style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
  <span id="mdspanNomeEquiEQUIVIS" style={{fontWeight:"bold"}}>USERNAME DA EQUIPE</span>

<input id="mdinputNomeEqui" type="text" value={handleEqui} style={{color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA", textAlign:"center",}}/>
  </div>
<div id="txtAvisoEquiVis" style={{listStyle:"none",  color:"#A6A6A6"}}>

</div>
</div>
<span id="span400pxEquivis" ></span>

      </div>


      </div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
<span id="span480pxEquivis" ></span>
        
      </div>
            </div>
            </div>
            <div style={{justifyContent:"space-around", display:"flex", width:"50vw", alignItems:"center",flexDirection:"column"}}>
            <div id="mddivEquiVIS2" style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
            <span id="mdspanNomeEquiEQUIVIS" style={{fontWeight:"bold"}}>SETOR </span>

<input type="text" value={Setor} id="inputMDEquiVIS" style={{color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA",}} />
            
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px", justifyContent:"center"}}>
            <span id="mdspanNomeEquiEQUIVIS" style={{fontWeight:"bold"}}>FUNCIONÁRIOS </span>

<input type="text" value={Func} id="inputMDEquiVIS"  style={{color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA",}} />
            
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px", justifyContent:"center"}}>
            <span id="mdspanNomeEquiEQUIVIS" style={{fontWeight:"bold"}}>SEDE </span>

<input type="text" value={Setor} id="inputMDEquiVIS" style={{color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA",}} />
            
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px", justifyContent:"center"}}>
            <span id="mdspanNomeEquiEQUIVIS" style={{fontWeight:"bold"}}>ESTADO</span>

<input type="text" value={Setor} id="inputMDEquiVIS" style={{color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA",}} />
            
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px", justifyContent:"center"}}>
            <span id="mdspanNomeEquiEQUIVIS" style={{fontWeight:"bold"}}>FUSO HORÁRIO</span>

<input type="text" value={fusohorario} id="inputMDEquiVIS" style={{color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA",}} />
            
            </div>

            </div>

            </div>
          </div>
        </div>
        </>
    )
}