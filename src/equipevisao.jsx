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
      
      axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/user/v1/findEmail/${Cookies.get().Email}`, headers)
        .then(res => {
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
            {!Cookies.get().NomeEqui2 &&
            
            <div style={{ display:"flex",flexDirection:"row", width:"100vw"}}>

            <div style={{backgroundColor:"#F5F1ED", width:"100vw",height:"100vh", justifyContent:"center", textAlign:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                <p id="dequivistxt" style={{ fontWeight:"bold"}}>
                PARA PROSSEGUIR NA PLATAFORMA ECOSYNERGY É NECESSARIO CRIAR OU ENTRAR EM UMA EQUIPE
                </p>
              <div id="mdgapvis" style={{display:"flex",flexDirection:"row"}}>
              <button className="mdbtnequivis" onClick={handleEnviar} text={"Criar"}>Criar</button>
                <button  className="mdbtnequivis" onClick={handleEnviar2} text={"Entrar"} >Entrar</button>

              </div>
            </div>
        </div>
        
}

            
                    </div>
                    </>

    );
}
