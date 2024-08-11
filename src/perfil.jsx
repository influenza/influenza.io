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
export function Perfil(props){
    useEffect(()=>{
        axios.get()
    },[])
    const [imageperfil, setImageperfil] = useState(null);
    const [text ,settext] =useState("normal")
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageperfil(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return(
        <>
<Navbar3></Navbar3>


<div style={{display:"flex", flexDirection:"row", }}>
<Navbar4 es={0}></Navbar4>
<div style={{display:"flex", flexDirection:"row", backgroundColor:"#f5ebe0", width:"92vw", height:"92vh", justifyContent:"center", textAlign:"center"}}>
<div style={{display:"flex",marginLeft:"-5.5vw",justifyContent:"center", flexDirection:"column", alignItems:"center", marginTop:"-5vh"}}>





<div style={{ width:"65vw", display:"flex",flexDirection:"row", justifyContent:"space-between", textAlign:"center"}}>

<p style={{fontSize:"40px"}}>Perfil </p>
</div>
<div style={{ width:"65vw", display:"flex",flexDirection:"row", justifyContent:"space-between", textAlign:"center"}}>
<div style={{justifyContent:"left"}}>
<div style={{justifyContent:"center",display:"flex"}}>
<div style={{marginLeft:"20px",fontSize:"40px",backgroundImage:`url(${imageperfil})`,textAlign:"center", backgroundSize:"cover", backgroundPositionX:"center", backgroundPositionY:"center", backgroundColor:"#14B57A", width:"300px", height:"300px", borderRadius: "50%",justifyContent:"center",alignItems:"center", display:"flex"}}>

{Cookies.get().Nome.split("")[0].toUpperCase()}

</div>

</div>
<p style={{fontSize:"30px", cursor:"pointer"}} onClick={()=>{
setImageperfil("")
}}>Remover</p>


</div>
<div style={{fontSize:"30px", justifyContent:"space-between",flexDirection:"column",display:"flex",textAlign:"left ",alignItems:"center",marginRight:"-6vw"}}>
<div style={{display:"flex", flexDirection:"column"}}>

<span >Nome:</span>
<InputPer type={text} text={`${Cookies.get().Nome}`}></InputPer>

</div>
<div style={{display:"flex", flexDirection:"column"}}>

<span >Email:</span>
<InputPer style={{fontSize:"30px",backgroundColor:"#AAAAAA", padding:"10px", borderRadius:"20px",justifyContent:"start"}} type={text} text={`${Cookies.get().Email}`}></InputPer>

</div>
<div style={{display:"flex", flexDirection:"column"}}>

<span >Nome da Equipe</span>
<InputPer type={text} text={Cookies.get().NomeEqui}></InputPer>
</div>

</div>

</div>
<div style={{marginLeft:"5.5vw", marginTop:"50px", borderTop: "2px solid black ",  width:"92vw" }}></div>


<div style={{ marginBottom:"30px",width:"65vw", display:"flex",flexDirection:"row", justifyContent:"space-between", textAlign:"left",marginTop:"35px"}}>
<div style={{display:"flex", flexDirection:"column"}}>
<span style={{marginRight:"20px",justifyContent:"right",fontSize:"30px"}}>Nacionalidade:</span>

<InputPer type={text} text={Cookies.get().nacionalidade}></InputPer>

</div>

<div style={{display:"flex",fontSize:"30px", flexDirection:"column", marginRight:"-6vw"}}>
<span style={{marginRight:"20px"}}>Genero</span>
<InputPer type={text} text={Cookies.get().genero}></InputPer>

</div >

</div>
<div style={{ marginBottom:"30px",width:"65vw", display:"flex",flexDirection:"row", justifyContent:"space-between", textAlign:"left",marginTop:"15px"}}>
<div style={{display:"flex", flexDirection:"column"}}>
<span style={{marginRight:"20px",justifyContent:"right",fontSize:"30px"}}>Cargos:</span>

<InputPer type={text} text={Cookies.get().Sede}></InputPer>

</div>

<div style={{display:"flex",fontSize:"30px", flexDirection:"column", marginRight:"-6vw"}}>
<span style={{marginRight:"20px"}}>Estado:</span>
<InputPer type={text} text={Cookies.get().Estado ? Cookies.get().Estado : Cookies.get().Estado==undefined? "Outro pais":"Outro pais" }></InputPer>

</div >

</div>


<div style={{display:"flex",marginTop:"10px",flexDirection:"row",justifyContent:"space-between",marginBottom:"0px"}}>



</div>
</div>




</div>
</div>


</>
    );
}