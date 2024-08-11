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
      function Dadosteste(data) {
          // Inicializar estados
          const dados = [];
          const porcentagem = [];
          const final = [];
          const cores = [];  // Supondo que você tenha uma lista de cores
  
          // Gerar dados aleatórios
          for (let i = 0; i < data; i++) {
              dados.push(Math.floor(Math.random() * (180000 - 80000 + 1)) + 100000);
          }
  
          // Calcular total
          const total = dados.reduce((accumulator, value) => accumulator + value, 0);
  
          // Calcular porcentagens
          dados.forEach(res => porcentagem.push(`${((res / total) * 100).toFixed(2)}%`));
  
          // Calcular mínimo, máximo, média e variância
          const minimo = Math.min(...dados);
          const maximo = Math.max(...dados);
          const media = total / dados.length;
          const somaQuadrados = dados.reduce((a, b) => a + Math.pow(b - media, 2), 0);
          const variancia = somaQuadrados / (dados.length - 1);
  
          for (let index = 0; index < dados.length; index++) {
              final.push([index, dados[index], cores[index] || '', porcentagem[index]]);
          }
  
          return {
              final,
              total,
              minimo,
              maximo,
              media: media.toFixed(2),
              variancia: variancia.toFixed(2)
          };
      }
  
      const mes = { mes: [] };
      for (let index = 0; index < 12; index++) {
          mes.mes.push({[`mes${12-index}`]: Dadosteste(31).final });
      }
  
      console.log(mes);
  }
  

  return (
    <>
      <button onClick={handleEnviar}>Enviar</button>
    </>
  )
}

export default Equipe2
