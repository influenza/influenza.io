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
let mesdia =[]
let mes2arraychosen =[]
let totaldia =0
    export function Tabela(props){
        const [indexEqui, Setindexequi] = useState(document.getElementsByClassName("SelectEqui") == Number?document.getElementsByClassName("SelectEqui"):0)

        console.log(document.getElementsByClassName("SelectEqui"))
function handleindexEqui(e){
    console.log(document.getElementsByClassName("SelectEqui"))
  Setindexequi(document.getElementsByClassName("SelectEqui"))
  return(document.getElementsByClassName("SelectEqui"))
  }
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
        const [date,setDate]=useState(false);
        const [Pages, setPages] = useState();

        const [UmaVez,SetUmaVez]=useState(true);
        const [NomeEqui, SetEqui] = useState(document.getElementsByClassName("SelectEqui")[0])
        useEffect(()=>{
            const intervalId = setInterval(() => {
                funcData()

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
            let temhandle
            await axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/user/${Cookies.get().ID}`, headers).then((res)=>{console.log(res) 
              let id = document.getElementsByClassName("SelectEqui")[0].id
              console.log(res.data[id])
              temhandle=res.data[id].handle
              console.log(temhandle=res.data[indexEqui].handle)
              console.log(temhandle)
      
            })
            axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/team/${temhandle}?page=1&direction=asc`, headers)

                .then((res) => {
                    const dataList = res.data._embedded.mQ135ReadingVOList.slice(0,1000);
                    setPages((res.data._embedded.mQ135ReadingVOList.length/1000)+1)
                    console.log(res.data._embedded.mQ135ReadingVOList.slice(0,100))
                    setData(dataList);

                    for (let x = 0; x < dataList.length; x++) {
                        if(datavalue.length<dataList.length){
                            datavalue.push([dataList[x].value, dataList[x].timestamp, dataList[x].id])

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
                        if(!mes2dict[dia].includes(dataList[x].value*2)){
                            mes2dict[dia].push(dataList[x].value*2)
                            if(!mesdia.includes(dataList[x].timestamp.slice(0,10))){
                                mesdia.push(dataList[x].timestamp.slice(0,10))

                            }
                        }
                        console.log(diadict[hour].includes([dataList[x].value, date2]))
                        console.log(diadict)
                        console.log(diadict[hour])
                        if (!diadict[hour].includes([dataList[x].value, date2])) {
                            diadict[hour].push([dataList[x].value, date2]);
                            if(!diaarraychosen.includes(hour)){
                                diaarraychosen.push(hour)

                            }

                        } 
                            if(!diaarraychosen.includes(hour)){
                                diaarraychosen.push(hour)

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
        const handledata= (e)=>{
            setDate(e.target.value)
        }
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
        let linhas = Array.from({ length: Data.length }, (_, index) => index);

  
        let arraypages = []
     
        Cookies.set("dataar", [1, 2, 3, 4, 5, arraypages.length]);
        for (let index = 0; index < Pages; index++) {
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

        let x2 = 0
        for(let x of mes2arraychosen){
            totalMes =0

            if (mes2dict[x]) {
                for (let y of mes2dict[x]) {

                    if (typeof y !== "string" ) {
                        totalMes += y;  // Acumula o valor em totalHora
                        DataMes = mesdia[x2]
                        
                    }
                }
                
                mesvaluehora.push([totalMes,DataMes])
                x2++
            }
        }
        
        return(
            <>
            <Navbar3 funcEqui={handleindexEqui}></Navbar3>
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
                    <select style={{cursor:"pointer"}} name="" onChange={handleTableType} id="" className="mdselecttab">
                    <option value="Emissao">Emissao</option>

                        <option value="Dia">Dia</option>
                        <option value="Mes">Mes</option>

                    </select>
                    </div>
                </div>
                <div id="mdSelectstab">
                    <div style={{display:"flex", flexDirection:"column"}}>
                    <span className="mdselectspantab"> Sensor:</span>
                    <select name="" style={{cursor:"pointer"}} id="" className="mdselecttab">
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

                    <select style={{cursor:"pointer"}} id="mdselectfilter" onChange={(e)=>{
                        setFiltro(e.target.value)
                    }} className="mdselectazul" value={Filtro}>
                        
                        <option value="MenorData">Mais antigos</option>
                        <option value="MaiorData">Mais recente</option>
                        <option value="MaiorEmissao">Maior Emissão</option>
                        <option value="MenorEmissao">Menor Emissão</option>

                    </select>

                    </div>
                    </div>
                    
                </div>
                <div id="mdSelectstab">
                    <div style={{display:"flex", flexDirection:"column"}}>
                    <span className="mdselectspantab" style={{color:"white"}}>Se:</span>

                    <div name="" id="mdselectazulfilter" style={{backgroundColor:"#0075E8", display:'flex',      alignItems:"center", textAlign:"center", borderRadius:"8px",marginLeft:"35px"}} >

                    <input type="date" name="" id="mdselectfilter" onChange={handledata} />

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

if (index <= 1000) {

    let datavalue1 =datavalue.sort((a, b) => b[0] - a[0]);
    let datavalue2 = [...datavalue].sort((a, b) => a[0] - b[0]);
    if(date && Data[item].timestamp.slice(0, 10)==date && Filtro =="MenorData"){
        return (
            <tr>
                <td>{Data[item].id}</td>
                <td>{`${Data[item].timestamp.slice(0, 10)}/${Data[item].timestamp.slice(11, 16)}`}</td>
                <td>{Data[item].value}</td>

            </tr>
        );
     }

     else if(date && datavalue1 && datavalue1[item][1].slice(0, 10)==date && Filtro == "MaiorEmissao"){
        return (
            <tr>
                <td>{datavalue1[item][2]}</td>
                <td>{`${datavalue1[item][1].slice(0, 10)}/${datavalue1[item][1].slice(11, 16)}`}</td>
                <td>{datavalue1[item][0]}</td>
            </tr>
        );
     }
     else if (date && datavalue2 && datavalue2[item][1]?.slice(0, 10) == date && Filtro == "MenorEmissao"){
        return (
            <tr>
                <td>{datavalue2[item][2]}</td>
                <td>{`${datavalue2[item][1].slice(0, 10)}/${datavalue2[item][1].slice(11, 16)}`}</td>
                <td>{datavalue2[item][0]}</td>
            </tr>
        );
     }
     else if (date && datavalue2 && Data[linhas.length-item-1].timestamp.slice(0, 10) == date && Filtro == "MaiorData"){
        return (
            <tr>
            <td>{Data[linhas.length-item-1].id}</td>
            <td>{`${Data[linhas.length-item-1].timestamp.slice(0, 10)}/${Data[linhas.length-item-1].timestamp.slice(11, 16)}`}</td>
            <td>{Data[linhas.length-item-1].value}</td>
        </tr>
        );
     }
        
     
    
    else if (Filtro == "MaiorEmissao"&& !date) {
        return (
            <tr>
                <td>{datavalue1[item][2]}</td>
                <td>{`${datavalue1[item][1].slice(0, 10)}/${datavalue1[item][1].slice(11, 16)}`}</td>
                <td>{datavalue1[item][0]}</td>
            </tr>
        );
    }

    else if(Filtro == "MenorEmissao"&& !date){
        return (
            <tr>
                <td>{datavalue2[item][2]}</td>
                <td>{`${datavalue2[item][1].slice(0, 10)}/${datavalue2[item][1].slice(11, 16)}`}</td>
                <td>{datavalue2[item][0]}</td>
            </tr>
        );
    }
    // Cria uma cópia do datavalue e ordena em ordem crescente


    else if(Filtro == "MaiorData" && !date){

        return (
            <tr>
                <td>{Data[linhas.length-item-1].id}</td>
                <td>{`${Data[linhas.length-item-1].timestamp.slice(0, 10)}/${Data[linhas.length-item-1].timestamp.slice(11, 16)}`}</td>
                <td>{Data[linhas.length-item-1].value}</td>
            </tr>
        );
    }
    else if(Filtro=="MenorData" && !date) {
        return (
            <tr>
                <td>{Data[item].id}</td>
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

        let x=0
        datavaluehora1[index].push((parseInt(datavaluehora1[index][1].slice(5,7) + datavaluehora1[index][1].slice(8,10) + datavaluehora1[index][1].slice(11,13) )))
        let datavaluehora2 = [...datavaluehora].sort((a, b) => b[0] - a[0]);
        let datavaluehora3 = [...datavaluehora1].sort((a, b) => a[2] - b[2]);
        if (Filtro == "MenorEmissao") {


            return(
                <tr>
                <td>{index}</td>
                <td>{`${datavaluehora1[index][1].slice(0,10)}/${datavaluehora1[index][1].slice(11,13)}`}</td>
                <td>{datavaluehora1[index][0]}</td>
                </tr>
            
            )
        }
        if (Filtro == "MaiorEmissao") {
            return(
                <tr>
                <td>{index}</td>
                <td>{`${datavaluehora2[index][1].slice(0,10)}/${datavaluehora2[index][1].slice(11,13)}`}</td>
                <td>{datavaluehora2[index][0]}</td>
                </tr>
            
            )
        }
        else if(Filtro =="MenorData"){

            return(
                <tr>
                <td>{index}</td>
                <td>{`${datavaluehora3[index][1].slice(0,10)}/${datavaluehora3[index][1].slice(11,13)}`}</td>
                <td>{datavaluehora3[index][0]}</td>

                </tr>
            
            )
        }
        else if(Filtro =="MaiorData"){
            return(
                <tr>
                <td>{diaarraychosen.length-index-1}</td>
                <td>{`${datavaluehora[diaarraychosen.length-index-1][1].slice(0,10)}/${datavaluehora[diaarraychosen.length-index-1][1].slice(11,13)}`}</td>
                <td>{datavaluehora[diaarraychosen.length-index-1][0]}</td>
                </tr>
            
            )
        }
       
    })
}
{mes2dict && TabelaType =="Dia" && !erroSemEmi &&
    mes2arraychosen.map((item, index) =>{
                    let mesvaluehora1 = [...mesvaluehora].sort((a,b)=>{return(a[0]-b[0])})
                    let mesvaluehora2 = [...datavaluehora].sort((a, b) => b[0] - a[0]);


        if(date && mesvaluehora[index][1].slice(0,10)==date ){
            return (
                <tr>
         <td>{index}</td>
            <td>{`${mesvaluehora[index][1].slice(0,10)}`}</td>
            <td>{mesvaluehora[index][0]/2}</td>
    
                </tr>
            );
         }
        
            
        else if(!date && Filtro =="MenorData"){
                     
        return(
            <tr>
            <td>{index}</td>
            <td>{`${mesvaluehora[index][1].slice(0,10)}`}</td>
            <td>{mesvaluehora[index][0]/2}</td>
            </tr>
        
        )
                }
                else if( !date && Filtro =="MaiorData"){
                    return(
                        <tr>
                        <td>{mes2arraychosen.length-index-1}</td>
                        <td>{`${mesvaluehora[mes2arraychosen.length-index-1][1].slice(0,10)}`}</td>
                        <td>{mesvaluehora[mes2arraychosen.length-index-1][0]/2}</td>
                        </tr>
                    
                    )
                }
                
        else if ( !date && Filtro == "MenorEmissao") {
            let mesvaluehora1 = [...mesvaluehora].sort((a,b)=>{return(a[0]-b[0])})


            return(
                <tr>
                <td>{index}</td>
                <td>{`${mesvaluehora1[index][1].slice(0,10)}`}</td>
                <td>{mesvaluehora1[index][0]/2}</td>
                </tr>
            
            )
        }
       else if (!date && Filtro == "MaiorEmissao") {
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
        <div id="mdfoottab" style={{justifyContent:"right",marginLeft:"0px"}}>

            <div id="mdtabopagesdiv" >
            {arraypages.map((item,index)=>{
                if(item ==1){
                    return(
                     <>
                        <div style={{backgroundColor:"blue",width:"30px",height:"30px"}}>{item}</div>
                        <div onClick={()=>{navigate(`/tabela/${item+1}`)}} style={{backgroundColor:"blue",width:"30px",height:"30px"}}>{item+1}</div>
                     </>

                    )
                 }
             if(item <4){
                return(
                    <div onClick={()=>{navigate(`/tabela/${item+1}`)}} style={{backgroundColor:"blue",width:"30px",height:"30px"}}>{item+1}</div>
                )
             }
             if(arraypages.length>4 && item == 4){
                return(
                    <div>...</div>
                )
             }
             if(arraypages.length==4 && item == 4){
                return(
                    <div onClick={()=>{navigate(`/tabela/${item+1}`)}} style={{backgroundColor:"blue",width:"30px",height:"30px"}}>{item+1}</div>
                )
             }
             if(arraypages.length == item){
                return(
                    <div onClick={()=>{navigate(`/tabela/${item+1}`)}} style={{backgroundColor:"blue",width:"30px",height:"30px"}}>{item+1}</div>
                )
             }
            })

            }
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