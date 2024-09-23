import Login from "./App";
import { Link } from "react-router-dom";

import "./Home.css";
import axios from "axios";
import { Button } from "./button";
function Home(){


    return(         
        <>      
        <div id="navbar" style={{display:"flex",flexDirection:"row"}} >
        <div style={{ width:"50%", height:"100%",  display:"flex",flexDirection:"column",justifyContent:"center",backgroundColor:"rgb(20, 181, 122)"}}> 
           <span style={{fontWeight:"bold", fontSize:"26px"}}>Crie sua conta!</span>
           <div id="mdhomespanAnt21" style={{fontSize:"20px"}} >   <p>É antigo na plataforma? entre em sua conta </p>

            <div style={{display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center", marginTop:"20px",marginBottom:"20px"}}>

            </div>
            <Link to="/login"> 
            <Button text="Login"  ></Button>
            </Link>
            </div>
            </div>


            <div style={{ width:"50%", height:"100%",  display:"flex",flexDirection:"column",justifyContent:"center"}}> 
           <span style={{fontWeight:"bold",fontSize:"26px" }}>Crie sua conta!</span>
           <div id="mdhomespanAnt21"  >   <p>É novo na plataforma? crie sua conta </p>

            <div style={{display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center", marginTop:"20px",marginBottom:"20px"}}>

            </div>
            <Link to="/cadastro2"> 
            <Button text="Cadastro"  ></Button>
            </Link>
            </div>
            </div>
            </div>
            </> 
  


    )
}
export default Home