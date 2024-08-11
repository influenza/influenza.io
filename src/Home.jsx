import Login from "./App";
import { Link } from "react-router-dom";

import "./Home.css";
import axios from "axios";
import { Button } from "./button";
function Home(){


    return(         
        <>      
        <div id="navbar" style={{display:"flex",flexDirection:"row"}} >
            <div style={{backgroundColor:"#14B57A", width:"50%", height:"100%",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"row"}}> 
            <div style={{ width:"50%", height:"100%",  display:"flex",flexDirection:"column",justifyContent:"center"}}> 
           <span style={{fontWeight:"bold", fontSize:"40px"}}>Entre em sua conta!</span>
           <div >   <p>É velho na plataforma? entre com sua conta </p>

            

            <Link to="/login"> 
            <Button text="Ir ao Login" style={{width:"200px"}} ></Button>
            </Link>
            </div>
            </div>
            </div>


            <div style={{ width:"50%", height:"100%",  display:"flex",flexDirection:"column",justifyContent:"center"}}> 
           <span style={{fontWeight:"bold", fontSize:"40px"}}>Crie sua conta!</span>
           <div >   <p>É novo na plataforma? crie sua conta abaixo</p>
            <p>Ou use uma de sua conta Google ou Github</p>

            <div style={{display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center", marginTop:"20px",marginBottom:"20px"}}>
            <div style={{backgroundColor:"#e9ecef", borderRadius:"50%", width:"100px", height:"100px", justifyContent:"center", alignItems:"center", display:"flex",marginRight:"40px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M326.331 274.255v109.761h181.49c-7.37 47.115-54.886 138.002-181.49 138.002-109.242 0-198.369-90.485-198.369-202.006 0-111.509 89.127-201.995 198.369-201.995 62.127 0 103.761 26.516 127.525 49.359l86.883-83.635C484.99 31.512 412.741-.012 326.378-.012 149.494-.012 6.366 143.116 6.366 320c0 176.884 143.128 320.012 320.012 320.012 184.644 0 307.256-129.876 307.256-312.653 0-21-2.244-36.993-5.008-52.997l-302.248-.13-.047.024z"/></svg>
            </div>

<div style={{backgroundColor:"#e9ecef", borderRadius:"50%", width:"100px", height:"100px", justifyContent:"center", alignItems:"center", display:"flex"}}>
<svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#1B1F23"/>
</svg>            </div>
            </div>
            <Link to="/cadastro2"> 
            <Button text="Ir ao cadastrar" style={{width:"200px"}} ></Button>
            </Link>
            </div>
            </div>
            </div>
            </> 
  


    )
}
export default Home