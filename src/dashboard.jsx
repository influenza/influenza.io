import React, { useEffect, useState, useRef } from "react";
import "./tabela.css";

import Mapa from "./mapa.png";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { Button } from "./button";
import Metas from "./metas";
import { Chart, registerables } from 'chart.js';
import Navbar from "./navbarlateral";
import Navbar2 from "./navbarlateral2";
import { Navbar4 } from "./Navbar4";
import { Navbar3 } from "./navbar3";
import { DataDash } from "./dadostestedashboard";
import "./mddashboard.css"
export function Dashboard(props) {
  const [temp, Settemp] = useState("Diaria");
  const [array, Setarray] = useState();
  const [arrayan, SetarrayAn] = useState();
  const d = new Date();
  const [Media, SetMedia] = useState();
  const [Variancia, SetVariancia] = useState();
  const [Minimo, SetMinimo] = useState();
  const [Maximo, SetMaximo] = useState();
  const [MediaArray, SetMediaArray] = useState();
  
  const [Diff, setDiff] = useState(null);
  const [Diffper, setDiffper] = useState(null);

  const [data, setData] = useState(null);
  const [grafico, setGrafico] = useState("Barra");
  const [elemento, setelemento] = useState(<img style={{width:"500px",height:"300px"}}/>);
  const [dataAn, setDatan] = useState(null);
  const [ante, setAnte] = useState(false);
  const [Metrica, setMetrica] = useState("Media");
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);
  const chartRef3 = useRef(null);
  const chartRef4 = useRef(null);
  const chartRef5 = useRef(null);
  const[totalArray, setTotalArray] = useState([])
  const[totalArrayMes, setTotalArrayMes] = useState([])
  const [totalarrayHora,settotalarrayHora] = useState([])

  const [chartInstance, setchartinstnse] = useState("")
  const [chartInstance2, setchartinstnse2] = useState("")
  const [chartInstance3, setchartinstnse3] = useState("")
  const [total, settotal] = useState("");
  const [mesarraychosen, setMesArrayChosen] = useState([])
  const [diaarraychosen, setdiaArrayChosen] = useState([])
  const [horarraychosen, sethoraArrayChosen] = useState([])

  const [result, setResult] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");
  const [result5, setResult5] = useState("");
  const [result5index, setResult5index] = useState(11)
  const [result5indexcon, setResult5con] = useState(1)
  let responsejs
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  const handleTableType = (e)=>{
      setTabelaType(e.target.value)
      }
  // Adiciona o listener de resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [dictemp, setDicttemp] = useState({"Diária":0,"Semanal":1,"Mensal":2,"Anual":3});
  const [dictempTi, setDicttempTI] = useState({0:"Diario",1:"Semanal",2:"Mensal",3:"Anual"});

  const [dictemp2, setDicttemp2] = useState({"Diária":"Dia","Semanal":"Semana","Mensal":"Mes","Anual":"Ano"});
  Chart.register(...registerables);
  let navigate = useNavigate()
  console.log(Cookies.get().Metas)
  if(!Cookies.get().Metas){
    navigate("/metas")
  }
  console.log();
  
  function metrica(e){
    setMetrica(e.target.value);
    console.log(Variancia)
  }
  let Mesdict = {
      "01": [], "02": [], "03": [], "04": [],
      "05": [], "06": [], "07": [], "08": [],
      "09": [], "10": [], "11": [], "12": []
  };
  let Mesarray = [
      "01", "02", "03", "04", "05", "06",
      "07", "08", "09", "10", "11", "12"
  ];
  let horas = d.getHours();
  let dia = d.getDate();
  let mes = d.getMonth() + 1;
  let year = d.getFullYear(); 
  let minutos = d.getMinutes();
  
  function tempo(e) {
    Settemp(e.target.value);
  }
  const [Data,SetData]= useState()
  let diadicttrue = {"01": [],"02": [],"03": [],"04": [],"05": [],"06": [],"07": [],"08": [],"09": [],"10": [],"11": [],"12": [],"13": [],"14": [],"15": [],"16": [],"17": [],"18": [],"19": [],"20": [],"21": [],"22": [],"23": [],"24": []}
  
  let diadict = {
    "01": [], "02": [], "03": [], "04": [], "05": [],
    "06": [], "07": [], "08": [], "09": [], "10": [],
    "11": [], "12": [], "13": [], "14": [], "15": [],
    "16": [], "17": [], "18": [], "19": [], "20": [],
    "21": [], "22": [], "23": [], "24": [], "25": [],
    "26": [], "27": [], "28": [], "29": [], "30": [],
    "31": []
};
let arrayhora = [
     "01", "02", "03", "04", "05", "06", "07", "08", "09",
    "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
    "20", "21", "22", "23","24"
  ]
  let mesvalue
  let diaValue
  let horavalue
  let DataDiaMes
  let total2=0
  let umavez= false

  const fetchData = async () => {
    const headers = {
      headers: {
        "Authorization": `Bearer ${Cookies.get().Token}`
      }
    };

    try {
      await axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/team/${Cookies.get().NomeEqui2}?page=1&direction=asc`, headers)
      .then((res) => {
        
        console.log(res)
        let Data1 = res.data._embedded.mQ135ReadingVOList
        if(!umavez){
        for (let index = 0; index < Data1.length; index++) {

           horavalue = Data1[index].timestamp.slice(11,13)
          mesvalue = Data1[index].timestamp.slice(5,7)
           diaValue = Data1[index].timestamp.slice(8,10)
           DataDiaMes = [Data1[index].timestamp.slice(8,10),Data1[index].timestamp.slice(11,13)]
           diadict[diaValue].push([Data1[index].value , DataDiaMes])
           Mesdict[mesvalue].push([Data1[index].value , DataDiaMes])
          diadicttrue[horavalue].push([Data1[index].value , Data1[index].timestamp.slice(8,10),index])
           
            if(!diaarraychosen.includes(diaValue)){
              diaarraychosen.push(diaValue)
            }
            if(!mesarraychosen.includes(mesvalue)){
              mesarraychosen.push(mesvalue)
            }
            console.log(           diaValue = Data1[index].timestamp.slice(8,10) )
            console.log()
            if(!horarraychosen.includes(horavalue )&& diaValue == dia){
              horarraychosen.push(horavalue)
            }
        }
        umavez=true
        console.log(umavez)
      }

        let totalarrayMes

        for(let x of diaarraychosen){
          total2 =0

       for (let y of diadict[x]){
        total2+=y[0]
        
       }
       if(!totalArray.includes(total2)){
        totalArray.push(total2)
       }
       
       
        }
        for(let x of horarraychosen){
          console.log(diadicttrue[x])
          total2 =0
          for (let y of diadicttrue[x]){
          if(y[1] ==dia ){
            total2+=y[0]

          }
          }
          if(!totalarrayHora.includes(total2) && total2 != 0){
            console.log(total2)
            totalarrayHora.push(total2)

          }
          console.log(totalarrayHora)

          
          }

        for(let x of mesarraychosen){
          total2 =0

          for (let y of Mesdict[x]){
           total2+=y[0]
          }
            if(!totalArrayMes.includes(total2)){
              totalArrayMes.push(total2)
            }          
           }

      })
      console.log(totalArray)
      if(temp=="Mensal"){
        settotal(totalArrayMes[totalArrayMes.length-1])
        setDiff(totalArrayMes[totalArrayMes.length-1]-totalArray[totalArray.length-2])
        setDiffper(totalArrayMes[totalArray.length-2]?totalArrayMes[totalArray.length-2]/totalArrayMes[totalArrayMes.length-1]:100)
        console.log((totalArrayMes[totalArrayMes.length-1]+totalArray[totalArray.length-2])/2)
        SetMinimo(total)
        SetMaximo(total)

      }
      else if(temp == "Anual"){
        let totalano = totalArrayMes.reduce((a,b)=>a+b)
        settotal(totalano)
        SetMinimo(totalano)
        SetMaximo(totalano)  


        setDiff(totalano-0)
        setDiffper(0)
        SetMedia(totalano/2)
      }
      else if(temp == "Diaria"){
        console.log("fsafsaga")
        settotal(totalArray[totalArray.length-1])
        setDiff(totalArray[totalArray.length-1]-totalArray[totalArray.length-2])
        setDiffper(totalArray[totalArray.length-1]/totalArray[totalArray.length-2])
        console.log(totalArray[totalArray.length-1]+totalArray[totalArray.length-2]/2)
        let somavalor = totalArray.reduce((a,b)=>a+b)
        SetMedia(somavalor/2)
        console.log(somavalor)

        let ordem = [...totalarrayHora].sort((a,b)=>b-a)
        SetMinimo(ordem[ordem.length-1])
        SetMaximo(ordem[0])
      }
    } catch (error) {
      console.error("Erro ao obter dados do servidor:", error);
    }
  };
  useEffect(() => {
    const setupChart = () => {

      const ctx = chartRef.current;
      if (chartInstance) {
        chartInstance.destroy();
      }

      console.log({"dicionario":diadict})
      const valor = totalArray
      console.log(totalArray)
      console.log(diaarraychosen)
      console.log(totalArrayMes)
      console.log(mesarraychosen)
      console.log(horarraychosen)
      console.log(totalarrayHora)

      const newChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: diaarraychosen,
          datasets: [{
            label: `Emissão de gases por ${dictemp2[temp]} `,
            data: valor,
            aspectRatio: 4,
            borderWidth: 1,
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
     
      console.log(temp)
      if(temp=="Mensal"){
        newChartInstance.data.labels = diaarraychosen
        newChartInstance.data.datasets[0].data =valor
        newChartInstance.update();

      }
      else if(temp == "Anual"){
        console.log("fsafsaga")
        newChartInstance.data.labels = mesarraychosen
        newChartInstance.data.datasets[0].data =totalArrayMes
        newChartInstance.update();

      }
      else if(temp == "Diaria"){
        console.log("fsafsaga")
        newChartInstance.data.labels = horarraychosen
        newChartInstance.data.datasets[0].data =totalarrayHora
        newChartInstance.update();

      }

      setchartinstnse(newChartInstance);
    };
    fetchData().then(setupChart);

    const setupChartpie2 = () => {
      const ctx = chartRef4.current.getContext('2d');

      // Destrói o gráfico anterior, se existir
      if (chartInstance2) {
        chartInstance2.destroy();
      }

      const valor = [10, 30, 60];
      const id = ["CO2", "CH4", "CO"];

      const newChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: id,
          datasets: [{
            label: 'Emissão de gases em',
            data: valor,
            backgroundColor: ["green", "gray", "red"],
            borderWidth: 1,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
      });

      // Salva a instância do gráfico para destruição posterior
      setchartinstnse2(newChartInstance);
    };
    fetchData().then(setupChartpie2)

    const setupChartpie = () => {
      
      const ctx = chartRef2.current.getContext('2d');

      // Destrói o gráfico anterior, se existir
      if (chartInstance) {
        chartInstance.destroy();
      }


      const newChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: horarraychosen,
          datasets: [{
            label: 'Emissão de gases em',
            data: totalarrayHora,
            borderWidth: 1,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
      });
      if(temp=="Mensal"){
        newChartInstance.data.labels = diaarraychosen
        newChartInstance.data.datasets[0].data =totalArray
        newChartInstance.update();

      }
      else if(temp == "Anual"){
        console.log("fsafsaga")
        newChartInstance.data.labels = mesarraychosen
        newChartInstance.data.datasets[0].data =totalArrayMes
        newChartInstance.update();

      }
      else if(temp == "Diaria"){
        console.log("fsafsaga")
        newChartInstance.data.labels = horarraychosen
        newChartInstance.data.datasets[0].data =totalarrayHora
        newChartInstance.update();

      }

      // Salva a instância do gráfico para destruição posterior
      setchartinstnse(newChartInstance);
    };
    fetchData().then(setupChartpie)
      const setupChartScatter = () => {
      
        const ctx = chartRef3.current.getContext('2d');
        if (chartInstance) {
          chartInstance.destroy();
        }
      
        const newChartInstance = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
              label: 'Scatter Dataset',
              data: [{ x: -10, y: 0 }] // Inicialização com um ponto de exemplo
            }]
          },
          options: {
            scales: {
              x: {
                type: 'linear',
                position: 'bottom'
              }
            }
          }
        });
      if(temp=="Mensal"){
        newChartInstance.data.labels = diaarraychosen
        newChartInstance.data.datasets[0].data =totalArray
        newChartInstance.update();

      }
      else if(temp == "Anual"){
        console.log("fsafsaga")
        newChartInstance.data.labels = mesarraychosen
        newChartInstance.data.datasets[0].data =totalArrayMes
        newChartInstance.update();

      }
      else if(temp == "Diaria"){
        console.log("fsafsaga")
        newChartInstance.data.labels = horarraychosen
        newChartInstance.data.datasets[0].data =totalarrayHora
        newChartInstance.update();

      }

      setchartinstnse(newChartInstance);
      
    };
    fetchData().then(setupChartScatter);
 }, [result,grafico,temp]);
  
    function tempo(e) {
      Settemp(e.target.value);
    }
  
    function graficoMet(e) {
      setGrafico(e.target.value);
      if (e.target.value === "Pizza") {
        setelemento(<img style={{ width: "500px", height: "300px" }} />);
      } else if (e.target.value === "Barra") {
        setelemento(<img style={{ width: "500px", height: "300px" }}  />);
      } else {
        setelemento(<img style={{ width: "500px", height: "300px" }}  />);
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

<div style={{width:"89vw", display:"flex", justifyContent:"space-between"}}>
  
<p id="TituloMdDash">Graficos Das Emissões</p>
<div>
<p id="TituloMdDash">Monitoramento de emissões </p>
<p id="TituloMdDash2">Em busca de um futuro sustentável</p>
</div>
</div>
<div id="faixa1" style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop:"2vh", gap:"1vw" }}>
<div  style={{display:"flex", justifyContent:"center", flexDirection:"row", gap:"1vw"}}>
<div className="mdDashinfodiv" style={{ backgroundColor: "white",justifyContent:"start"  }}>
  <div style={{ flexDirection: "column", display: "flex" }}>
   <div className="navbarinfoDash" style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
   <span id="mdtittempDash" style={{ fontFamily: "Krona One , sans-serif", fontWeight: "bold", }}>Total {temp}</span> 

   <div><select name="tempo" onChange={tempo} id="tempo" >
      <option value="Diária">Diária</option>
      <option value="Mensal">Mensal</option>
      <option value="Anual">Anual</option>

    </select></div>               
  </div>
    <div className="restinfoDash"style={{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
    <span className="spaninfodash" style={{  fontFamily: "Krona One , sans-serif", fontWeight: "bold", color: "#14B57A"  }}>{`${total}`}</span>

    </div>
</div>
   </div>

   <div className="mdDashinfodiv" style={{ backgroundColor: "white",  }}>
  <div style={{ flexDirection: "column", display: "flex" }}>
   <div className="navbarinfoDash" style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
   <span id="mdtittempDash" style={{ fontFamily: "Krona One , sans-serif", fontWeight: "bold", }}>Diferenca {temp}</span> 
      
  </div>
  <div className="restinfoDash" style={{display:"flex",textAlign:"center",justifyContent:"center",alignItems:"center"}}>

  {(((42580591/total).toFixed(3)-1)*100).toFixed(3) <0 &&
    <div className="spaninfodash" style={{  fontFamily: "Krona One , sans-serif", fontWeight: "bold", color: "red", }}>

    <span >{`${(((4258059/total).toFixed(3)-1)*100).toFixed(2)}% `}</span> <br />
<span style={{marginTop:"2vh",}}>{`${(total-4258059)} `}</span>


    
  
    </div>
}
    {(((42580591/total).toFixed(3)-1)*100).toFixed(3)> 0 &&
    <div className="spaninfodash" style={{ fontFamily: "Krona One , sans-serif", fontWeight: "bold", color: "red"}}>
<span >{`${((Diffper-1)*100).toFixed(2)}% `}</span> <br />
<span style={{marginTop:"2vh"}}>{`${Diff} `}</span>

    </div>
}

  </div>

</div>

   </div>
</div>
   {width>600 && <>
    <div  style={{display:"flex", justifyContent:"center", flexDirection:"row", gap:"1vw"}}>

    <div className="mdDashinfodiv" style={{ backgroundColor: "white"}}>
  <div style={{ flexDirection: "column", display: "flex" }}>
   <div className="navbarinfoDash" style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
   <span  id="mdtittempDash" style={{ textAlign: "left", fontFamily: "Krona One , sans-serif", fontWeight: "bold"}}>Revisão da meta:
   <span style={{color:"#4A9AE9"}}> {5000}</span>

    </span><Link to="/metas"><button id="btnMetas" style={{backgroundColor: "#D3D3D3", }}>Definir meta</button></Link>
      
  </div>
  <div className="restinfoDash" style={{display:"flex",textAlign:"center",justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
{Cookies.get().Metas?Cookies.get().Metas.split(",")[dictemp[temp]]:0}

<span>

{Cookies.get().Metas?total - parseInt(Cookies.get().Metas.split(",")[dictemp[temp]]):0}

</span>
<span>
{Cookies.get().Metas?`${((total/parseInt(Cookies.get().Metas.split(",")[dictemp[temp]])-1)*100).toFixed(2)}%`:0}

</span>
  </div>

</div>

   </div>
     
   <div className="mdDashinfodiv" style={{ backgroundColor: "white"}}>
  <div style={{ flexDirection: "column", display: "flex" }}>
  <div className="navbarinfoDash" style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
  <span id="mdtittempDash" style={{ fontFamily: "Krona One , sans-serif", fontWeight: "bold", }}>{temp} {Metrica}</span> 
   <div>
    <select name="tempo" onChange={metrica} id="tempo" style={{ backgroundColor: "#D3D3D3", marginRight: "10px", borderRadius: "10px",  }}>
      <option value="Media">Media</option>
      <option value="Minimo">Minimo</option>
      <option value="Maximo">Maximo  </option>

    </select></div>               
  </div>
    <div className="restinfoDash" style={{display:"flex",alignItems:"center",justifyContent:"center", alignItems:"center"}}>
    <span style={{ fontSize: "26px", fontFamily: "Krona One , sans-serif", fontWeight: "bold", color: "#14B57A",}}>{Metrica == "Media" ? `${Math.round(Media)}`: Metrica  == "Variancia"? Math.round(Variancia): Metrica == "Maximo"?Maximo:Minimo} </span>

    </div>
  
</div>
   </div>
   </div>
   </>}
 

    



</div>
{width<600 && <div style={{display:"flex", flexDirection:"row", marginTop:"4vh"}}>
    <div className="mdDashinfodiv" style={{ backgroundColor: "white"}}>
  <div style={{ flexDirection: "column", display: "flex" }}>
   <div className="navbarinfoDash" style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
   <span  id="mdtittempDash" style={{ textAlign: "left", fontFamily: "Krona One , sans-serif", fontWeight: "bold"}}>Diferenca meta: 
    </span><Link to="/metas"><button id="btnMetas" style={{backgroundColor: "#D3D3D3", }}>Definir meta</button></Link>
      
  </div>
  <div className="restinfoDash" style={{display:"flex",textAlign:"center",justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
{Cookies.get().Metas?Cookies.get().Metas.split(",")[dictemp[temp]]:0}

<span>

{Cookies.get().Metas?total - parseInt(Cookies.get().Metas.split(",")[dictemp[temp]]):0}

</span>
<span>
{Cookies.get().Metas?`${((total/parseInt(Cookies.get().Metas.split(",")[dictemp[temp]])-1)*100).toFixed(2)}%`:0}

</span>
  </div>

</div>

   </div>
     
   <div className="mdDashinfodiv" style={{ backgroundColor: "white"}}>
  <div style={{ flexDirection: "column", display: "flex" }}>
  <div className="navbarinfoDash" style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
  <span id="mdtittempDash" style={{ fontFamily: "Krona One , sans-serif", fontWeight: "bold", }}>{temp} {Metrica}</span> 
   <div>
    <select name="tempo" onChange={metrica} id="tempo" style={{ backgroundColor: "#D3D3D3", marginRight: "10px", borderRadius: "10px",  }}>
      <option value="Media">Media</option>
      <option value="Minimo">Minimo</option>
      <option value="Maximo">Maximo  </option>

    </select></div>               
  </div>
    <div className="restinfoDash" style={{display:"flex",alignItems:"center",justifyContent:"center", alignItems:"center"}}>
    <span style={{ fontSize: "26px", fontFamily: "Krona One , sans-serif", fontWeight: "bold", color: "#14B57A",}}>{Metrica == "Media" ? `${Math.round(Media)}`: Metrica  == "Variancia"? Math.round(Variancia): Metrica == "Maximo"?Maximo:Minimo} </span>

    </div>
  
</div>
   </div>
   </div>}
<div id="faixa2" style={{display:`flex`,flexDirection:"row",marginTop:"10px",justifyContent:"space-around",}}>

<div style={{ flexDirection:"row", display: "flex", justifyContent: "center" , gap:"20px"}}>
<div>
<div style={{backgroundColor:"white",borderTopLeftRadius: "10px",borderTopRightRadius: "10px", justifyContent:"space-between",display:"flex",alignItems:"center", textAlign:"center"}}><span > Tipos de Gases</span> <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<select name="tempo" onChange={graficoMet} id="graficSelect" style={{ backgroundColor: "transparent",color:"white",border:"white", borderRadius: "10px", }}>
      <option value="Barra">Barra</option>
      <option value="Pizza">Pizza</option>
      <option value="Media">Media</option>

    </select></div></div> 

<div className="Graficos" style={{backgroundColor: "white",  flexDirection:"row",borderEndEndRadius: "10px",display: "flex", justifyContent: "space-between" }}>
<div >
<div className="Graficosdiv1" style={{display: "flex", alignItems: "center", justifyContent: "center" }}>

<span className="Graficosdiv2" style={{ display:"flex"}}>
<canvas ref={chartRef4} style={{ width: "100%", height: "100%"}}></canvas>

</span>



  </div>

    </div>


  </div>
</div>
  

  
</div>
<div style={{ flexDirection:"row", display: "flex", justifyContent: "center" , gap:"20px"}}>
<div>
<div style={{backgroundColor:"white",borderTopLeftRadius: "10px",borderTopRightRadius: "10px", justifyContent:"space-between",display:"flex",alignItems:"center", textAlign:"center"}}><span style={{marginLeft:"10px"}}> Tipos de Gases</span> <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<select name="tempo" onChange={graficoMet} id="graficSelect" style={{ backgroundColor: "#D3D3D3", borderRadius: "10px", }}>
      <option value="Barra">Barra</option>
      <option value="Pizza">Pizza</option>
      <option value="Media">Media</option>

    </select></div></div> 

<div className="Graficos" style={{backgroundColor: "white",  flexDirection:"row",borderEndEndRadius: "10px",display: "flex", justifyContent: "space-between" }}>
<div>
<div className="Graficosdiv1" style={{display: "flex", alignItems: "center", justifyContent: "center" }}>

<span className="Graficosdiv2" style={{ display:"flex"}}>
{grafico == "Barra" &&

<canvas ref={chartRef} style={{ width: "100%", height: "100%"}}></canvas>
}

{grafico == "Pizza"&&
  <canvas ref={chartRef2} style={{ width: "100%", height: "100%"}}></canvas>
}
{grafico == "Media"&&
  <canvas ref={chartRef3} style={{ width: "100%", height: "100%"}}></canvas>
}

</span>



  </div>

    </div>


  </div>
</div>
  

  
</div>
            </div>
            <div style={{display:"flex",flexDirection:"column", justifyContent:"center", marginTop:"1vh"}}>
            <div>
<div style={{backgroundColor:"white",borderTopLeftRadius: "10px",borderTopRightRadius: "10px", justifyContent:"center",display:"flex"}}>Emissões de Gases</div> 
<div id="GraficoGrande" style={{backgroundColor: "white",  height: "32vh", flexDirection:"row",borderEndEndRadius: "10px",display: "flex", justifyContent: "space-between" }}>

<div style={{marginLeft:"20px"}}>
<div style={{ width: "34vw", height: "30vh", marginLeft:"10px", borderRadius: "10px", marginRight: "20px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
<span style={{ width: "28vw", height: "30vh",display:"flex"}}>
 
<canvas ref={chartRef5} style={{ width: "100%", height: "100%"}}></canvas>
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