import { useEffect, useState } from "react";
import "./tabela.css"
import "./mdtabela.css"
import Cookies from "js-cookie"
import { Input } from "./input";
import { Button } from "./button";
import InputPer from "./inputper";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./navbarlateral";
import Navbar2 from "./navbarlateral2";
import { Navbar3 } from "./navbar3";
import { Navbar4 } from "./Navbar4";
import axios from "axios";
let erroSemEmi
let diadict = {"01": [],"02": [],"03": [],"04": [],"05": [],"06": [],"07": [],"08": [],"09": [],"10": [],"11": [],"12": [],"13": [],"14": [],"15": [],"16": [],"17": [],"18": [],"19": [],"20": [],"21": [],"22": [],"23": [],"24": []}
let arrayhora = [
     "01", "02", "03", "04", "05", "06", "07", "08", "09",
    "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
    "20", "21", "22", "23","24"
  ]
  let Mesdict = {
    "01": [], "02": [], "03": [], "04": [],
    "05": [], "06": [], "07": [], "08": [],
    "09": [], "10": [], "11": [], "12": []
};
let Mesarray = [
    "01", "02", "03", "04", "05", "06",
    "07", "08", "09", "10", "11", "12"
];
let mes2dict = {
    "01": [], "02": [], "03": [], "04": [], "05": [],
    "06": [], "07": [], "08": [], "09": [], "10": [],
    "11": [], "12": [], "13": [], "14": [], "15": [],
    "16": [], "17": [], "18": [], "19": [], "20": [],
    "21": [], "22": [], "23": [], "24": [], "25": [],
    "26": [], "27": [], "28": [], "29": [], "30": [],
    "31": []
};

let arrayMes2 = [
    "01", "02", "03", "04", "05", "06", "07", "08", 
    "09", "10", "11", "12", "13", "14", "15", "16", 
    "17", "18", "19", "20", "21", "22", "23", "24", 
    "25", "26", "27", "28", "29", "30", "31"
];
let datavalue=[]
let diaarraychosen =[]
let mesarraychosen =[]

let mes2arraychosen =[]
let totaldia =0
    export function Tabela(props){
  let navigate=useNavigate()
  useEffect(()=>{

    if(!Cookies.get().NomeEqui2){
      navigate("/equipevisao")
    }
  },[])


        const [dia,setdata]= useState("");
        const [mes,setmes]=useState(3);
        const [ano,setano]=useState(2024);
        const [width, setWidth] = useState(window.innerWidth);
        const [height, setHeight] = useState(window.innerHeight);
        const [Data,setData]=useState([]);
        const [DataSelect,setDataSelect]=useState([]);
        const [TabelaType,setTabelaType]=useState("Emissao");
        const [Filtro,setFiltro]=useState("MenorData");

        const [UmaVez,SetUmaVez]=useState(true);
        const [NomeEqui, SetEqui] = useState(document.getElementsByClassName("SelectEqui")[0])
        useEffect(()=>{
            funcData()
            const intervalId = setInterval(() => {

                SetEqui(document.getElementsByClassName("SelectEqui")[0].id);
              }, 2000);
            
              // Limpeza do intervalo quando o componente é desmontado
              return () => clearInterval(intervalId);
            }, [NomeEqui]);
        const funcData = async () => {
            const headers = {
                headers: {
                    "Authorization": `Bearer ${Cookies.get().Token}`
                }
            };

            axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/team/${Cookies.get().NomeEqui2}?page=1&direction=asc`, headers)

                .then((res) => {
                    const dataList = res.data._embedded.mQ135ReadingVOList;
                    setData(dataList);
                    console.log(data)
                    console.log(res.data._embedded)
                    for (let x = 0; x < dataList.length; x++) {
                        if(datavalue.length<dataList.length){
                            datavalue.push([dataList[x].value, dataList[x].timestamp])

                        }
                        const hour = dataList[x].timestamp.slice(11, 13);
                        const date = dataList[x].timestamp.slice(0, 10);
                        const date2 = dataList[x].timestamp.slice(5, 10);

                        const mes = dataList[x].timestamp.slice(5, 7);
                        const dia = dataList[x].timestamp.slice(8, 10);

                        Mesdict[mes].push(dataList[x])
                        if(!mesarraychosen.includes(mes)){
                            mesarraychosen.push(mes)
                        }
                        if(!mes2arraychosen.includes(dia)){
                            mes2arraychosen.push(dia)
                        }
                        if(!mes2dict[dia].includes(date2)){
                            mes2dict[dia].push(date2)

                        }
                        mes2dict[dia].push(dataList[x])
                        if (diadict[hour][0] === date) {
                            diadict[hour].push(dataList[x]);
                            if(!diaarraychosen.includes(hour)){
                                diaarraychosen.push(hour)

                            }

                        } else {
                            diadict[hour] = [date, dataList[x]];
                            if(!diaarraychosen.includes(hour)){
                                diaarraychosen.push(hour)

                            }
                            
                        }
                      diaarraychosen.forEach((item)=>{
                        let total=0
                        for(let x of mes2dict[item]){
                            if(typeof(x) != "string"){
                                total+=x.value
                                }
                            }
                      })
                      erroSemEmi = ""

                    }
                }).catch(()=>{
                    erroSemEmi = "Não existe nenhuma emissão desse sensor"
                })

        }

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
        }, []); // O array de dependências vazio faz com que o efeito seja executado apenas uma vez

        console.log(Data)
        const linhas = Array.from({ length: Data.length }, (_, index) => index);
        const [Pages, setPages] = useState((linhas.length / 100).toFixed());
  
        let arraypages = []
        console.log("dasfsa")
     
        Cookies.set("dataar", [1, 2, 3, 4, 5, arraypages.length]);
        console.log(Pages)
        for (let index = 0; index < (linhas.length/100).toFixed(); index++) {
            arraypages.push(index+1)
        }
        const data = { 2: 28, 4: 30, 6: 30, 9: 30, 11: 30 };
        const [imageperfil, setImageperfil] = useState(null);
        const [text, settext] = useState("normal");
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
        console.log(arraypages)
        let datavaluehora=[]
        let mesvaluehora=[]

        let totalHora=0
        let totalMes=0

        let DataHora=0
        let DataMes=0

        for(let x of diaarraychosen){
            totalHora =0

            if (diadict[x]) {
                for (let y of diadict[x]) {

                    if (typeof y !== "string") {
                        totalHora += y.value;  // Acumula o valor em totalHora
                        DataHora = y.timestamp
                    }
                }
                datavaluehora.push([totalHora,DataHora])
            }
        }
        for(let x of mes2arraychosen){
            totalMes =0

            if (mes2dict[x]) {
                for (let y of mes2dict[x]) {

                    if (typeof y !== "string") {
                        totalMes += y.value;  // Acumula o valor em totalHora
                        DataMes = y.timestamp
                    }
                }
                mesvaluehora.push([totalMes,DataMes])
            }
        }
        
        return(
            <>
            <Navbar3></Navbar3>
            <div style={{display:"flex", flexDirection:"row", overflow:"hidden"}}>
          
            <Navbar4 es={2}></Navbar4>
                <div style={{backgroundColor:"#f5ebe0", width:"92vw",height:"100%", msScrollLimitXMax:"0px",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center"}}>
                <div id="mdivfaixa1">
                <p>Monitoramento de emissões</p>
                <span></span>
                </div>
                <div id="mddivconTab">
                    
                <div id="mdDivTabela">
                <div id="mdNavTab">
                <p>TABELA DE EMISSÕES ECOSYNERGY</p>
                <div id="mdgapselect" style={{display:"flex", justifyContent:"center", flexDirection:"row",}}>
                <div id="mdSelectstab">
                    <div style={{display:"flex", flexDirection:"column"}}>
                    <span className="mdselectspantab">Tabela por:</span>
                    <select name="" onChange={handleTableType} id="" className="mdselecttab">
                    <option value="Emissao">Emissao</option>

                    <option value="Hora">Hora</option>
                        <option value="Dia">Dia</option>
                        <option value="Mes">Mes</option>

                    </select>
                    </div>
                </div>
                <div id="mdSelectstab">
                    <div style={{display:"flex", flexDirection:"column"}}>
                    <span className="mdselectspantab"> Sensor:</span>
                    <select name="" id="" className="mdselecttab">
                        <option value="MQ7">MQ7</option>
                        <option value="FIRE">FIRE</option>
                        <option value="MQ135">MQ135</option>

                    </select>
                    </div>
                </div>
                <div id="mdSelectstab">
                    <div style={{display:"flex", flexDirection:"column"}}>
                    <span className="mdselectspantab" style={{color:"white"}}>Se:</span>

                    <div name="" id="mdselectazulfilter" style={{backgroundColor:"#0075E8", display:'flex',      alignItems:"center", textAlign:"center", borderRadius:"8px",marginRight:"10px"}} >
                    <svg width="20px" height="20px" style={{marginLeft:"5px"}} viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.47401 0.151733L0.394043 8.43017H5.1617V22.2276H9.92935V8.43017H14.697L7.47401 0.151733Z" fill="white"/>
<path d="M19.4649 0.151733V14.0284H14.6973L21.9203 22.3543L29.0002 14.0284H24.2326V0.151733H19.4649Z" fill="white"/>
</svg>

                    <select id="mdselectfilter" onChange={(e)=>{
                        setFiltro(e.target.value)
                    }} className="mdselectazul" value={Filtro}>
                        
                        <option value="MenorData">Mais recente</option>
                        <option value="MaiorData">Mais antigos</option>
                        <option value="MaiorEmissao">Maior Emissão</option>
                        <option value="MenorEmissao">Menor Emissão</option>

                    </select>

                    </div>
                    </div>
                </div>
                </div>
                </div>
                <div style={{ display:"flex",flexDirection:"column", textAlign:"center",alignItems:'center', borderRadius:"10px", width:"", height:"62vh", overflow:"hidden",overflowY:"scroll",}}>
        
        <table  style={{width:"80vw", height:"82%"}} >
    <thead  >
        <tr style={{backgroundColor:"#edede9"}} >
    <th>ID</th>
        <th>Dia do Mês</th>
    <th>Quantidade de Gás</th>
        </tr>
    </thead>
    <tbody >
    {linhas && TabelaType == "Emissao" && !erroSemEmi &&
     
linhas.map((item, index) => {

// Ordena datavalue em ordem decrescente
let datavalue1 =datavalue.sort((a, b) => b[0] - a[0]);


if (index <= 100) {
    if (Filtro == "MenorEmissao") {
        return (
            <tr>
                <td>{item}</td>
                <td>{`${datavalue1[item][1].slice(0, 10)}/${datavalue1[item][1].slice(11, 16)}`}</td>
                <td>{datavalue1[item][0]}</td>
            </tr>
        );
    }
    
    // Cria uma cópia do datavalue e ordena em ordem crescente
    let datavalue2 = [...datavalue].sort((a, b) => a[0] - b[0]);

     if (Filtro == "MaiorEmissao") {
        return (
            <tr>
                <td>{item}</td>
                <td>{`${datavalue2[item][1].slice(0, 10)}/${datavalue2[item][1].slice(11, 16)}`}</td>
                <td>{datavalue2[item][0]}</td>
            </tr>
        );
    } 
    else if(Filtro == "MaiorData" ){

        return (
            <tr>
                <td>{linhas.length-item}</td>
                <td>{`${Data[linhas.length-item-1].timestamp.slice(0, 10)}/${Data[linhas.length-item-1].timestamp.slice(11, 16)}`}</td>
                <td>{Data[linhas.length-item-1].value}</td>
            </tr>
        );
    }
    else if(Filtro=="MenorData") {
        return (
            <tr>
                <td>{item}</td>
                <td>{`${Data[item].timestamp.slice(0, 10)}/${Data[item].timestamp.slice(11, 16)}`}</td>
                <td>{Data[item].value}</td>
            </tr>
        );
    }
}


return null;
})

}
{diaarraychosen && TabelaType =="Hora" && !erroSemEmi &&

    diaarraychosen.map((item, index) =>{
        let array =[]
        let datavaluehora1 = [...datavaluehora].sort((a,b)=>{return(a[0]-b[0])})

        if (Filtro == "MenorEmissao") {


            return(
                <tr>
                <td>{index}</td>
                <td>{`${datavaluehora[index][1].slice(0,10)}/${datavaluehora[index][1].slice(11,13)}`}</td>
                <td>{datavaluehora1[index][0]/2}</td>
                </tr>
            
            )
        }
        if (Filtro == "MaiorEmissao") {
            let datavaluehora2 = [...datavaluehora].sort((a, b) => b[0] - a[0]);
            return(
                <tr>
                <td>{index}</td>
                <td>{`${datavaluehora[index][1].slice(0,10)}/${datavaluehora[index][1].slice(11,13)}`}</td>
                <td>{datavaluehora2[index][0]/2}</td>
                </tr>
            
            )
        }
        else if(Filtro =="MenorData"){
            return(
                <tr>
                <td>{index}</td>
                <td>{`${datavaluehora[index][1].slice(0,10)}/${datavaluehora[index][1].slice(11,13)}`}</td>
                <td>{datavaluehora[index][0]/2}</td>
                </tr>
            
            )
        }
        else if(Filtro =="MaiorData"){
            return(
                <tr>
                <td>{diaarraychosen.length-index-1}</td>
                <td>{`${datavaluehora[diaarraychosen.length-index-1][1].slice(0,10)}/${datavaluehora[diaarraychosen.length-index-1][1].slice(11,13)}`}</td>
                <td>{datavaluehora[diaarraychosen.length-index-1][0]/2}</td>
                </tr>
            
            )
        }
       
    })
}
{mes2dict && TabelaType =="Dia" && !erroSemEmi &&
    mes2arraychosen.map((item, index) =>{
     
        
            
        if(Filtro =="MenorData"){
                     
        return(
            <tr>
            <td>{index}</td>
            <td>{`${mesvaluehora[index][1].slice(0,10)}`}</td>
            <td>{mesvaluehora[index][0]/2}</td>
            </tr>
        
        )
                }
                else if(Filtro =="MaiorData"){
                    return(
                        <tr>
                        <td>{mes2arraychosen.length-index-1}</td>
                        <td>{`${mesvaluehora[mes2arraychosen.length-index-1][1].slice(0,10)}`}</td>
                        <td>{mesvaluehora[mes2arraychosen.length-index-1][0]/2}</td>
                        </tr>
                    
                    )
                }
                
        else if (Filtro == "MenorEmissao") {
            let mesvaluehora1 = [...mesvaluehora].sort((a,b)=>{return(a[0]-b[0])})


            return(
                <tr>
                <td>{index}</td>
                <td>{`${mesvaluehora1[index][1].slice(0,10)}`}</td>
                <td>{mesvaluehora1[index][0]/2}</td>
                </tr>
            
            )
        }
        if (Filtro == "MaiorEmissao") {
            let mesvaluehora2 = [...datavaluehora].sort((a, b) => b[0] - a[0]);
            return(
                <tr>
                <td>{index}</td>
                <td>{`${mesvaluehora2[index][1].slice(0,10)}`}</td>
                <td>{mesvaluehora2[index][0]/2}</td>
                </tr>
            
            )
        }

    })
}
{Mesdict && TabelaType =="Mes" && !erroSemEmi &&
    mesarraychosen.map((item, index) =>{
        let array =[]
        let total=0
        for(let x of Mesdict[item]){
            console.log(typeof(x.value))
            if(typeof(x) != "string"){
                total+=x.value
                }
            

        }
        return(
            <tr>
            <td>{index}</td>
            <td>{`${Mesdict[item][0].timestamp.slice(0,7)}`}</td>
            <td>{total/2}</td>
            </tr>
        
        )
    })
}
{erroSemEmi && [""].map(()=>{
return(
    <tr>
    {erroSemEmi}
    </tr>
)
}) }
    </tbody>
</table>

        </div>
        <div id="mdfoottab">
            <div id="mdtabopagesdiv" style={{display:"flex", marginLeft:"5px"}}>
            <div className="mdTABDOWN" style={{backgroundColor:"#279301", display:"flex", justifyContent:"center"}}>
            <svg className="mdTabUPLOADSVG" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0171 2C16.0171 1.0335 15.2336 0.25 14.2671 0.25C13.3006 0.25 12.5171 1.0335 12.5171 2H16.0171ZM12.5171 2V17.84H16.0171V2H12.5171Z" fill="white"/>
<path d="M15.1317 20.1604C14.7377 20.5567 14.0962 20.5543 13.7067 20.1551L6.768 13.0436C6.14896 12.4091 6.60266 11.3413 7.48987 11.3446L21.4451 11.3969C22.3323 11.4002 22.7743 12.4714 22.1483 13.1012L15.1317 20.1604Z" fill="white"/>
<path d="M2.5332 24H24.9332" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
<path d="M0.5 24C0.5 24.8284 1.17157 25.5 2 25.5C2.82843 25.5 3.5 24.8284 3.5 24H0.5ZM0.5 17.84L0.5 24H3.5L3.5 17.84H0.5Z" fill="white"/>
<path d="M24.5 24C24.5 24.8284 25.1716 25.5 26 25.5C26.8284 25.5 27.5 24.8284 27.5 24H24.5ZM24.5 17.84V24H27.5V17.84H24.5Z" fill="white"/>
</svg>

            <button style={{backgroundColor:"#279301", border:"0px"}}>PDF</button>

            </div>
            <div className="mdTABDOWN" style={{backgroundColor:"#279301", display:"flex", justifyContent:"center"}}>
            <svg className="mdTabUPLOADSVG" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0171 2C16.0171 1.0335 15.2336 0.25 14.2671 0.25C13.3006 0.25 12.5171 1.0335 12.5171 2H16.0171ZM12.5171 2V17.84H16.0171V2H12.5171Z" fill="white"/>
<path d="M15.1317 20.1604C14.7377 20.5567 14.0962 20.5543 13.7067 20.1551L6.768 13.0436C6.14896 12.4091 6.60266 11.3413 7.48987 11.3446L21.4451 11.3969C22.3323 11.4002 22.7743 12.4714 22.1483 13.1012L15.1317 20.1604Z" fill="white"/>
<path d="M2.5332 24H24.9332" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
<path d="M0.5 24C0.5 24.8284 1.17157 25.5 2 25.5C2.82843 25.5 3.5 24.8284 3.5 24H0.5ZM0.5 17.84L0.5 24H3.5L3.5 17.84H0.5Z" fill="white"/>
<path d="M24.5 24C24.5 24.8284 25.1716 25.5 26 25.5C26.8284 25.5 27.5 24.8284 27.5 24H24.5ZM24.5 17.84V24H27.5V17.84H24.5Z" fill="white"/>
</svg>

            <button style={{backgroundColor:"#279301", border:"0px"}}>Excel</button>

            </div>
            <div className="mdTABDOWNBI" style={{backgroundColor:"#279301", display:"flex", justifyContent:"center"}}>
            <svg className="mdTabUPLOADSVG" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0171 2C16.0171 1.0335 15.2336 0.25 14.2671 0.25C13.3006 0.25 12.5171 1.0335 12.5171 2H16.0171ZM12.5171 2V17.84H16.0171V2H12.5171Z" fill="white"/>
<path d="M15.1317 20.1604C14.7377 20.5567 14.0962 20.5543 13.7067 20.1551L6.768 13.0436C6.14896 12.4091 6.60266 11.3413 7.48987 11.3446L21.4451 11.3969C22.3323 11.4002 22.7743 12.4714 22.1483 13.1012L15.1317 20.1604Z" fill="white"/>
<path d="M2.5332 24H24.9332" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
<path d="M0.5 24C0.5 24.8284 1.17157 25.5 2 25.5C2.82843 25.5 3.5 24.8284 3.5 24H0.5ZM0.5 17.84L0.5 24H3.5L3.5 17.84H0.5Z" fill="white"/>
<path d="M24.5 24C24.5 24.8284 25.1716 25.5 26 25.5C26.8284 25.5 27.5 24.8284 27.5 24H24.5ZM24.5 17.84V24H27.5V17.84H24.5Z" fill="white"/>
</svg>

            <button style={{backgroundColor:"#279301", border:"0px"}}>PowerBI</button>

            </div>
     
            </div>
            <div id="mdtabopagesdiv" style={{display:"flex", justifyContent:"center",}}>
            {arraypages.map((page, index)=>{
                if(page == 1){
                    return(
                        <div className="mdtabpages" id={`mdpagebutton${page}`}style={{backgroundColor:"#0075E8",  justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center",color:"white", }}>{page}</div>
                        
                                        )
                }else if(page > 4){
                   console.log(arraypages.lastIndexOf()==page)
                   console.log(arraypages.lastIndexOf())
                   if(arraypages.length ==page){
                    return(
                        <>
                        <span style={{fontSize:"20px"}}>...</span>
                        <div  onClick={()=>{
                            navigate(`/tabela/${page}`)
                        }} className="mdtabpages" id={`mdpagebutton${page}`}style={{backgroundColor:"#BBD6F0",  justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center",color:"#0075E8", }}>{page}</div>
                       <div  onClick={()=>{
                            navigate(`/tabela/${2}`)
                        }} className="mdtabpages" style={{backgroundColor:"#BBD6F0",  justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center",color:"#0075E8", }}> {">"}</div>
                       
                        </>
                         )
                   }
                }
                else{
                    if(page==4){
                        if(width>600){
                        return(
                            <div  onClick={()=>{
                                navigate(`/tabela/${page}`)
                            }} className="mdtabpages" id={`mdpagebutton${page}`}style={{backgroundColor:"#BBD6F0",  justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center",color:"#0075E8", }}>{page}</div>
                            
                                            )   
                                        }
                    }
                    else if(page==3){
                        if(width>450 ){
                        return(
                            <div  onClick={()=>{
                                navigate(`/tabela/${page}`)
                            }} className="mdtabpages" id={`mdpagebutton${page}`}style={{backgroundColor:"#BBD6F0",  justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center",color:"#0075E8", }}>{page}</div>
                            
                                            )   
                                        }
                    }
                    else{
                        return(
                            <div  onClick={()=>{
                                navigate(`/tabela/${page}`)
                            }} className="mdtabpages" id={`mdpagebutton${page}`}style={{backgroundColor:"#BBD6F0",  justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center",color:"#0075E8", }}>{page}</div>
                            
                                            )  
                    }
                }
            })}
            </div>
        </div>
</div>
                </div>
                <div style={{height:"3.3vh"}}></div>
            </div>
            
             
        
           
            
                    </div>
                    </>
        );
    }