import React, { useEffect, useState, useRef } from "react";
import "./tabela.css";

import Mapa from "./mapa.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { jsondata } from "./datajson";
import Cookies from 'js-cookie';
import { Button } from "./button";
import Metas from "./metas";
import { Chart, registerables } from 'chart.js';
import Navbar from "./navbarlateral";
import Navbar2 from "./navbarlateral2";
import annotationPlugin from 'chartjs-plugin-annotation';
import { Navbar4 } from "./Navbar4";
import { Navbar3 } from "./navbar3";
import { DataDash } from "./dadostestedashboard";

export function Dashboard(props) {
  const [temp, Settemp] = useState("Diaria");
  const [array, Setarray] = useState();
  const [arrayan, SetarrayAn] = useState();
  const d = new Date();
  const [total, Settotal] = useState();
  const [Media, SetMedia] = useState();
  const [Variancia, SetVariancia] = useState();
  const [Minimo, SetMinimo] = useState();
  const [Maximo, SetMaximo] = useState();
  const [MediaArray, SetMediaArray] = useState();
  

  const [data, setData] = useState(null);
  const [grafico, setGrafico] = useState("Barra");
  const [elemento, setelemento] = useState(<img style={{width:"500px",height:"300px"}} src={Diabpath}/>);
  const [dataAn, setDatan] = useState(null);
  const [ante, setAnte] = useState(false);
  const [Metrica, setMetrica] = useState("Media");
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);
  const chartRef3 = useRef(null);
  const chartRef4 = useRef(null);
  const chartRef5 = useRef(null);


  const [chartInstance, setchartinstnse] = useState("")
  const [chartInstance2, setchartinstnse2] = useState("")
  const [chartInstance3, setchartinstnse3] = useState("")

  const [result, setResult] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");
  const [result5, setResult5] = useState("");
  const [result5index, setResult5index] = useState(11)
  const [result5indexcon, setResult5con] = useState(1)
  let responsejs


  const [dictemp, setDicttemp] = useState({"Diaria":0,"Semanal":1,"Mensal":2,"Anual":3});
  const [dictempTi, setDicttempTI] = useState({0:"Diario",1:"Semanal",2:"Mensal",3:"Anual"});

  const [dictemp2, setDicttemp2] = useState({"Diaria":"Dia","Semanal":"Semana","Mensal":"Mes","Anual":"Ano"});
  Chart.register(...registerables);

  console.log();
  
  function metrica(e){
    setMetrica(e.target.value);
    console.log(Variancia)
  }
  
  let horas = d.getHours();
  let dia = d.getDate();
  let mes = d.getMonth() + 1;
  let year = d.getFullYear(); 
  let minutos = d.getMinutes();
  
  function tempo(e) {
    Settemp(e.target.value);
  }

  const fetchData = async () => {
    const headers = {
      headers: {
        "Authorization": `Bearer ${Cookies.get().Token}`
      }
    };
    try {
      responsejs = DataDash()
      const response = await axios.get("http://127.0.0.1:5000/dashboard")
      const responsep = axios.get("http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq7Reading/v1?page=1&direction=asc", headers).then(res=>console.log(res))
      console.log(responsep)
      const response2 = {

        message: "[[1, 150253, '3.33%', 'green'], [2, 150323, '3.33%', 'gray'], [3, 144858, '3.21%', 'plum'], [4, 141937, '3.14%', 'yellow'], [5, 147096, '3.26%', 'blue'], [6, 140694, '3.11%', 'lime'], [7, 137715, '3.05%', 'olive'], [8, 149223, '3.3%', 'red'], [9, 154141, '3.41%', 'silver'], [10, 149486, '3.31%', 'pink'], [11, 144098, '3.19%', 'salmon'], [12, 152530, '3.38%', 'orange'], [13, 151398, '3.35%', 'gold'], [14, 139329, '3.08%', 'aqua'], [15, 144944, '3.21%', 'white'], [16, 140781, '3.12%', 'coral'], [17, 151324, '3.35%', 'black'], [18, 135841, '3.01%', 'brown'], [19, 141366, '3.13%', 'darkgreen'], [20, 144622, '3.2%', 'navy'], [21, 149616, '3.31%', 'slateblue'], [22, 147674, '3.27%', 'teal'], [23, 148886, '3.3%', 'fuchsia'], [24, 139751, '3.09%', 'maroon'], [25, 136999, '3.03%', 'burlywood'], [26, 146931, '3.25%', 'peru'], [27, 141170, '3.13%', 'firebrick'], [28, 144996, '3.21%', 'floralwhite'], [29, 136383, '3.02%', 'aquamarine'], [30, 157348, '3.48%', 'turquoise'], [31, 155162, '3.44%', 'violet']]]",
        total: "4516875"
      }
      const response3 = {
        message: "[[1, 143104, '3.23%', 'green'], [2, 146146, '3.29%', 'gray'], [3, 135729, '3.06%', 'plum'], [4, 138804, '3.13%', 'yellow'], [5, 140694, '3.17%', 'blue'], [6, 139150, '3.14%', 'lime'], [7, 138325, '3.12%', 'olive'], [8, 144738, '3.26%', 'red'], [9, 143423, '3.23%', 'silver'], [10, 146036, '3.29%', 'pink'], [11, 145467, '3.28%', 'salmon'], [12, 142173, '3.21%', 'orange'], [13, 138094, '3.11%', 'gold'], [14, 145500, '3.28%', 'aqua'], [15, 140849, '3.18%', 'white'], [16, 138092, '3.11%', 'coral'], [17, 147779, '3.33%', 'black'], [18, 153218, '3.45%', 'brown'], [19, 146574, '3.3%', 'darkgreen'], [20, 148422, '3.35%', 'navy'], [21, 137647, '3.1%', 'slateblue'], [22, 147800, '3.33%', 'teal'], [23, 144934, '3.27%', 'fuchsia'], [24, 144417, '3.26%', 'maroon'], [25, 141801, '3.2%', 'burlywood'], [26, 152910, '3.45%', 'peru'], [27, 138720, '3.13%', 'firebrick'], [28, 134759, '3.04%', 'floralwhite'], [29, 142555, '3.21%', 'aquamarine'], [30, 142222, '3.21%', 'turquoise'], [31, 145533, '3.28%', 'violet']]]",
       total: "4435615"     
      }
      const stringData = response.data.message.replaceAll("]]]", "]]").replace(/'/g, '"');
      const stringData2 = response2.message.replaceAll("]]]", "]]").replace(/'/g, '"');
      const stringData3 = response3.message.replaceAll("]]]", "]]").replace(/'/g, '"');
      const stringData4 = response.data.mediaarray.replaceAll("]]]", "]]").replace(/'/g, '"');
      const stringData5 = response.data.mes.replaceAll("]]]", "]]").replace(/'/g, '"');
      const parsedData5 = JSON.parse(stringData5);
      console.log(parsedData5)
      const parsedData = JSON.parse(stringData);
      const parsedData2 = JSON.parse(stringData2);
      const parsedData3 = JSON.parse(stringData3);
      const parsedData4 = JSON.parse(stringData4);

      if(result==""){
        console.log(parsedData)
        console.log(responsejs.data )
        setResult(parsedData);
      }
      if(result2==""){
        setResult2(parsedData2);
      }
      if(result3==""){
        setResult3(parsedData3);
      }
      if(result5==""){
        setResult5(parsedData5)
      }
      Settotal(responsejs.data.total);
      SetVariancia(responsejs.data.variancia)
      SetMinimo(responsejs.data.minimo)
      SetMaximo(responsejs.data.maximo)
      SetMedia(responsejs.data.media)
      SetMediaArray(parsedData4)
      let data ={0:result5[0].Mes0[0].map(item => item[1]),1:result5[1].Mes1[0].map(item => item[1]),2:result5[2].Mes2[0].map(item => item[1]),3:result5[3].Mes3[0].map(item => item[1]),4:result5[4].Mes4[0].map(item => item[1]),5:result5[5].Mes5[0].map(item => item[1]),6:result5[6].Mes6[0].map(item => item[1]),7:result5[7].Mes7[0].map(item => item[1]),8:result5[8].Mes8[0].map(item => item[1]),9:result5[9].Mes9[0].map(item => item[1]),10:result5[10].Mes10[0].map(item => item[1]),11:result5[11].Mes11[0].map(item => item[1])}
      console.log(data)
      console.log(responsejs.mes[0])
      let data2 ={0:responsejs.mes[0].Mes0.map(item => item[1]),1:responsejs.mes[1].Mes1.map(item => item[1]),2:responsejs.mes[2].Mes2.map(item => item[1]),3:responsejs.mes[3].Mes3.map(item => item[1]),4:responsejs.mes[4].Mes4.map(item => item[1]),5:responsejs.mes[5].Mes5.map(item => item[1]),6:responsejs.mes[6].Mes6.map(item => item[1]),7:responsejs.mes[7].Mes7.map(item => item[1]),8:responsejs.mes[8].Mes8.map(item => item[1]),9:responsejs.mes[9].Mes9.map(item => item[1]),10:responsejs.mes[10].Mes10.map(item => item[1]),11:responsejs.mes[11].Mes11.map(item => item[1])}
      console.log(data2)
      let data1 = response.data.message;
      if (data1 !== null) {
        let newData = data1.replaceAll("[", "").replaceAll("'", "").replaceAll("],", ',').replaceAll("]]]", "");
        if (!ante) {
          setData(newData);
          Setarray(newData.split(", "));
        } else {
          setDatan(newData);
          SetarrayAn(newData.split(", "));
        }
      }
    } catch (error) {
      console.error("Erro ao obter dados do servidor:", error);
    }
  };
  
  useEffect(() => {
    const setupChart = () => {
      if (!result.length) return;

      const ctx = chartRef.current;
      if (chartInstance) {
        chartInstance.destroy();
      }

      const cores = result.map(item => item[3]);
      const valor = result.map(item => item[1]);
      const id = result.map(item => item[0]);

      const newChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: id,
          datasets: [{
            label: `Emissão de gases por ${dictemp2[temp]} `,
            data: valor,
            aspectRatio: 4,
            borderWidth: 1,
            backgroundColor: cores,
            barThickness: 8,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true,
                min: 200,
                max: 200,
                stepSize: 1
              }
            }]
          }
        }
        
      });

      setchartinstnse(newChartInstance);
      
    };
    

  

    fetchData().then(setupChart);

    const setupChartpie = () => {
      if (!result.length) return;

      const ctx = chartRef2.current;
      if (chartInstance) {
        chartInstance.destroy();
      }

      const cores = result.map(item => item[3]);
      const valor = result.map(item => item[1]);
      const id = result.map(item => item[0]);

      const newChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: [],
          datasets: [{
            label: `Emissão de gases por ${dictemp2[temp]} `,
            data: valor,
            aspectRatio: 4,
            borderWidth: 1,
            backgroundColor: cores,
            barThickness: 8,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true, // Ativar o título
            text: `Emissão de gases por ${dictemp2[temp]}`, // Texto do título
            font: {
              size: 18 // Tamanho da fonte do título
            },
          },
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true,
                min: 200,
                max: 200,
                stepSize: 1
              }
            }]
          }
        }
      });

      setchartinstnse(newChartInstance);
      
    };
    fetchData().then(setupChartpie);

   
    
    const setupChartpie2 = () => {
      if (!result.length) return;

      const ctx = chartRef4.current;
      if (chartInstance2) {
        chartInstance.destroy();
      }

      const cores = result.map(item => item[3]);
      const valor = [10,30,60]
    const id = ["CO2","CH4","CO"]

      const newChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: id,
          datasets: [{
            label: 'Emissão de gases em',
            data: valor,
            aspectRatio: 4,
            borderWidth: 1,
            backgroundColor: cores,
            barThickness: 8,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true,
                min: 200,
                max: 200,
                stepSize: 1
              }
            }]
          }
        }
      });

      setchartinstnse2(newChartInstance);
      
    };
    fetchData().then(setupChartpie2);
    const setupChartLinha = () => {
      if (!result.length) return;

      const ctx = chartRef.current;
      if (chartInstance2) {
        chartInstance.destroy();
      }
      const cores = result.map(item => item[3]);
      const valor = result.map(item => item[1]);
      const valor2 = result2.map(item => item[0]);

      const id = result.map(item => item[0]);

 
      const newChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: id,
          datasets: [{
            label: 'Emissão de gases em',
            data: valor,
            aspectRatio: 4,
            borderWidth: 1,
            backgroundColor: cores,
            borderColor:"black",
            barThickness: 8,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true,
                min: 200,
                max: 200,
                stepSize: 1
              }
            }]
          }
        }
      });

      setchartinstnse(newChartInstance);
      
    };
    fetchData().then(setupChartLinha);
    const setupChartLine2 = () => {
      const adddataset = document.getElementById("adddataset");
      const removedataset = document.getElementById("removedataset");
      
      if (!result.length) return;
    
      const ctx = chartRef5.current;
      if (chartInstance) {
        chartInstance.destroy();
      }
      let data ={0:responsejs.mes[0].Mes0.map(item => item[1]),1:responsejs.mes[1].Mes1.map(item => item[1]),2:responsejs.mes[2].Mes2.map(item => item[1]),3:responsejs.mes[3].Mes3.map(item => item[1]),4:responsejs.mes[4].Mes4.map(item => item[1]),5:responsejs.mes[5].Mes5.map(item => item[1]),6:responsejs.mes[6].Mes6.map(item => item[1]),7:responsejs.mes[7].Mes7.map(item => item[1]),8:responsejs.mes[8].Mes8.map(item => item[1]),9:responsejs.mes[9].Mes9.map(item => item[1]),10:responsejs.mes[10].Mes10.map(item => item[1]),11:responsejs.mes[11].Mes11.map(item => item[1])}
      let Mes ={0:"Jan",1:"Fevereiro",2:"Março",3:"Abril",4:"Maio",5:"Junho",6:"Julho",7:"Agosto",8:"Setembro",9:"Outobro",10:"Novembro",11:"Dezembro"}
      
      const cores = result.map(item => item[3]);
      const valor = result.map(item => item[1]);
      const valor5 = result5[11].Mes11[0].map(item => item[1]);
      const valor6 = result5[10].Mes10[0].map(item => item[1]);

      const id = result.map(item => item[0]);
      const valor2 = result2.map(item => item[1]);
      const valor3 = result3.map(item => item[1]);
      const newChartInstance3 = new Chart(ctx, {
        type: 'line',
        data: {
          labels: id,
          datasets: [
            {
              label: Mes[result5index],
              yAxesGroup: Mes[result5index],
              backgroundColor:cores[result5index],
              borderColor:cores[result5index],
              data: data[result5index]
            },
            {
              label: Mes[result5index-result5indexcon],
              yAxesGroup: Mes[result5index-result5indexcon],
              backgroundColor:cores[result5index-result5indexcon],
              borderColor:cores[result5index-result5indexcon],
              data: data[result5index-result5indexcon]
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                id: 'A',
                type: 'linear',
                position: 'left'
              },
              {
                id: 'B',
                type: 'linear',
                position: 'right',
                min: 0,
                max: 1
              }
            ]
          }
        }
      });
    
      const dataset2 = {
        label: 'C',
        yAxesGroup: 'C',
        backgroundColor:cores[2],
        borderColor:cores[2],
        data: valor3
      };
      const addindex = ()=>{
        setResult5con(prevResult5indexcon => prevResult5indexcon + 1);
      }
      function Adddataset() {
        if(result5indexcon<=12){
          setResult5con(prevResult5indexcon => {
            const newIndexcon = prevResult5indexcon + 1;
        
            newChartInstance3.data.datasets.push({
              label: Mes[result5index - newIndexcon],
              yAxesGroup: Mes[result5index - newIndexcon],
              backgroundColor: cores[result5index - newIndexcon],
              borderColor: cores[result5index - newIndexcon],
              data: data[result5index - newIndexcon]
            });
        
            newChartInstance3.update();
            console.log(newIndexcon);
        
            return newIndexcon; // Return the new value to update the state
          });
        }
      }

      function Removedataset() {
        console.log("result5indexcon")

        if(newChartInstance3.data.datasets.length != 1){
          newChartInstance3.data.datasets.pop();
          newChartInstance3.update();
        }
        }
    
      adddataset.addEventListener('click', Adddataset);
      removedataset.addEventListener('click', Removedataset);
    
      setchartinstnse3(newChartInstance3);
    };
    
    fetchData().then(setupChartLine2);

    const setupChartScatter = () => {
      if (!result.length) return;

      const ctx = chartRef3.current;
      if (chartInstance) {
        chartInstance.destroy();
      }

      const cores = result.map(item => item[3]);
      const valor = result.map(item => item[1]);
      const id = result.map(item => item[0]);

    
      const newChartInstance = new Chart(ctx, {
        type: 'scatter',
        data: {
          labels: id,
          datasets: [{
            label: `Emissão de gases em ${dictemp2[temp]}`,
            data: valor, // Convertendo para pontos (x, y)
            aspectRatio: 4,
            borderWidth: 1,
            backgroundColor: cores,
            barThickness: 8,
          },{
              type:"line",
              label: 'B',
              yAxesGroup: 'B',
              backgroundColor:cores[1],
              borderColor:cores[1],
              data:MediaArray
            
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true,
                min: 200,
                max: 200,
                stepSize: 1
              }
            }]
          },
            annotation: {
              annotations: [{
                  type: 'line',
                  mode: 'horizontal',
                  scaleID: 'y-axis-0',
                  value: 25,
                  borderColor: 'red',
                  borderWidth: 2
              }]
          
          }
        }
      });
    

      setchartinstnse(newChartInstance);
      
    };
    fetchData().then(setupChartScatter);
  }, [result,grafico]);
  
    function tempo(e) {
      Settemp(e.target.value);
    }
  
    function graficoMet(e) {
      setGrafico(e.target.value);
      if (e.target.value === "Pizza") {
        setelemento(<img style={{ width: "500px", height: "300px" }} src={Dipath} />);
      } else if (e.target.value === "Barra") {
        setelemento(<img style={{ width: "500px", height: "300px" }} src={Diabpath} />);
      } else {
        setelemento(<img style={{ width: "500px", height: "300px" }} src={Dimedia} />);
      }
    }
  
    function tabelamun(valor) {
      if (valor.target.value === "Anterior") {
        fetchData();
        setAnte(true);
      } else {
        fetchData();
        setAnte(false);
      }
    }
  return ( 
    <>
      <Navbar3></Navbar3>
        <div style={{display:"flex", flexDirection:"row"}}>
              <Navbar4 es={1} style={{}}></Navbar4>
                <div style={{ display:"flex",backgroundColor:"#f5ebe0" ,flexDirection:"row", zIndex:"0",backgroundColor:"#f5ebe0" , width:"92vw",  height:"100%",alignItems:"center",display:"flex",flexDirection:"column" }}>


<p style={{marginTop:"4vh",fontSize:"28px",fontWeight:"bold"}}>Dashboard {`${dictempTi[dictemp[temp]]} ${dictemp2[temp]}  ${(mes<10 && dia<10)?`${year}-0${mes}-${dia}`
:mes<10?`${year}-0${mes}-${dia}`
:`${year}-${mes}-0${dia}`}`}</p>
<div id="faixa1" style={{ marginLeft:"120px",display: "flex", flexDirection: "row", justifyContent: "center", gap:"3vw",marginTop:"8vh" }}>
<div style={{ backgroundColor: "white", width: "14vw", height: "20vh", marginLeft: "20px", borderRadius: "10px", paddingTop:"2vh" }}>
  <div style={{ flexDirection: "column", display: "flex" }}>
   <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
   <span style={{ fontSize: "22px", fontFamily: "Krona One , sans-serif", fontWeight: "bold", marginLeft:"1vw"}}>{temp}</span> 
   <div><select name="tempo" onChange={tempo} id="tempo" style={{ backgroundColor: "#D3D3D3", marginRight:"1vw", borderRadius: "10px",width: "4vw", height: "3vh" }}>
      <option value="Diaria">Diaria</option>
      <option value="Semanal">Semanal</option>
      <option value="Mensal">Mensal</option>
      <option value="Anual">Anual</option>
    </select></div>               
  </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <span style={{ fontSize: "26px", fontFamily: "Krona One , sans-serif", fontWeight: "bold", color: "#14B57A", marginTop:"4vh"}}>{`${total} toneladas`}</span>

    </div>
</div>
   </div>

   <div style={{ backgroundColor: "white", width: "14vw" ,height: "20vh", marginLeft: "20px", borderRadius: "10px", paddingTop:"2vh" }}>
  <div style={{ flexDirection: "column", display: "flex" }}>
   <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
   <span style={{ fontSize: "22px", fontFamily: "Krona One , sans-serif", fontWeight: "bold", marginLeft:"1vw",marginBottom:"4vh"}}>Diferenca {temp}</span> 
      
  </div>
  <div style={{display:"flex",textAlign:"center",justifyContent:"center"}}>

  {(((42580591/total).toFixed(3)-1)*100).toFixed(3) <0 &&
    <div style={{ fontSize: "26px", fontFamily: "Krona One , sans-serif", fontWeight: "bold", color: "red", }}>

    <span >{`${(((4258059/total).toFixed(3)-1)*100).toFixed(2)}% `}</span> <br />
<span style={{marginTop:"2vh",}}>{`${(total-4258059)} toneladas`}</span>


    
  
    </div>
}
    {(((42580591/total).toFixed(3)-1)*100).toFixed(3)> 0 &&
    <div style={{ fontSize: "26px", fontFamily: "Krona One , sans-serif", fontWeight: "bold", color: "red"}}>
<span >{`${(((4258059/total).toFixed(3)-1)*100).toFixed(2)}% `}</span> <br />
<span style={{marginTop:"2vh"}}>{`${(total-4258059)} toneladas`}</span>

    </div>
}

  </div>

</div>

   </div>
   <div style={{ backgroundColor: "white", width: "14vw", height: "20vh", marginLeft: "20px", borderRadius: "10px", paddingTop:"2vh" }}>
  <div style={{ flexDirection: "column", display: "flex" }}>
   <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
   <span style={{ textAlign: "left", fontSize: "22px",marginLeft:"20px",marginBottom:"2vh", fontFamily: "Krona One , sans-serif", fontWeight: "bold"}}>Diferenca meta: </span><Link to="/metas"><button style={{fontSize:"12px",backgroundColor: "#D3D3D3", marginRight:"1vw", borderRadius: "10px",width: "3.5vw", height: "3.5vh"}}>Definir meta</button></Link>
      
  </div>
  <div style={{display:"flex",textAlign:"center",justifyContent:"center"}}>


    {Cookies.get().Metas.split(",")[dictemp[temp]]> 0 &&
    <span>
               <span style={{ fontSize: "22px", fontWeight:"bold",}}>Metas: {Cookies.get().Metas.split(",")[dictemp[temp]]} toneladas
</span><br />
       <span  style={{fontWeight:"bold",fontSize: "22px",color: "#14B57A",}}>{`${(((Cookies.get().Metas.split(",")[dictemp[temp]]/total).toFixed(3)-1)*100).toFixed(3)}%`}</span> 
       <p style={{marginTop:"10px",fontWeight:"bold",fontSize: "22px",color: "#14B57A",}}>{`${(Cookies.get().Metas.split(",")[dictemp[temp]]-4258059)}`}</p>


    </span>
}
  </div>

</div>

   </div>
   <div style={{ backgroundColor: "white",width: "14vw", height: "20vh", marginLeft: "20px", borderRadius: "10px", paddingTop:"2vh" }}>
  <div style={{ flexDirection: "column", display: "flex" }}>
   <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
   <span style={{ fontSize: "22px", fontFamily: "Krona One , sans-serif", fontWeight: "bold", marginLeft:"1vw"}}>{temp} {Metrica}</span> 
   <div>
    <select name="tempo" onChange={metrica} id="tempo" style={{ backgroundColor: "#D3D3D3", marginRight: "20px", borderRadius: "10px", width: "3.5vw", height: "3.5vh" }}>
      <option value="Media">Media</option>
      <option value="Variancia">Variancia</option>
      <option value="Minimo">Minimo</option>
      <option value="Maximo">Maximo  </option>

    </select></div>               
  </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <span style={{ fontSize: "26px", fontFamily: "Krona One , sans-serif", fontWeight: "bold", color: "#14B57A", marginTop:"4vh"}}>{Metrica == "Media" ? `${Math.round(Media)}`: Metrica  == "Variancia"? Math.round(Variancia): Metrica == "Maximo"?Maximo:Minimo} toneladas</span>

    </div>
  
</div>
   </div>

    



</div>
<div style={{display:`flex`,flexDirection:"row",marginLeft:"20px",marginTop:"30px",justifyContent:"space-around", gap:"9vw"}}>
<div>
<div style={{backgroundColor:"white",borderTopLeftRadius: "10px",borderTopRightRadius: "10px", justifyContent:"center",display:"flex"}}>Emissões de Gases</div> 
<div style={{backgroundColor: "white", width: "35vw", height: "32vh", flexDirection:"row",borderEndEndRadius: "10px",display: "flex", justifyContent: "space-between" }}>

<div style={{marginLeft:"20px"}}>
<div style={{ width: "34vw", height: "30vh", marginLeft:"10px", borderRadius: "10px", marginRight: "20px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
<span style={{ width: "28vw", height: "30vh",display:"flex"}}>
 
<canvas ref={chartRef4} style={{ width: "100%", height: "100%",marginRight:"80px" }}></canvas>
</span>
</div>

</div>
</div>
</div>

<div style={{ flexDirection:"row", display: "flex", justifyContent: "center" , gap:"20px"}}>
<div>
<div style={{backgroundColor:"white",borderTopLeftRadius: "10px",borderTopRightRadius: "10px", justifyContent:"center",display:"flex"}}>Tipos de Gases</div> 
<div style={{backgroundColor: "white", width: "35vw", height: "32vh", flexDirection:"row",borderEndEndRadius: "10px",display: "flex", justifyContent: "space-between" }}>
<div style={{marginLeft:"20px"}}>
<div style={{ width: "34vw", height: "30vh", marginLeft:"10px", borderRadius: "10px", marginRight: "20px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>

<span style={{ width: "28vw", height: "30vh",}}>
{grafico == "Barra" &&

<canvas ref={chartRef} style={{ width: "100%", height: "100%",marginRight:"80px" }}></canvas>
}

{grafico == "Pizza"&&
  <canvas ref={chartRef2} style={{ width: "100%", height: "100%",marginRight:"80px" }}></canvas>
}
{grafico == "Media"&&
  <canvas ref={chartRef3} style={{ width: "100%", height: "100%",marginRight:"80px" }}></canvas>
}

</span>



  </div>

    </div>
<div>

<select name="tempo" onChange={graficoMet} id="tempo" style={{ backgroundColor: "#D3D3D3", borderRadius: "10px", width: "100px", marginLeft:"-150px", marginTop:"20px",height: "35px" }}>
      <option value="Barra">Barra</option>
      <option value="Pizza">Pizza</option>
      <option value="Media">Media</option>

    </select>
   
</div>

  </div>
</div>
  

  
</div>
            </div>
            <div style={{display:"flex",flexDirection:"column", justifyContent:"center", marginTop:"10vh"}}>
            <div>
<div style={{backgroundColor:"white",borderTopLeftRadius: "10px",borderTopRightRadius: "10px", justifyContent:"center",display:"flex"}}>Emissões de Gases</div> 
<div style={{backgroundColor: "white", width: "35vw", height: "32vh", flexDirection:"row",borderEndEndRadius: "10px",display: "flex", justifyContent: "space-between" }}>

<div style={{marginLeft:"20px"}}>
<div style={{ width: "34vw", height: "30vh", marginLeft:"10px", borderRadius: "10px", marginRight: "20px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
<span style={{ width: "28vw", height: "30vh",display:"flex"}}>
 
<canvas ref={chartRef5} style={{ width: "100%", height: "100%",marginRight:"80px" }}></canvas>
</span>
</div>
</div>
</div>
</div>
<div style={{backgroundColor:"white", marginBottom:"10vh",borderEndEndRadius:"10px", borderBottomLeftRadius:"10px", display:"flex", justifyContent:"center", gap:"20px"}}>
<button id="adddataset">Adicionar dataset</button>
<button id="removedataset">Retirar dataset</button>

</div>
            </div>

        </div>
        
         
    
       
        
                </div>
                </>
    );
}