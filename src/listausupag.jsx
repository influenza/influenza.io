import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./tabela.css";
import Cookies from "js-cookie";
import { Input } from "./input";
import { Button } from "./button";
import InputPer from "./inputper";
import Navbar from "./navbarlateral";
import Navbar2 from "./navbarlateral2";
import { Navbar3 } from "./navbar3";
import { Navbar4 } from "./Navbar4";
import axios from "axios";

export function Listausupag(props) {
  const [shift, setShift] = useState(false);
  const [filter, setFilter] = useState("");
  const [filterSelect, setFilterSelect] = useState("");
  const [arro, setArro] = useState([]);
  const [linhas, setLinhas] = useState([]);
  const [filterID, setFilterId] = useState(null);
  const [filterNome, setFilterNome] = useState(null);
  const [ultimoclick, setultimoclick] = useState(null);
  const [idMap, setIdMap] = useState({});
  const [response2, setResponse2] = useState()
  const [indexEqui, Setindexequi] = useState(document.getElementsByClassName("SelectEqui")[0])
  const [IDmembers, setIDmembers] = useState()
  const [Roles, setRoles] = useState()
  const [Datapages, setDatapages] = useState([])
  const [umaVez, setumaVez] = useState(true)
  let url = window.location.pathname.replace("/listausuarios/","")
  let navigate=useNavigate()

  if(umaVez){
    if(Cookies.get().NumeroEqui.split(",").length >= 2){
      let pages = 18/2
      console.log(pages)
      for (let index = 0; index <  pages; index++) {
        if(index != 0){
          Datapages.push(index)

        }
      }
      setumaVez(false)
    }
  }

  
  console.log(Cookies.get().IndexEqui)
  let [iddict,setIddict]=useState([])
  function handleindexEqui(e){
    console.log(e)
  Setindexequi(e)
  return(e)
  }
  
  let id = 0
  const headers = {
    headers: {
      "Authorization": `Bearer ${Cookies.get().Token}`
    }
  };

  useEffect(() => {
    

    fetchUsers();
  }, []);
  const fetchUsers = async () => {


    try {
      let idmembers=[]
      let Rolemembers=[]
      console.log(headers)
      console.log(Cookies.get().ID)
      const response = await axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/user/${Cookies.get().ID}`, headers).then(res=>{

          console.log("element")
          console.log(res.data[Cookies.get().IndexEqui].members)
          console.log(indexEqui)
          res.data[indexEqui].members.forEach(element => {
          console.log(element)
          idmembers.push(element.id)
          if(element.role == "COMMON_USER"){
            Rolemembers.push("Membro")
          }else{
            Rolemembers.push("ADM")

          }
        });
        setIDmembers(idmembers)
        setRoles(Rolemembers)
      })
      console.log(idmembers)
      console.log(idmembers)
      const userPromises = idmembers.map(id => axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/user/v1/findId/${id}`, headers));
      console.log(userPromises)
      const userResponses = await Promise.all(userPromises);
      console.log(userResponses)

      const userDetails = [];
      const newIdMap = {};
      let counter = 0;

      userResponses.forEach((res) => {
        newIdMap[counter] = res.data.id;
        userDetails.push({
          id: counter,
          email: res.data.email,
          nome: res.data.username,
          roles: Rolemembers[counter]// Use the first role if available
        });
        counter++;
      });

      setIdMap(newIdMap);
      setLinhas(userDetails);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers()
    const intervalId = setInterval(() => {
      console.log("a");
      Setindexequi(document.getElementsByClassName("SelectEqui")[0].id);
    }, 2000);
  
    // Limpeza do intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, [indexEqui]);
  

  const CargosDict = { "Membro":["Gerente","Gestor"],
    "Gestor":["Membro","Gerente"],
    "Membros":["Membro","Gestor"]
   }
   const CargosDict2 = { 
    "Membro":"ADM",
    "ADM":"Membro"
   }
   function handleChangeRoles(e){
    if(CargosDict2[e.target.value] != "Membro"){
    axios.put(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/${Cookies.get().NomeEquiID}/user/${IDmembers[e.target.className]}`, {"role":"COMMON_USER"} , headers ).then(res=>console.log(res))
    }else{
    axios.put(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/${Cookies.get().NomeEquiID}/user/${IDmembers[e.target.className]}`, {"role":"ADMINISTRATOR"} , headers ).then(res=>console.log(res))
    }
  }
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter(value);
    
    if (isNaN(parseInt(value))) {
      setFilterNome(value);
      setFilterId(null);
    } else {
      setFilterId(value);
      setFilterNome(null);
    }
  };
  document.addEventListener("keydown",(e)=>{
    if(e.key == "Shift"){
     setShift(true)
    }
 })


document.addEventListener("keyup",(e)=>{
    if(e.key == "Shift"){
     setShift(false)
    }
 })
 const handlecheck = (e) => {
  const valormax = parseInt(e.target.value);
  const updatedArro = [...arro];
  
  // Verifique se o ID não está presente em iddict
  if (!iddict.includes(e.target.id)) {
    // Adicione o ID a iddict
    iddict.push(e.target.id);
  } else {
    // Encontre o índice do ID no array iddict
    const index = iddict.indexOf(e.target.id);
    if (index !== -1) {
      // Remova o ID do array iddict
      iddict.splice(index, 1);
    }
  }
  
  // Verifique os resultados no console

};

  const handleCheck = (e) => {
    const valormax = parseInt(e.target.value);
    const updatedArro = [...arro];
    if (!iddict.includes(e.target.id)) {
      // Adicione o ID a iddict
      iddict.push(e.target.id);
    } else {
      // Encontre o índice do ID no array iddict
      const index = iddict.indexOf(e.target.id);
      if (index !== -1) {
        // Remova o ID do array iddict
        iddict.splice(index, 1);
      }
    }
    console.log(iddict)

    
    for (let i = 0; i < linhas.length; i++) {
      const check = document.getElementById(`${i}`);
      updatedArro[i] = check.checked;
    }

    if (shift) {
      for (let index = 0; index < valormax; index++) {
        if (updatedArro[index]) {
          for (let j = 0; j < valormax; j++) {
            if (j > ultimoclick) {
              const check = document.getElementById(`${j}`);
              check.checked = true;
            }
          }
        }
      }
    } else {
      setultimoclick(valormax);
    }

    setArro(updatedArro);
  };

  const sortedLinhas = [...linhas].sort((a, b) => {
    if (filterSelect === "IDdecre") return b.id - a.id;
    if (filterSelect === "Alfa") return a.nome.localeCompare(b.nome);
    if (filterSelect === "Alfadecre") return b.nome.localeCompare(a.nome);
    return a.id - b.id;
  });
  return (
    <>
           <Navbar3 funcEqui={handleindexEqui}></Navbar3>
         <div style={{display:"flex", flexDirection:"row", overflow:"hidden"}}>
          
          <Navbar4 es={3}></Navbar4>
              <div style={{  display:"flex",flexDirection:"row",backgroundColor:"#f5ebe0", width:"92vw", height:"92vh", msScrollLimitXMax:"0px"}}>
              <div style={{justifyContent:"left",alignItems:"center",display:"flex",flexDirection:"column", width:"100vw"}}>
              <div style={{display:"flex", justifyContent:"center", gap:"65vw"}}>
              <p className="EcoIconLetter" style={{ fontSize:"30px",marginTop:"20px"}}>Tabela de funcionario</p>
              <span></span>

              </div>
<div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>

<div style={{background:"white", borderColor:"white",border:"1px solid black", height:"80vh"}}>
<div style={{gap:"35vw",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",margin:"20px", paddingBottom:"20px", borderBottom: "1px solid #F5F1ED"}}>
<div style={{fontSize:"28px", fontWeight:"bold"}}>
  Membros
</div>
<div style={{display:"flex", gap:"20px"}}>
<div style={{background:"#C2C2C2",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",textAlign:"center",height:"60px",width:"370px",borderRadius:"10px" }}>

<input style={{marginLeft:"20px",borderRadius:"10px", backgroundColor:"#C2C2C2", width:"300px"}} onChange={handleFilter} value={filterNome} placeholder="Pesquise dados do usuario" type="text" name="" id="selectfunc" />
<svg style={{marginRight:"20px",width:"40px"}}
version="1.0" xmlns="http://www.w3.org/2000/svg"
width="20px" height="20px" viewBox="0 0 1244.000000 1280.000000"
preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M4030 12780 c-330 -30 -522 -62 -785 -130 -619 -160 -1185 -453
-1700 -881 -129 -107 -407 -385 -514 -514 -567 -683 -904 -1468 -995 -2325
-37 -340 -41 -461 -22 -690 10 -118 24 -264 32 -325 105 -818 442 -1583 978
-2225 103 -124 344 -367 476 -482 590 -513 1294 -852 2063 -993 410 -75 943
-86 1362 -29 633 87 1285 335 1801 684 40 26 82 54 94 60 21 11 157 -122 2449
-2413 1931 -1930 2436 -2430 2476 -2450 78 -38 192 -69 239 -64 119 13 220 59
304 141 84 81 136 190 149 312 5 46 -25 161 -64 239 -20 40 -515 540 -2429
2455 -1322 1323 -2404 2408 -2404 2412 0 4 31 42 68 86 1076 1249 1350 3000
705 4511 -105 245 -218 454 -379 696 -491 740 -1196 1311 -2019 1634 -426 168
-769 245 -1290 291 -261 23 -337 23 -595 0z m735 -924 c652 -92 1208 -330
1715 -735 118 -95 337 -307 440 -426 757 -882 1013 -2057 694 -3175 -113 -395
-335 -829 -588 -1150 -697 -884 -1751 -1366 -2865 -1309 -1176 60 -2224 712
-2810 1746 -192 339 -337 766 -395 1163 -52 356 -45 765 19 1115 241 1311
1241 2374 2535 2695 175 44 348 72 575 94 94 9 575 -4 680 -18z"/>
</g>
</svg>
</div>
<div style={{display:"flex",flexDirection:"row",justifyContent:"center",background:"#0075E8", alignItems:"center",height:"60px",width:"270px", border:"1px solid black", borderRadius:"10px"}}>
<svg style={{rotate:"90deg",marginLeft:"20px", marginRight:"10px"}}  version="1.0" xmlns="http://www.w3.org/2000/svg"
width="20px" height="20px" viewBox="0 0 1280.000000 1209.000000"
preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,1209.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2488 12076 c-26 -8 -67 -25 -90 -39 -24 -14 -559 -542 -1190 -1174
-1299 -1300 -1202 -1190 -1202 -1358 -1 -81 3 -96 31 -155 20 -41 86 -129 175
-235 79 -93 575 -687 1102 -1320 527 -632 973 -1165 990 -1183 42 -45 151 -98
220 -106 70 -9 155 7 219 42 66 35 140 119 169 190 l23 57 5 995 5 995 4695 5
c3898 4 4702 7 4735 19 151 50 293 169 358 299 151 304 30 659 -274 802 -139
64 253 60 -4856 60 l-4653 0 -2 928 c-3 920 -3 927 -24 972 -33 71 -107 145
-178 180 -75 37 -182 48 -258 26z"/>
<path d="M10120 5574 c-105 -28 -186 -94 -237 -194 l-28 -55 -3 -927 -2 -928
-4643 0 c-3963 -1 -4654 -3 -4722 -15 -211 -37 -396 -203 -461 -412 -25 -81
-29 -200 -10 -286 45 -200 180 -357 373 -435 l68 -27 4700 -5 4700 -5 5 -995
5 -995 23 -57 c69 -172 267 -272 438 -224 121 35 118 31 791 838 345 414 850
1019 1121 1343 559 669 557 667 557 805 -1 64 -6 100 -24 145 -22 57 -73 110
-1170 1208 -630 631 -1166 1161 -1191 1177 -50 32 -145 60 -200 59 -19 0 -60
-7 -90 -15z"/>
</g>
</svg>
<select name="" id="" style={{background:"#0075E8",border:"0px", marginRight:"20px", width:"200px"}} onChange={(e)=>{
setFilterSelect(e.target.value)
}}>
<option value="">Ordenar por ID crescente</option>
<option value="IDdecre">Ordenar por ID decrecente</option>

<option value="Alfa">Ordem alfabetica crescente</option>
<option value="Alfadecre">Ordem alfabetica decrecente</option>



</select>
</div>
<div style={{backgroundColor:"#FF6300",height:"60px",width:"60px",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10px"}} onClick={()=>{
  for (let index = 0; index < iddict.length; index++) {
    console.log(idMap[iddict[index]])
    axios.delete(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/91/user/${idMap[iddict[index]]}`, headers)
  }
}}>
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="30px" height="30px" viewBox="0 0 946.000000 1280.000000"
preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M4645 12791 c-95 -11 -300 -57 -355 -81 -25 -10 -58 -21 -75 -25 -28
-6 -94 -29 -177 -63 -20 -8 -47 -26 -60 -39 -13 -14 -54 -41 -93 -60 -55 -28
-98 -63 -203 -167 -149 -146 -210 -227 -300 -397 -85 -160 -121 -303 -124
-490 -2 -128 -1 -137 26 -191 36 -76 98 -129 178 -154 96 -29 162 -23 248 22
121 63 144 106 179 330 17 109 27 145 65 225 38 79 58 108 133 184 83 84 97
95 234 163 163 82 267 109 455 119 148 8 390 -41 494 -100 19 -11 64 -36 100
-56 80 -44 207 -164 260 -245 63 -96 120 -291 120 -411 0 -47 59 -146 109
-183 126 -93 279 -87 407 16 113 91 128 195 73 492 -21 110 -68 243 -101 285
-10 13 -27 44 -38 68 -62 139 -185 278 -370 416 -167 125 -305 206 -382 226
-131 35 -199 55 -220 66 -72 39 -418 68 -583 50z"/>
<path d="M2385 12294 c-88 -13 -217 -28 -287 -34 -79 -6 -146 -17 -175 -29
-27 -10 -86 -26 -132 -36 -142 -29 -383 -117 -449 -164 -17 -11 -35 -21 -42
-21 -13 0 -91 -51 -136 -90 -17 -14 -79 -53 -138 -85 -83 -46 -122 -74 -175
-130 -73 -77 -81 -97 -81 -204 0 -71 46 -165 109 -224 49 -46 166 -95 197 -83
8 3 45 10 81 16 54 9 83 22 178 83 141 89 171 108 207 129 16 9 37 23 47 32
10 9 23 16 31 16 7 0 40 13 74 29 33 16 84 35 111 42 28 6 62 18 77 26 57 28
311 70 753 124 211 25 252 41 315 121 48 60 69 105 80 173 7 43 4 60 -21 125
-34 86 -91 148 -174 186 -44 21 -64 24 -170 23 -71 -1 -186 -11 -280 -25z"/>
<path d="M6795 12241 c-65 -29 -148 -111 -168 -167 -28 -81 -33 -164 -11 -224
26 -72 107 -160 170 -183 27 -10 143 -29 259 -42 366 -43 599 -82 710 -119 39
-13 99 -32 134 -42 62 -17 193 -87 237 -126 11 -10 25 -18 30 -18 5 0 45 -25
89 -56 111 -77 157 -99 252 -118 l81 -17 79 30 c97 38 132 72 173 170 68 166
14 303 -161 408 -44 26 -110 69 -147 96 -37 26 -70 47 -75 47 -5 0 -27 13 -50
29 -53 35 -282 147 -322 157 -16 4 -46 15 -65 24 -20 10 -83 28 -140 40 -58
12 -132 31 -165 41 -81 25 -299 59 -382 59 -38 0 -113 7 -168 15 -142 21 -309
19 -360 -4z"/>
<path d="M185 11106 c-28 -13 -63 -37 -77 -54 -37 -44 -74 -127 -86 -192 -6
-33 -13 -386 -17 -891 -7 -951 -12 -884 78 -965 89 -80 141 -104 224 -104 42
0 90 7 115 16 54 20 129 100 166 174 l27 55 9 873 c7 681 6 882 -3 914 -15 48
-94 136 -157 173 -37 22 -54 25 -136 25 -76 0 -102 -4 -143 -24z"/>
<path d="M9105 10914 c-133 -33 -210 -92 -252 -194 -17 -42 -18 -93 -18 -880
l0 -835 27 -55 c15 -30 33 -62 40 -71 23 -27 94 -67 159 -89 145 -49 304 23
372 168 l22 47 0 830 c0 805 -1 832 -20 885 -26 73 -102 149 -170 172 -56 19
-130 29 -160 22z"/>
<path d="M1389 10791 c-74 -15 -147 -88 -187 -190 -28 -72 -29 -75 -16 -150
29 -170 96 -224 404 -325 254 -84 586 -174 686 -186 43 -5 104 -16 134 -25 30
-8 75 -15 100 -15 25 0 92 -11 150 -25 58 -14 126 -25 152 -25 26 0 77 -6 115
-14 37 -8 118 -17 178 -21 61 -3 133 -11 160 -16 134 -25 1017 -48 1175 -30
111 13 817 34 1135 33 338 0 1001 -20 1090 -33 96 -13 316 -7 505 14 145 16
199 27 270 56 81 33 154 60 185 67 17 4 48 19 70 34 22 15 90 56 150 91 76 44
132 86 182 135 85 85 98 119 90 242 -7 116 -41 182 -121 236 -56 38 -64 40
-148 44 -127 6 -205 -24 -349 -134 -31 -24 -71 -50 -90 -58 -115 -49 -215 -80
-289 -90 -109 -14 -483 -13 -820 3 -315 15 -1595 8 -1700 -9 -42 -7 -220 -9
-495 -7 -531 5 -820 21 -1045 59 -36 6 -99 14 -140 18 -167 17 -263 33 -513
91 -71 16 -142 29 -160 29 -39 0 -331 84 -502 145 -71 25 -148 50 -170 55 -46
11 -134 11 -186 1z"/>
<path d="M1304 9797 c-67 -23 -104 -49 -138 -102 -60 -90 -61 -94 -61 -205 0
-96 2 -109 27 -150 56 -96 185 -160 472 -235 144 -38 188 -51 226 -68 45 -20
286 -77 326 -77 29 0 274 -49 359 -72 22 -5 78 -14 125 -18 47 -5 115 -13 153
-19 37 -6 97 -16 135 -21 37 -6 139 -18 227 -26 88 -8 228 -21 310 -29 83 -9
258 -20 390 -25 132 -6 290 -15 350 -21 71 -7 412 -9 960 -6 879 4 1474 18
1605 36 41 6 125 15 185 21 210 20 314 39 471 86 44 13 92 24 107 24 15 0 44
7 65 16 20 9 75 29 121 45 46 16 94 35 106 43 12 8 47 22 78 31 33 9 81 36
119 64 52 40 71 62 97 116 32 64 33 72 28 151 -7 125 -54 193 -172 250 -119
58 -184 49 -486 -69 -63 -25 -139 -48 -169 -52 -30 -4 -66 -12 -80 -18 -60
-24 -272 -55 -465 -67 -88 -6 -185 -15 -215 -21 -80 -16 -2152 -24 -2470 -10
-321 15 -555 28 -605 36 -22 3 -107 12 -190 20 -153 15 -258 28 -375 46 -36 6
-103 14 -150 19 -47 5 -101 14 -120 20 -19 5 -53 10 -76 10 -88 0 -858 188
-927 226 -85 47 -270 74 -343 51z"/>
<path d="M775 8683 c-87 -19 -190 -100 -226 -178 -18 -39 -19 -137 -19 -3158
0 -2641 2 -3123 14 -3150 17 -40 131 -152 169 -166 37 -14 207 -14 244 0 38
14 151 126 169 168 12 29 14 468 14 3150 0 3019 -1 3117 -19 3156 -29 63 -117
142 -184 165 -53 19 -115 24 -162 13z"/>
<path d="M2180 8635 c-25 -7 -56 -17 -70 -23 -42 -16 -132 -104 -151 -147 -18
-38 -19 -165 -19 -3298 0 -2914 2 -3262 15 -3295 25 -58 130 -159 188 -178 64
-21 187 -15 242 12 50 24 126 119 151 187 18 51 19 139 22 3232 2 2203 -1
3199 -8 3242 -15 87 -42 145 -90 192 -69 67 -194 101 -280 76z"/>
<path d="M8575 8550 c-106 -22 -167 -69 -216 -167 l-34 -68 0 -3080 0 -3080
28 -57 c54 -110 143 -163 277 -163 71 0 94 4 141 26 71 34 123 87 151 158 l23
56 3 3030 c2 2086 -1 3045 -8 3079 -17 80 -69 175 -113 207 -67 49 -177 74
-252 59z"/>
<path d="M6994 8321 c-130 -33 -210 -124 -234 -262 -8 -45 -10 -944 -8 -3099
l3 -3035 23 -57 c28 -68 110 -163 160 -183 46 -20 198 -20 243 -1 44 19 162
141 180 186 12 30 14 500 14 3130 0 3021 0 3096 -19 3143 -47 120 -234 211
-362 178z"/>
<path d="M3670 8244 c-90 -24 -139 -60 -192 -144 l-47 -75 0 -3255 -1 -3255
36 -55 c51 -78 102 -129 152 -151 60 -26 184 -26 244 0 59 26 151 124 174 186
18 48 19 147 19 3280 l0 3230 -23 49 c-68 146 -220 226 -362 190z"/>
<path d="M5284 8231 c-18 -4 -61 -24 -97 -44 -60 -34 -67 -42 -103 -114 l-39
-78 0 -3270 0 -3270 40 -80 c37 -75 44 -82 105 -117 111 -64 209 -67 320 -10
65 33 110 94 140 191 20 62 20 104 20 3280 0 2131 -4 3231 -11 3260 -13 58
-57 146 -88 178 -58 58 -204 96 -287 74z"/>
<path d="M8793 1631 c-97 -24 -183 -92 -248 -196 -11 -18 -58 -68 -105 -112
-64 -60 -110 -93 -184 -132 -55 -28 -104 -51 -109 -51 -6 0 -35 -12 -66 -26
-31 -14 -74 -35 -96 -45 -22 -10 -93 -32 -158 -49 -65 -16 -130 -36 -145 -44
-51 -27 -358 -95 -477 -107 -44 -4 -136 -19 -204 -33 -68 -14 -141 -26 -162
-26 -21 0 -68 -6 -106 -14 -37 -8 -122 -17 -188 -21 -66 -3 -155 -13 -199 -21
-43 -8 -100 -14 -128 -14 -27 0 -79 -5 -116 -10 -81 -13 -274 -27 -522 -40
-102 -5 -225 -14 -275 -20 -121 -15 -596 -33 -885 -33 -263 -1 -564 16 -686
38 -44 8 -103 15 -130 15 -27 0 -128 16 -224 35 -96 19 -322 64 -502 99 -180
36 -338 70 -350 77 -12 6 -62 22 -110 35 -224 60 -269 73 -350 103 -202 72
-255 90 -298 100 -25 7 -65 20 -90 31 -25 10 -72 28 -105 38 -64 22 -143 51
-270 102 -44 18 -114 44 -155 57 -41 13 -97 35 -125 48 -118 56 -194 88 -250
105 -33 9 -81 28 -105 40 -31 16 -68 25 -121 28 -67 4 -84 1 -132 -21 -66 -30
-139 -95 -173 -154 -19 -31 -27 -63 -31 -117 -6 -72 -4 -77 32 -143 20 -37 49
-81 63 -96 35 -37 130 -90 208 -116 33 -11 100 -36 148 -55 49 -20 94 -36 100
-36 6 0 38 -14 70 -30 33 -17 89 -39 125 -50 36 -12 76 -27 88 -35 12 -8 43
-19 69 -25 26 -6 70 -22 99 -35 28 -14 58 -25 66 -25 8 0 25 -9 39 -20 14 -11
32 -20 41 -20 27 0 359 -113 404 -137 11 -6 47 -16 80 -23 33 -7 72 -19 87
-26 15 -8 62 -23 105 -33 88 -22 192 -52 303 -87 41 -13 134 -35 205 -49 72
-14 155 -34 185 -45 30 -11 152 -38 270 -60 118 -22 234 -45 257 -50 23 -6 63
-10 90 -10 26 0 84 -7 128 -16 44 -8 125 -20 180 -25 55 -6 138 -14 185 -19
234 -25 580 -33 878 -21 439 19 574 26 812 46 118 9 240 19 270 21 30 1 111 8
180 14 69 6 206 17 305 25 99 8 200 19 225 24 25 6 70 10 100 11 30 0 73 5 95
10 22 5 88 14 146 20 58 5 148 19 200 30 52 12 132 25 179 30 87 9 275 46 411
80 42 11 109 26 150 35 41 8 94 24 119 34 25 11 90 32 145 47 55 15 116 35
135 44 19 10 55 23 80 30 43 11 172 71 197 91 6 6 40 25 75 43 150 79 185 100
225 137 23 21 49 39 56 39 16 0 218 214 264 279 61 87 76 129 77 216 1 73 -2
86 -36 155 -30 60 -47 80 -80 101 -89 53 -188 76 -255 60z"/>
</g>
</svg>

</div>

</div>
</div>




<div style={{display:"flex",flexDirection:"row", borderRadius:"10px", alignItems:"center", justifyContent:"center"}}>
      
      <div style={{ display:"flex",flexDirection:"column", textAlign:"center",alignItems:'center', marginRight:"20px", borderRadius:"10px", height:"55vh", overflow:"hidden",overflowY:"scroll", padding:"10px"}}>

      <table  style={{width:"80vw",}} >
  <thead  >
      <tr  >
        <th></th>
  <th>ID</th>
      <th>Nome</th>
  <th>E-mail</th>
  <th>Cargos</th>
      </tr>
  </thead>
  <tbody >
                        {sortedLinhas.map((linha, index) => {
                          const isVisible = filterID ? linha.id.toString().includes(filterID) : linha.nome.toUpperCase().includes(filterNome?.toUpperCase() || "");

                          return isVisible && (
                            <tr key={index}>
                              <td className="td">
                                <input id={`${linha.id}`} onClick={handleCheck} type="checkbox" value={index} />
                              </td>
                              <td className="td">{linha.id}</td>
                              <td className="td">{linha.nome}</td>
                              <td className="td">{linha.email}</td>
                              <td className="td"><select name="" id="SelectRoles" className={linha.id} onChange={handleChangeRoles} style={{backgroundColor:"transparent",borderRadius:"5px", border:"transparent"}}>
                                <option value={linha.roles}>{linha.roles}</option>
                                <option value={CargosDict2[linha.roles]}>{CargosDict2[linha.roles]}</option>
                                </select></td>
                            </tr>
                          );
                        })}
                     </tbody>
</table>

      </div>
      </div>



<div style={{borderTop:"1px solid #C3C3C3",  fontSize:"26px", display:"flex", justifyContent:"center", alignItems:"center",textAlign:'center',height:"100px",gap:"20px"}}>
<div style={{backgroundColor:"#BBD6F0",color:"#0075E8", width:"40px", height:"40px", justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center", }}>{"<"}</div>

<div onClick={()=>{
      navigate(`/listausuarios`)
    }} style={{backgroundColor:"#BBD6F0",color:"#0075E8", width:"40px", height:"40px", justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center", }}>1</div>
 {Datapages.map((res,index)=>{
  console.log(Datapages.length-1)
  console.log(index)
  if((Datapages.length) == index+1){
    return(
      <>
<div style={{backgroundColor:"#BBD6F0",color:"#0075E8", width:"40px", height:"40px", justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center", }}>{res+1}</div>
    <div style={{backgroundColor:"#BBD6F0",color:"#0075E8", width:"40px", height:"40px", justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center", }}>{`>`}</div>

</>
    )
  }else if(res+1 == parseInt(url)){
    return(
        <div onClick={()=>{
            navigate(`/listausuarios/${res+1}`)
          }} style={{backgroundColor:"#0075E8", width:"40px", height:"40px", justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center",color:"white", }}>{res+1}</div>

    )
  }
  else if(index<3){
    console.log(index)
    if(index == 2){
      return <>
    <div onClick={()=>{
      navigate(`/listausuarios/${res+1}`)
    }} style={{backgroundColor:"#BBD6F0",color:"#0075E8", width:"40px", height:"40px", justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center", }}>{res+1}</div>
    <span>...</span>
    </>
    }
    else{
      return <>
    <div onClick={()=>{
      navigate(`/listausuarios/${res+1}`)
    }}style={{backgroundColor:"#BBD6F0",color:"#0075E8", width:"40px", height:"40px", justifyContent:"center", display:"flex", textAlign:"center", alignItems:"center", }}>{res+1}</div>
    
    </>
    }
  }



  
  }
  )}

</div>
</div>

</div>
</div>
</div>          
           
      
         
          
                  </div>
                  

    </>
  );
}
