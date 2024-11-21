import { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

function Equipe2() {
    const [cores, setCores] = useState(['green', 'gray', 'plum', 'yellow','blue','lime','olive','red','silver',
      'pink','salmon','orange','gold','aqua','white','coral','black','brown','darkgreen','navy','slateblue',
      'teal','fuchsia','maroon','burlywood','peru','firebrick','floralwhite','aquamarine','turquoise','violet'])
    const [dados,setDados] = useState([])
    const [final,setFinal] = useState([])
    const [final2,setFinal2] = useState([])
    const [maximo,setMaximo] = useState("")
    const [minimo,setMinimo] = useState("")
    const [variancia,setVariancia] = useState("")
    const [media,setMedia] = useState("")

    const [porcentagem,setPorcentagem] = useState([])

    const [total,setTotal] = useState()

    function handleEnviar() {
      const headers = {
        headers: {
          "Authorization": `Bearer ${Cookies.get().Token}`
        }
      };
      axios.delete(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/user/v1/128`,headers).then((res)=>{
        console.log(res)
      })
      axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/user/v1`, headers).then((res)=>{
        console.log(res)
      })
      axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1`,headers).then((res)=>{
        console.log(res)
      })
      }
  return (
    <>
      <button onClick={handleEnviar}>Enviar</button>
    </>
  )
}

export default Equipe2
