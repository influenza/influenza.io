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
import axios from "axios";
export function EquipeVisao(props){
  const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
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
    let navigate=useNavigate()
    const [imageperfil, setImageperfil] = useState(null);
    const [text ,settext] =useState("normal")
    const [nacionalidade, setNacionalidade] = useState(0)
    const [genero, setGenero] = useState(0)
    const [EquipSelect, setEquipSelect] = useState(0)


  

    function handleEnviar(){
        console.log("casemiro")
        navigate(`/equipe4`)

    }
    function handleEnviar2(){
      console.log("casemiro")
      navigate(`/entrarequipe`)

  }
    useEffect(()=>{
      
      const headers = {
        headers: {
          "Authorization": `Bearer ${Cookies.get().Token}`
        }
      };
      axios.get("http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1",headers).then((res)=>{console.log(res)})
      axios.get("http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/handle/ecosynergyofc", headers).then((res)=>{console.log(res)})

      axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/user/v1/email/${Cookies.get().Email}`, headers)
        .then(res => {
          console.log(res)
          console.log(res.data.id)
          Cookies.set("ID", res.data.id)
        })


        
    },[])
    return(
      <>
        {Cookies.get().NomeEqui2 &&
                     <Navbar3></Navbar3>
        }
        <div id="mdequihomecon">

           {Cookies.get().NomeEqui2  &&
          <>
                          <Navbar4></Navbar4>
 
<div id="mdequihomegeral">
    <div id="mdhomeequigeraldiv1">
    <span id="mdtxt2homeequi">Bom dia {Cookies.get().NomeCom.split(" ")[0]}</span>
    <div id="mdhomeequigeraldiv11"></div>
    <div id="mdhomeequigeraldiv12"></div>
    </div>
    <div id="mdhomeequigeraldiv2"></div>
    
</div>

          </>

}
{!Cookies.get().Nome &&
            
            <div style={{ display:"flex",flexDirection:"row", width:"100vw"}}>

            <div style={{backgroundColor:"#F5F1ED", width:"100vw",height:"100vh", justifyContent:"center", textAlign:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                <p id="mdtxt1cad4" style={{ fontWeight:"bold"}}>
                PARA PROSSEGUIR NA PLATAFORMA ECOSYNERGY É NECESSARIO CRIAR OU ENTRAR EM UMA CONTA
                </p>
              <div id="mdgapvis" style={{display:"flex",flexDirection:"row"}}>
              <button id="mdbtncad4" style={{borderRadius:"10px", backgroundColor:"#14B57A", border:'0px solid white', color:"white", fontSize:"20px",fontWeight:"bold"}} onClick={()=>navigate("/cadastro2")} text={"Criar"}>Criar</button>
              <button  id="mdbtncad4" style={{borderRadius:"10px", backgroundColor:"#14B57A", border:'0px solid white', color:"white", fontSize:"20px",fontWeight:"bold"}} onClick={()=>navigate("/login")} text={"Entrar"} >Entrar</button>
              </div>
            </div>
        </div>
        
}
            {!Cookies.get().NomeEqui2  && Cookies.get().Email &&
            
            <div style={{ display:"flex",flexDirection:"row", width:"100vw"}}>

            <div style={{backgroundColor:"#F5F1ED", width:"100vw",height:"100vh", justifyContent:"center", textAlign:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                <p id="mdtxt1cad4" style={{ fontWeight:"bold"}}>
                PARA PROSSEGUIR NA PLATAFORMA ECOSYNERGY É NECESSARIO CRIAR OU ENTRAR EM UMA EQUIPE
                </p>
              <div id="mdgapvis" style={{display:"flex",flexDirection:"row"}}>
              <button id="mdbtncad4" style={{borderRadius:"10px", backgroundColor:"#14B57A", border:'0px solid white', color:"white", fontSize:"20px",fontWeight:"bold"}} onClick={handleEnviar} text={"Criar"}>Criar</button>
              <button  id="mdbtncad4" style={{borderRadius:"10px", backgroundColor:"#14B57A", border:'0px solid white', color:"white", fontSize:"20px",fontWeight:"bold"}} onClick={handleEnviar2} text={"Entrar"} >Entrar</button>


              </div>
            </div>
        </div>
        
}

                    </div>
                      {width<500 && 
                                          <div style={{position:"fixed", width:"100vw", height:"4vh",backgroundColor:"white", justifyContent:"center",alignItems:"center",textAlign:"center",display:"flex",marginTop:"-4vh"}}>Instale nosso aplicativo Android  <a href="/apk/Ecosynergy.apk" download><button style={{marginLeft:"10px", borderRadius:"10px"}}><svg width="15px" height="15px" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M16.0171 2C16.0171 1.0335 15.2336 0.25 14.2671 0.25C13.3006 0.25 12.5171 1.0335 12.5171 2H16.0171ZM12.5171 2V17.84H16.0171V2H12.5171Z" fill="black"/>
                                          <path d="M15.1317 20.1604C14.7377 20.5567 14.0962 20.5543 13.7067 20.1551L6.768 13.0436C6.14896 12.4091 6.60266 11.3413 7.48987 11.3446L21.4451 11.3969C22.3323 11.4002 22.7743 12.4714 22.1483 13.1012L15.1317 20.1604Z" fill="black"/>
                                          <path d="M2.5332 24H24.9332" stroke="black" stroke-width="3.5" stroke-linecap="round"/>
                                          <path d="M0.5 24C0.5 24.8284 1.17157 25.5 2 25.5C2.82843 25.5 3.5 24.8284 3.5 24H0.5ZM0.5 17.84L0.5 24H3.5L3.5 17.84H0.5Z" fill="black"/>
                                          <path d="M24.5 24C24.5 24.8284 25.1716 25.5 26 25.5C26.8284 25.5 27.5 24.8284 27.5 24H24.5ZM24.5 17.84V24H27.5V17.84H24.5Z" fill="black"/>
                                          </svg>
                                          </button></a></div>

                      }
                    </>

    );
}
