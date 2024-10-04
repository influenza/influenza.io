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
  const [teamNames, setTeamNames] = useState([]);
  const [idTeam, setidTeam] = useState([]); // Use o useState para armazenar os nomes das equipes
  function handleButtonReject(res) {
    const headers = {
      headers: {
        "Authorization": `Bearer ${Cookies.get().Token}`
      }
    };
    const clickedIndex = res.target.id; // Captura o valor do botão clicado
    console.log(idTeam[clickedIndex]);
    fetch(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/invite/v1/decline/${idTeam[clickedIndex]}`,{ 
      method: "PUT",
      headers:{ 
        "Authorization": `Bearer ${Cookies.get().Token}`,
        "Content-Type": "application/json" // Defina o tipo de conteúdo como JSON
      }
    }).then((res) => {console.log(res)})
  }
  
function handleButtonAccept(res){
  const headers = {
    headers: {
      "Authorization": `Bearer ${Cookies.get().Token}`
    }
  };
  
  console.log(headers)
  const clickedIndex = res.target.id; // Captura o valor do botão clicado
  fetch(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/invite/v1/accept/${idTeam[clickedIndex]}`,{ 
    method: "PUT",
    headers:{ 
      "Authorization": `Bearer ${Cookies.get().Token}`,
      "Content-Type": "application/json" // Defina o tipo de conteúdo como JSON
    }
  }).then((res) => {console.log(res)})
}
  useEffect(() => {
    const fetchTeamNames = async () => {
      const headers = {
        headers: {
          "Authorization": `Bearer ${Cookies.get().Token}`
        }
      };
      try {
        console.log(Cookies.get().ID)
        const res = await axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/invite/v1/pending/recipient/${Cookies.get().ID}`, headers)
        console.log(res.data)
        if(idTeam.length == 0){
          res.data.map( async (res, index) =>{
            idTeam.push(res.id)
            console.log(index)
          })
        }

        console.log(idTeam)
        const promises = res.data.map(async invite => {
          const teamRes = await axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/id/${invite.teamId}`, headers)
          return teamRes.data.name;
        });

        const fetchedTeamNames = await Promise.all(promises);
        setTeamNames(fetchedTeamNames); // Atualize o estado com os nomes das equipes
      } catch (error) {
        console.error("Error fetching team names:", error);
      }
    };

    fetchTeamNames(); // Chame a função assíncrona
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", backgroundImage: `url('${fundo}')`, width: "100vw", height: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionX: "center", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div style={{ display: "flex", flexDirection: "row", width: "100vw" }}>
          <div style={{ width: "40vw", display: "flex", alignItems: "center", textAlign: "left", justifyContent: "left", marginRight: "20px", fontSize: "20px" }}>
            <div style={{ width: "50vw", display: "flex", alignItems: "center", textAlign: "left", justifyContent: "left", marginRight: "20px", marginTop: "-50vh", fontSize: "20px" }}>
              <img src={`${logo}`} style={{ width: "150px", height: "150px", marginRight: "20px" }} alt="" />
              <img src={`${letraverde}`} style={{ width: "150px", height: "150px" }} alt="" />
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "white", width: "35vw", borderRadius: "17px", boxShadow: "4px 4px 4px 3px rgba(0, 0, 0, 0.2)", height: "40vh", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          <p style={{ fontSize: "30px", fontWeight: "bold" }}>Solicitações de equipe</p>
          <div style={{ backgroundColor: "#d3d3d3", width: "25vw", height: "25vh", borderRadius: "20px", overflow: "hidden", overflowY: "scroll" }}>
            {teamNames.length > 0 ? (
              teamNames.map((item, index) => (
                <div key={index} style={{backgroundColor:"rgb(239, 239, 239)", height:"4vh",justifyContent:"space-around",alignItems:"center",display:"flex"}}> {/* Adiciona a key para cada item */}
                 {item} <button id={index} onClick={handleButtonAccept} style={{border:"2px solid black", borderRadius:"3px",backgroundColor:"#3AB110"}}>
<svg id={index} width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
<button  id={index} onClick={handleButtonReject} style={{border:"2px solid black", borderRadius:"3px",backgroundColor:"rgb(255, 99, 0)"}}>
<svg  id={index}width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729"/>
</svg>
</button>
                </div>
              ))
            ) : (
              <p>Sem solicitações no momento</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default EntrarEqui;
