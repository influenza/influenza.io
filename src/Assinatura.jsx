import { Link } from "react-router-dom"
import { Button } from "./button"
import { Navigate, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from "axios"

function Assinatura(props) {
  let navigate=useNavigate()

const lista = props.listas
console.log(typeof(props.listas))
console.log(props.listas)
function handlePlano(){
  console.log(Cookies.get().Email)
  console.log(Cookies.get().Token)

  const headers = {
    headers: {
      "Authorization": `Bearer ${Cookies.get().Token}`
    }
  };
  const data = {
    "handle": Cookies.get().NomeEqui.toLowerCase(),
    "name": Cookies.get().NomeEqui,
    "description": "Amo o toby",
    "members": [
{
   'id': Cookies.get().ID, 
   'role': 'ADMINISTRATOR'
}
    ]
}

  console.log(headers)
  console.log(Cookies.get())
  axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/user/v1/findEmail/${Cookies.get().Email}`, headers)
    .then(res => {
      console.log(res)
      Cookies.set("ID",res.data.id)
      console.log(Cookies.get().NomeEqui)
      Cookies.set("NomeEqui2",[0])

      Cookies.set("NomeEqui2",Cookies.get().NomeEqui)

      axios.post("http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1",data , headers)
      .then(res=>{console.log(res)

      }
    )
    })
     .catch(error => {
  console.error(error);
});  


  Cookies.set("Plano", props.assinatura)
}
  
return(
<>
<div text={props.assinatura} id="Assinatura" onClick={handlePlano} style={{ opacity:"0.95", backgroundColor:"#fff", boxShadow:"4px 4px 4px 3px rgba(0, 0, 0, 0.2)", color:"black", borderRadius:"10px",}}>
<div>
<div id="mddivplano" style={{marginTop:"20px", fontWeight:"bold"}}>{props.assinatura} </div>
<div id="mddivpreco" ><span > <span style={{fontWeight:"bold"}}> {props.preco}</span>/mes</span></div>
{props.assinatura != "Gratis" && 
<div id="mddivlista" style={{fontWeight:"bold"}}>
<ul style={{listStyle:"none",}}>
<li >Plataforma Ecosynergy  </li>
<li >Gerenciamento de Equipe</li>
<li >Grafico de emissoes</li>
{props.listas.map((item, index) => (
  <li style={{marginTop:"10px"}} key={index}>{item}</li>
))}
</ul>

</div>
}
{props.assinatura == "Gratis" && 
<div style={{fontWeight:"bold",fontSize:"19px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
<ul style={{listStyle:"none", padding:"0px"}}>
<li id="txtGratis">Acesso total  </li>

</ul>

</div>
}
</div>


</div>
</>
)
}
export default Assinatura
