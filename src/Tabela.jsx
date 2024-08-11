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



    export function Tabela(props){
  let navigate=useNavigate()

        const [dia,setdata]= useState("");
        const [mes,setmes]=useState(3);
        const [ano,setano]=useState(2024);
        const linhas = Array.from({ length: 700 }, (_,index) => index  );
        console.log(linhas)
        const [Pages,setPages]=useState((linhas.length/100).toFixed());
        let arraypages=[]
        for (let i = 0; i < Pages; i++) {
            arraypages.push(i+1)            
        }
        Cookies.set("dataar",[1,2,3,4,5,arraypages.length])

        const data ={2:28,4:30, 6:30, 9:30, 11:30}
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
        
        useEffect(()=>{
          document.getElementById("mdpagebutton1").className = "chosen";
          setdata({"_embedded":{"mQ135ReadingVOList":[{"id":1,"teamHandle":"ecosynergyofc","value":567.8,"timestamp":"2024-07-26T00:07:25Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/1"}}},{"id":2,"teamHandle":"ecosynergyofc","value":1.07373E9,"timestamp":"2024-07-26T14:40:33Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/2"}}},{"id":3,"teamHandle":"ecosynergyofc","value":1.07373E9,"timestamp":"2024-07-26T14:40:53Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/3"}}},{"id":4,"teamHandle":"ecosynergyofc","value":712.0,"timestamp":"2024-07-26T14:40:55Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/4"}}},{"id":5,"teamHandle":"ecosynergyofc","value":714.0,"timestamp":"2024-07-26T14:40:56Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/5"}}},{"id":6,"teamHandle":"ecosynergyofc","value":717.0,"timestamp":"2024-07-26T14:40:57Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/6"}}},{"id":7,"teamHandle":"ecosynergyofc","value":713.0,"timestamp":"2024-07-26T14:40:59Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/7"}}},{"id":8,"teamHandle":"ecosynergyofc","value":714.0,"timestamp":"2024-07-26T14:41:00Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/8"}}},{"id":9,"teamHandle":"ecosynergyofc","value":714.0,"timestamp":"2024-07-26T14:41:01Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/9"}}},{"id":10,"teamHandle":"ecosynergyofc","value":713.0,"timestamp":"2024-07-26T14:41:03Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/10"}}},{"id":11,"teamHandle":"ecosynergyofc","value":715.0,"timestamp":"2024-07-26T14:41:04Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/11"}}},{"id":12,"teamHandle":"ecosynergyofc","value":715.0,"timestamp":"2024-07-26T14:41:05Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/12"}}},{"id":13,"teamHandle":"ecosynergyofc","value":716.0,"timestamp":"2024-07-26T14:41:07Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/13"}}},{"id":14,"teamHandle":"ecosynergyofc","value":715.0,"timestamp":"2024-07-26T14:41:08Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/14"}}},{"id":15,"teamHandle":"ecosynergyofc","value":714.0,"timestamp":"2024-07-26T14:41:09Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/15"}}},{"id":16,"teamHandle":"ecosynergyofc","value":714.0,"timestamp":"2024-07-26T14:41:10Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/16"}}},{"id":17,"teamHandle":"ecosynergyofc","value":715.0,"timestamp":"2024-07-26T14:41:12Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/17"}}},{"id":18,"teamHandle":"ecosynergyofc","value":715.0,"timestamp":"2024-07-26T14:41:13Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/18"}}},{"id":19,"teamHandle":"ecosynergyofc","value":740.0,"timestamp":"2024-07-26T14:41:14Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/19"}}},{"id":20,"teamHandle":"ecosynergyofc","value":557.0,"timestamp":"2024-07-26T14:41:16Z","_links":{"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1/20"}}}]},"_links":{"first":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1?limit=20&direction=timestamp%3A%20ASC&page=0&size=20&sort=timestamp,asc"},"self":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1?page=0&limit=20&direction=timestamp%3A%20ASC"},"next":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1?limit=20&direction=timestamp%3A%20ASC&page=1&size=20&sort=timestamp,asc"},"last":{"href":"http://ec2-44-220-83-117.compute-1.amazonaws.com/api/mq135Reading/v1?limit=20&direction=timestamp%3A%20ASC&page=2&size=20&sort=timestamp,asc"}},"page":{"size":20,"totalElements":51,"totalPages":3,"number":0}})  
          console.log(dia["_embedded"])
        },[])
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
                <div style={{display:"flex", justifyContent:"center", flexDirection:"row", gap:"20px"}}>
                <div id="mdSelectstab">
                    <div style={{display:"flex", flexDirection:"column"}}>
                    <span className="mdselectspantab">Selecione a unidade de medida:</span>
                    <select name="" id="" className="mdselecttab">
                        <option value="Semanal">Semanal</option>
                        <option value="Mensal">Mensal</option>
                        <option value="Anual">Anual</option>

                    </select>
                    </div>
                </div>
                <div id="mdSelectstab">
                    <div style={{display:"flex", flexDirection:"column"}}>
                    <span className="mdselectspantab">Selecione o sensor:</span>
                    <select name="" id="" className="mdselecttab">
                        <option value="MQ7">MQ7</option>
                        <option value="FIRE">FIRE</option>
                        <option value="MQ135">MQ135</option>

                    </select>
                    </div>
                </div>
                <div id="mdSelectstab">
                    <div style={{display:"flex", flexDirection:"column"}}>
                    <span className="mdselectspantab" style={{color:"white"}}>Selecione a unidade de medida:</span>

                    <div name="" id="" style={{backgroundColor:"#0075E8", display:'flex', justifyContent:"space-around", alignItems:"center", textAlign:"center"}} className="mdselecttab">
                    <svg width="20px" height="20px" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.47401 0.151733L0.394043 8.43017H5.1617V22.2276H9.92935V8.43017H14.697L7.47401 0.151733Z" fill="white"/>
<path d="M19.4649 0.151733V14.0284H14.6973L21.9203 22.3543L29.0002 14.0284H24.2326V0.151733H19.4649Z" fill="white"/>
</svg>

                    <select id="mdselectfilter" value="">
                        
                        <option value="MenorData">Mais recente</option>
                        <option value="Mensal">Mais antigos</option>
                        <option value="Anual">Maior Emissão</option>
                        <option value="Anual">Menor Emissão</option>

                    </select>

                    </div>
                    </div>
                </div>
                </div>
                </div>
                <div style={{ display:"flex",flexDirection:"column", textAlign:"center",alignItems:'center', borderRadius:"10px", width:"", height:"62vh", overflow:"hidden",overflowY:"scroll",}}>
        
        <table  style={{width:"80vw", height:"62vh"}} >
    <thead  >
        <tr style={{backgroundColor:"#edede9"}} >
    <th>ID</th>
        <th>Dia do Mês</th>
    <th>Quantidade de Gás</th>
        </tr>
    </thead>
    <tbody >
    {linhas &&
linhas.map((item, index) => {

if(index<=100){
    return (
        <tr>
        <td>{item}</td>
        <td>{"21/03/2007"}</td>
        <td>{"100000"}</td>
        </tr>
    
      );
}

// Retorna null se o índice não for múltiplo de 4 para evitar renderização extra
return null;
})
}

    </tbody>
</table>

        </div>
        <div id="mdfoottab">
            <div style={{display:"flex",gap:"20px", marginLeft:"20px"}}>
            <div style={{backgroundColor:"#279301", width:"120px", borderRadius:"10px", height:"35px", display:"flex", justifyContent:"center",gap:"15px"}}>
            <svg width="20px" height="20px" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0171 2C16.0171 1.0335 15.2336 0.25 14.2671 0.25C13.3006 0.25 12.5171 1.0335 12.5171 2H16.0171ZM12.5171 2V17.84H16.0171V2H12.5171Z" fill="white"/>
<path d="M15.1317 20.1604C14.7377 20.5567 14.0962 20.5543 13.7067 20.1551L6.768 13.0436C6.14896 12.4091 6.60266 11.3413 7.48987 11.3446L21.4451 11.3969C22.3323 11.4002 22.7743 12.4714 22.1483 13.1012L15.1317 20.1604Z" fill="white"/>
<path d="M2.5332 24H24.9332" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
<path d="M0.5 24C0.5 24.8284 1.17157 25.5 2 25.5C2.82843 25.5 3.5 24.8284 3.5 24H0.5ZM0.5 17.84L0.5 24H3.5L3.5 17.84H0.5Z" fill="white"/>
<path d="M24.5 24C24.5 24.8284 25.1716 25.5 26 25.5C26.8284 25.5 27.5 24.8284 27.5 24H24.5ZM24.5 17.84V24H27.5V17.84H24.5Z" fill="white"/>
</svg>

            <button style={{backgroundColor:"#279301", border:"0px",fontSize:"18px"}}>PDF</button>

            </div>
            <div style={{backgroundColor:"#279301", width:"120px", borderRadius:"10px", height:"35px", display:"flex", justifyContent:"center",gap:"15px"}}>
            <svg width="20px" height="20px" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0171 2C16.0171 1.0335 15.2336 0.25 14.2671 0.25C13.3006 0.25 12.5171 1.0335 12.5171 2H16.0171ZM12.5171 2V17.84H16.0171V2H12.5171Z" fill="white"/>
<path d="M15.1317 20.1604C14.7377 20.5567 14.0962 20.5543 13.7067 20.1551L6.768 13.0436C6.14896 12.4091 6.60266 11.3413 7.48987 11.3446L21.4451 11.3969C22.3323 11.4002 22.7743 12.4714 22.1483 13.1012L15.1317 20.1604Z" fill="white"/>
<path d="M2.5332 24H24.9332" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
<path d="M0.5 24C0.5 24.8284 1.17157 25.5 2 25.5C2.82843 25.5 3.5 24.8284 3.5 24H0.5ZM0.5 17.84L0.5 24H3.5L3.5 17.84H0.5Z" fill="white"/>
<path d="M24.5 24C24.5 24.8284 25.1716 25.5 26 25.5C26.8284 25.5 27.5 24.8284 27.5 24H24.5ZM24.5 17.84V24H27.5V17.84H24.5Z" fill="white"/>
</svg>

            <button style={{backgroundColor:"#279301", border:"0px",fontSize:"18px"}}>Excel</button>

            </div>
            <div style={{backgroundColor:"#279301", width:"120px", borderRadius:"10px", height:"35px", display:"flex", justifyContent:"center",gap:"15px", paddingLeft:"20px"}}>
            <svg width="20px" height="20px" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0171 2C16.0171 1.0335 15.2336 0.25 14.2671 0.25C13.3006 0.25 12.5171 1.0335 12.5171 2H16.0171ZM12.5171 2V17.84H16.0171V2H12.5171Z" fill="white"/>
<path d="M15.1317 20.1604C14.7377 20.5567 14.0962 20.5543 13.7067 20.1551L6.768 13.0436C6.14896 12.4091 6.60266 11.3413 7.48987 11.3446L21.4451 11.3969C22.3323 11.4002 22.7743 12.4714 22.1483 13.1012L15.1317 20.1604Z" fill="white"/>
<path d="M2.5332 24H24.9332" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
<path d="M0.5 24C0.5 24.8284 1.17157 25.5 2 25.5C2.82843 25.5 3.5 24.8284 3.5 24H0.5ZM0.5 17.84L0.5 24H3.5L3.5 17.84H0.5Z" fill="white"/>
<path d="M24.5 24C24.5 24.8284 25.1716 25.5 26 25.5C26.8284 25.5 27.5 24.8284 27.5 24H24.5ZM24.5 17.84V24H27.5V17.84H24.5Z" fill="white"/>
</svg>

            <button style={{backgroundColor:"#279301", border:"0px",fontSize:"18px"}}>Power Bi</button>

            </div>
            </div>
            <div style={{display:"flex", justifyContent:"center", gap:"20px"}}>
            {arraypages.map((page, index)=>{
                if(page == 1){
                    return(
                        <div  id={`mdpagebutton${page}`}style={{backgroundColor:"#0075E8", width:"25px", height:"25px", justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center",color:"white", }}>{page}</div>
                        
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
                        }} id={`mdpagebutton${page}`}style={{backgroundColor:"#BBD6F0", width:"25px", height:"25px", justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center",color:"#0075E8", }}>{page}</div>
                       <div  onClick={()=>{
                            navigate(`/tabela/${2}`)
                        }} style={{backgroundColor:"#BBD6F0", width:"25px", height:"25px", justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center",color:"#0075E8", }}> {">"}</div>
                       
                        </>
                         )
                   }
                }
                else{
                    return(
                        <div  onClick={()=>{
                            navigate(`/tabela/${page}`)
                        }} id={`mdpagebutton${page}`}style={{backgroundColor:"#BBD6F0", width:"25px", height:"25px", justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center",color:"#0075E8", }}>{page}</div>
                        
                                        )   
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