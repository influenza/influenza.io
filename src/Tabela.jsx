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
        const [width, setWidth] = useState(window.innerWidth);
        const [height, setHeight] = useState(window.innerHeight);
      
        // Atualiza a largura e altura da tela
        const handleResize = () => {
          setWidth(window.innerWidth);
          setHeight(window.innerHeight);
        };
      
        // Adiciona o listener de resize
        useEffect(() => {
          window.addEventListener("resize", handleResize);
      
          // Remove o listener quando o componente é desmontado
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        }, []); // O array de dependências vazio faz com que o efeito seja executado apenas uma vez
      
        const linhas = Array.from({ length: 700 }, (_, index) => index);
        console.log(linhas);
        const [Pages, setPages] = useState((linhas.length / 100).toFixed());
        let arraypages = [];
        for (let i = 0; i < Pages; i++) {
          arraypages.push(i + 1);
        }
        Cookies.set("dataar", [1, 2, 3, 4, 5, arraypages.length]);
      
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
                    <select name="" id="" className="mdselecttab">
                        <option value="Semanal">Semana</option>
                        <option value="Mensal">Més</option>
                        <option value="Anual">Ano</option>

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

                    <select id="mdselectfilter" className="mdselectazul" value="">
                        
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
        
        <table  style={{width:"80vw", height:"82%"}} >
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