


import React, { useEffect, useState } from 'react'
import "./Login.css"
import axios from 'axios'
import { Button } from './button'
import { Link } from 'react-router-dom'
import { Ecosynergy } from './ecosynergy'
import { Input } from './input'
import jsCookie from 'js-cookie'
import Cookies from 'js-cookie'
import fundo from "./image.png"
import logo from "./logo.png"
import letraverde from "./letraverde.png"
import { Navigate, useNavigate } from 'react-router-dom'
import Convite from './conviteequipe'

function EntrarEqui() {
 
  return (
    <>

    <div style={{display:"flex", flexDirection:"column", backgroundImage: `url('${fundo}')`, width:"100vw", height:"100vh", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionX:"center",backgroundPositionY:"", justifyContent:"center",alignItems:"center",textAlign:"center"}}>
    <div style={{display:"flex",flexDirection:"row", width:"100vw",}}>
<div style={{width:"40vw", display:"flex", alignItems:"center", textAlign:"left",justifyContent:"left", marginRight:"20px", fontSize:"20px"}}>  
<div style={{width:"50vw", display:"flex", alignItems:"center", textAlign:"left",justifyContent:"left", marginRight:"20px", marginTop:"-50vh",fontSize:"20px"}}>  
<img src={`${logo}`} style={{width:"150px", height:"150px", marginRight:"20px"}} alt="" />
  <img src={`${letraverde}`} style={{width:"150px", height:"150px"}} alt="" /></div>

</div>

    </div>
    <div style={{backgroundColor:"white", width:"35vw", borderRadius:"17px",boxShadow:"4px 4px 4px 3px rgba(0, 0, 0, 0.2)",  height:"40vh", display:"flex", justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
        <p style={{fontSize:"30px",fontWeight:"bold"}}>Solicitações de equipe</p>
    <div style={{backgroundColor:"#d3d3d3", width:"25vw",height:"25vh", borderRadius:"20px",overflow:"hidden",overflowY:"scroll"}}>
        <Convite ></Convite>
    </div>
    </div>
    
          </div>
    </>
  )
}

export default EntrarEqui
