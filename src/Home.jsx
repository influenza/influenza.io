import Login from "./App";
import { Link } from "react-router-dom";
import { paises } from './paises';
import fundo from "./image.png"

import logo from "./logo.png"
import "./Home.css";
import axios from "axios";
import { Button } from "./button";
import video from "./VídeoEcosynergy.mp4"
import logoGrande from "./whatsap.jpeg"
import Floresta from "./Floresta.png"
import logoSemFUNDO from "./Logo_Emblema.png"
import logoCortada from "./Logo_Home.png"
import Rafael from "./Rafael.png"
import Anderson from "./Anderson.png"
import Gabriel from "./Gabriel.png"
import Lucas from "./Lucas.png"
import Luigi from "./Luigi.png"

import Etec from "./Etec.png"
function Home(){


    return(         
        <>      
        <div style={{ backgroundColor:"white", height:"100px", width:"100%", display:"flex", flexDirection:"row",alignItems:"center",gap:"62vw", opacity:"0.6",    position:"absolute"}}>
            <div style={{display:"flex",flexDirection:"row", alignItems:"center", gap:'5vw'}}>
                <img src="./logo.png" alt="" style={{height:"100px",}}/>
                <div style={{display:"flex",listStyle:"none", flexDirection:"row", gap:"1vw", backgroundImage:"",opacity:"1"}}>
                    <li style={{opacity:"1"}}>Soluções</li><li>Sobre nós</li><li>Planos</li>
                    </div>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", gap:"1.5vw"}}>
                       <Link to={"/login"}>
                       <button style={{border:"1px solid black", backgroundColor:"transparent",borderRadius:'3px', width:"5.5vw", height:"3vh",fontWeight:'bold',cursor:"pointer"}}>Login</button>
                       </Link>
                       <Link to={"/cadastro2"}>
                    <button style={{border:"1px solid black", backgroundColor:"#279301",borderRadius:'3px', width:"5.5vw", height:"3vh",fontWeight:'bold',cursor:"pointer"}}>Cadastro</button>

                       </Link>
                    </div>


                    </div>
        <div style={{height:"94vh"}}>
        <video
  src={video}
  autoPlay
  loop
  muted
  style={{ zIndex: "-1", position: "absolute", width: "109vw" }}
></video>
  <div style={{paddingTop:"200px"}}>
  <p style={{fontSize:"150px", width:"900px",marginLeft:"50px",marginTop:"0px",color:"white"}}>Indústria, Inovação e Infraestrutura.</p>
            <p style={{marginLeft:"50px", fontSize:"30px", width:"550px",marginTop:"-150px",zIndex:"1",color:"white" }}>Monitoramento ambiental sustentável e gestão proativa para um futuro mais seguro e limpo</p>
            <Link to={"/cadastro2"}>
                    <button style={{border:"1px solid black", backgroundColor:"#279301",borderRadius:'10px', width:"6.5vw", height:"5vh",fontWeight:'bold',cursor:"pointer",marginLeft:"2vw",color:"white"}}>Crie sua equipe</button>

                       </Link>
  </div>
        </div>
        <div style={{display:"flex",flexDirection:"row",paddingTop:"150px",marginBottom:"100px",}}>
           <div style={{display:"flex",flexDirection:"column"}}>
           <p style={{fontWeight:"bold",fontSize:"80px",marginLeft:"2vw",width:"50vw",marginTop:"-0px"}}>
            Somos a solução para as emissões industriais
            </p>
        <p style={{fontSize:"30px",width:"50vw",marginLeft:"2vw",marginTop:"2vw"}}>
        O Ecosynergy é a solução que conecta tecnologia e sustentabilidade para revolucionar o setor industrial. Com um sistema inteligente que usa sensores para monitorar as emissões de gases e detectar incêndios em tempo real, oferecemos mais segurança e eficiência para o seu negócio.


        </p>
        <p style={{fontSize:"30px",width:"50vw",marginLeft:"2vw",marginTop:"30px"}}>
        Nossa plataforma é fácil de usar e acessível, com dados claros que ajudam sua empresa a tomar decisões rápidas e reduzir impactos no meio ambiente. 

        </p>
        <p style={{fontSize:"30px",width:"50vw",marginLeft:"2vw",marginTop:"30px"}}>
        Com a Ecosynergy, sua empresa vai além de cumprir normas ambientais: ela se posiciona como líder em inovação e responsabilidade, construindo um futuro mais sustentável e seguro.

        </p>
        <Link to={"/cadastro2"}>
                    <button style={{border:"1px solid black", backgroundColor:"#279301",borderRadius:'10px', width:"6.5vw", height:"5vh",fontWeight:'bold',cursor:"pointer",marginLeft:"2vw",color:"white"}}>Crie sua equipe</button>

                       </Link>
           </div>
           <img src={logoCortada} style={{width:"45vw",height:"45vw",marginLeft:"3vw",marginTop:"-200px",zIndex:-2,}} alt="" />

        </div>
        <div style={{backgroundImage:`url(${Floresta})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"100vh",justifyContent:"center",alignItems:"center",display:"flex", gap:"3vw",flexDirection:"column"}}>
        <div style={{display:"flex", flexDirection:"row", gap:"2.5vw"}}>
        <div style={{backgroundColor:"#00372B", width:"15vw", height:"20vw", color:"white",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"38px", padding:"px"}}>
        <p style={{width:"13.5vw",fontWeight:"lighter"}}>        Análise atráves de Gráficos e Relatórios Personalizados
        </p>
        </div>
        <div style={{backgroundColor:"#00372B", width:"15vw", height:"20vw", color:"white",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"38px", padding:"px"}}>
        <p style={{width:"13.5vw",fontWeight:"lighter"}}>       Monitoramento em Tempo Real com Alertas Inteligentes
        </p>
        </div>
        <div style={{backgroundColor:"#00372B", width:"15vw", height:"20vw", color:"white",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"38px", padding:"px"}}>
        <p style={{width:"13.5vw",fontWeight:"lighter"}}>        Configuração de Parâmetros com foco em sustentabi-lidade
        </p>
        </div>
        <div style={{backgroundColor:"#00372B", width:"15vw", height:"20vw", color:"white",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"38px", padding:"px"}}>
        <p style={{width:"13.5vw",fontWeight:"lighter"}}>       Plataforma Ecosynergy com nosso Gerenciamen-to de Equipe
        </p>
        </div>
        <div style={{backgroundColor:"#00372B", width:"15vw", height:"20vw", color:"white",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"38px", padding:"px"}}>
        <p style={{width:"13.5vw",fontWeight:"lighter"}}>       Banco de Dados automatizado e Tabelas Inteligentes


        </p>
        </div>
        </div>
        <Link to={"/cadastro2"}>
                    <button style={{border:"1px solid black", backgroundColor:"#279301",borderRadius:'10px', width:"6.5vw", height:"5vh",fontWeight:'bold',cursor:"pointer",marginLeft:"2vw",color:"white"}}>Crie sua equipe</button>

                       </Link>
        </div>
        
        <div style={{width:"100vw",height:"100vh", marginBottom:"100px"}}>
        <div style={{display:"flex", flexDirection:"row"}}>
        <div style={{width:"66vw", display:"flex", flexDirection:"column", paddingLeft:"3vw",paddingTop:"15vh", height:"100vh"}}>
            <p style={{fontSize:"50px"}}>
            Sobre Nós
            </p>
            <p style={{fontSize:"30px"}}>
            Prazer, somos a Ecosynergy, um projeto inovador que integra sustentabilidade ao setor industrial com tecnologias emergentes. Criado em 2023 por um time de cinco estudantes da ETEC Lauro Gomes, o projeto nasceu para transformar desafios ambientais em soluções práticas e acessíveis.
            </p>
            <p style={{fontSize:"30px"}}>
            O que começou como um Trabalho de Conclusão de Curso evoluiu para parcerias estratégicas, participação em grandes feiras de tecnologia e o processo de obtenção de patente. Nossa missão é oferecer soluções inteligentes para reduzir emissões de gases industriais, unindo tecnologia IoT e responsabilidade ambiental.            </p>
            <p style={{fontSize:"30px"}}>
            Bem-vindo ao Ecosynergy, onde inovação e sustentabilidade caminham juntas!            </p>
        </div>
        <div style={{paddingTop:"15vh", paddingLeft:"5vw", paddingRight:"3vw"}}>
            <div style={{display:"flex", flexDirection:"row",justifyContent:"center", alignItems:"center", gap:"2vw", marginBottom:"5vh"}}>
            <div style={{display:"flex", flexDirection:"column", }}>
        <div style={{backgroundColor:"#00372B", width:"13vw", height:"18vw", color:"white",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"40px",textAlign:"center", padding:"1vw",boxShadow:  "10px 10px 5px #aaaaaa",borderRadius:"15px"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{backgroundImage:`url(${Anderson})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"13vw", height:"15vw",marginTop:"-1vw", borderRadius:"15px"}}></div>
        <span style={{fontSize:"18px"}}>Anderson R.</span>
<span style={{fontSize:"15px"}}>
A cabeça do projeto, nosso desenvolvedor BackEnd</span>
        </div>

        </div>
        </div>
        <div style={{display:"flex", flexDirection:"column", }}>
        <div style={{backgroundColor:"#00372B", width:"13vw", height:"18vw", color:"white",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"40px",textAlign:"center", padding:"1vw",boxShadow:  "10px 10px 5px #aaaaaa",borderRadius:"15px"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{backgroundImage:`url(${Gabriel})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"13vw", height:"15vw",marginTop:"-1vw", borderRadius:"15px"}}></div>
        <span style={{fontSize:"18px"}}>Gabriel Ben</span>
<span style={{fontSize:"15px"}}>
Nosso desenvolvedor 
FrontEnd nato</span>
        </div>

        </div>
        </div>
        <div style={{display:"flex", flexDirection:"column", }}>
        <div style={{backgroundColor:"#00372B", width:"13vw", height:"18vw", color:"white",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"40px",textAlign:"center", padding:"1vw",boxShadow:  "10px 10px 5px #aaaaaa",borderRadius:"15px"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{backgroundImage:`url(${Lucas})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"13vw", height:"15vw",marginTop:"-1vw", borderRadius:"15px"}}></div>
        <span style={{fontSize:"18px"}}>Lucas Farias    </span>
<span style={{fontSize:"15px"}}>
A mente documentadora, nosso 
livro ambulante</span>
        </div>

        </div>
        </div>
            </div>
            <div style={{display:"flex", flexDirection:"row",justifyContent:"center", alignItems:"center", gap:"2vw"}}>
            <div style={{display:"flex", flexDirection:"column", }}>
        <div style={{backgroundColor:"#00372B", width:"13vw", height:"18vw", color:"white",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"40px",textAlign:"center", padding:"1vw",boxShadow:  "10px 10px 5px #aaaaaa",borderRadius:"15px"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{backgroundImage:`url(${Luigi})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"13vw", height:"15vw",marginTop:"-1vw", borderRadius:"15px"}}></div>
        <span style={{fontSize:"18px"}}>Luigi Melari</span>
<span style={{fontSize:"15px"}}>
Desiner comunicador, deu 
vida ao projeto</span>
        </div>

        </div>
        </div>
        <div style={{display:"flex", flexDirection:"column", }}>
        <div style={{backgroundColor:"#00372B", width:"13vw", height:"18vw", color:"white",justifyContent:"center",alignItems:"center",display:"flex",fontSize:"40px",textAlign:"center", padding:"1vw",boxShadow:  "10px 10px 5px #aaaaaa",borderRadius:"15px"}}>
        <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{backgroundImage:`url(${Rafael})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", width:"13vw", height:"15vw",marginTop:"-1vw", borderRadius:"15px"}}></div>
        <span style={{fontSize:"18px"}}>Rafael Guerra</span>
<span style={{fontSize:"15px"}}>
Pai do nosso protótipo e desenvolvedor Mobile</span>
        </div>

        </div>
        </div>

            </div>
        </div>
        </div>
        </div>
        <div style={{backgroundColor:"#00372B",width:"100vw", height:"50vh", display:"flex", flexDirection:"row"}}>
        <div style={{paddingLeft:"10vw", paddingTop:"15vh",width:"40vw"}}>
        <div style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
        <img src={logoSemFUNDO} style={{width:"10vw"}}alt="" />
        <span style={{color:"white", fontSize:"60px",fontWeight:"bold", marginLeft:"15px"}}>ECOSYNERGY</span>
        </div>
        <div>
            <p style={{color:"white", width:"30vw"}}>
            ETEC Lauro Gomes, Av. Pereira Barreto, 400 - Baeta Neves, São Bernardo do Campo - SP, 09751-000
            </p>
            <p style={{color:"white"}}>
            +55 11 99023-8074
            </p>
            <p style={{color:"white"}}>

            contato@ecosynergy.com.br
            </p>
        </div>
        </div>
        <div style={{width:"60vw", gap:"10vw", justifyContent:"center", alignItems:"center", display:"flex", flexDirection:"row"}}>
        <img src={logoSemFUNDO} style={{width:"10vw"}}alt="" />
        <img src={Etec} style={{width:"10vw"}}alt="" />
        </div>
        </div>
        <div style={{width:"100vw", height:"10vh", backgroundColor:"#D9D9D9",display:"flex", justifyContent:"center", alignItems:"center"}}>
        <span>Copyright ©2024 Ecosynergy. Todos os direitos reservados.</span>
        </div>
            </> 
  


    )
}
export default Home