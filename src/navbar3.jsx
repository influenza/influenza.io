import { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
export function Navbar3(props) {
    let navigate = useNavigate();
    const [Equi, SetEqui] = useState([]);
    const [EquiSelect, SetEquiSelect] = useState(0);
    const [Notificacao, SetNotificacao] = useState(false);
    const [EquiSelectindex, SetEquiSelectindex] = useState(false);
    function handleNavigate(){  
        navigate("/Enviar")
    }
  
    useEffect(() => {
        const headers = {
            headers: {
                "Authorization": `Bearer ${Cookies.get().Token}`
            }
        };
        console.log(Cookies.get().ID)
        axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/user/${Cookies.get().ID}`, headers)
            .then(res => {
                console.log(res.data[EquiSelect])
                Cookies.set("IndexEqui",EquiSelect)
                Cookies.set("NomeEqui2",res.data[EquiSelect].name)
                Cookies.set("NomeEquiID",res.data[EquiSelect].id)

                console.log(Cookies.get())
                SetEqui(res.data);
                
            });
    }, []);

    return (
        <>
        <div id="mdnav1equihome" >
            <div id="mdnav11equihome">
                <div >
                    <span onClick={() => { navigate("/equipevisao") }}> Home</span>
                </div>
                <span>
                    <select  id={EquiSelect} className="SelectEqui" onChange={(e)=>{
                            console.log(e.target.value)
                            SetEquiSelect(e.target.value)
                            }}  >
                        <option value="">Workspace</option>
                        {Equi.map((linha, index) => (
                            <option key={linha.id} value={index} >{linha.name}</option>
                        ))}
                    </select>
                </span>
            </div>
            <div  id="mdnav12equihome">
                <button onClick={handleNavigate} id="mdbtnconequihome">
                    <svg width="20px" height="20px" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 7.5C19 11.6421 15.6421 15 11.5 15C7.35786 15 4 11.6421 4 7.5C4 3.35786 7.35786 0 11.5 0C15.6421 0 19 3.35786 19 7.5Z" fill="white" />
                        <circle cx="11.5" cy="7.5" r="4.5" fill="#3AB110" />
                        <path d="M0 26C0 22.5522 1.2116 19.2456 3.36827 16.8076C5.52494 14.3696 8.45001 13 11.5 13C14.55 13 17.4751 14.3696 19.6317 16.8076C21.7884 19.2456 23 22.5522 23 26L11.5 26H0Z" fill="white" />
                        <path d="M3.00001 26C3.00001 23.3478 3.89554 20.8043 5.4896 18.9289C7.08366 17.0536 9.24567 16 11.5 16C13.7543 16 15.9164 17.0536 17.5104 18.9289C19.1045 20.8043 20 23.3478 20 26L11.5 26H3.00001Z" fill="#3AB110" />
                    </svg>
                    Convide
                </button>

                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="30px" height="30px" viewBox="0 0 1280.000000 1278.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <metadata>
                        Created by potrace 1.15, written by Peter Selinger 2001-2017
                    </metadata>
                    <g transform="translate(0.000000,1278.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M7235 12766 c-16 -8 -42 -26 -56 -42 -14 -16 -153 -267 -309 -559
                            -156 -291 -298 -553 -316 -582 -53 -84 -49 -83 -328 -94 l-247 -11 -53 26
                            c-53 26 -59 34 -416 549 -200 287 -373 536 -386 553 -29 39 -80 64 -132 64
                            -43 0 -1174 -376 -1213 -403 -58 -41 -70 -89 -59 -235 24 -296 71 -892 81
                            -1029 l12 -153 -29 -57 c-28 -55 -38 -64 -234 -200 -113 -78 -221 -147 -240
                            -153 -82 -24 -92 -21 -736 246 -661 274 -642 267 -720 232 -38 -18 -781 -942
                            -796 -990 -8 -29 -8 -48 0 -77 8 -25 152 -223 402 -552 338 -446 391 -521 401
                            -564 14 -65 14 -65 -116 -375 -115 -277 -141 -316 -219 -344 -23 -8 -324 -66
                            -671 -128 -660 -118 -663 -119 -707 -179 -52 -70 -181 -1268 -139 -1293 6 -4
                            293 -110 637 -236 344 -126 640 -238 657 -248 66 -38 81 -81 141 -413 31 -169
                            56 -328 56 -355 0 -31 -9 -65 -23 -91 -15 -29 -167 -177 -492 -479 -259 -240
                            -479 -451 -490 -467 -13 -21 -19 -47 -18 -81 0 -46 25 -97 255 -544 141 -271
                            268 -506 283 -522 14 -15 45 -33 68 -39 39 -11 87 -2 667 129 654 148 677 151
                            750 117 39 -19 504 -499 532 -549 38 -70 36 -90 -66 -488 -235 -917 -230 -897
                            -217 -940 6 -22 22 -51 34 -65 12 -14 242 -149 511 -300 443 -249 494 -275
                            535 -275 27 0 59 8 76 18 17 11 230 222 475 471 245 249 461 461 482 471 73
                            39 93 37 459 -45 189 -42 355 -83 368 -92 69 -45 73 -54 286 -694 201 -603
                            207 -619 245 -653 22 -20 55 -38 77 -42 91 -17 658 19 1020 65 164 21 199 38
                            227 113 9 24 75 322 146 662 86 406 137 630 149 650 39 62 68 77 373 193 329
                            126 371 135 444 96 18 -10 248 -191 510 -403 263 -212 491 -393 508 -403 22
                            -13 45 -17 83 -14 51 3 62 11 349 228 583 441 638 484 657 511 11 14 22 48 24
                            75 5 44 -15 102 -227 658 -128 336 -235 626 -237 645 -10 69 13 112 173 332
                            86 117 166 224 178 236 35 39 95 65 151 64 27 0 326 -30 663 -67 l612 -66 43
                            19 c23 11 50 28 60 39 14 16 364 954 422 1131 22 65 8 120 -43 172 -20 21
                            -268 208 -551 416 -508 373 -514 378 -539 433 l-25 55 12 215 c16 281 18 294
                            55 348 30 43 53 56 613 337 321 161 590 299 599 306 22 19 54 85 54 112 0 42
                            -259 1217 -275 1248 -9 17 -32 41 -53 55 -42 27 1 24 -1013 89 -389 25 -396
                            27 -455 83 -43 41 -223 380 -230 434 -4 27 0 60 8 84 8 22 162 289 342 593
                            314 528 328 554 328 602 -1 27 -7 60 -14 74 -13 25 -850 884 -898 921 -15 12
                            -45 21 -80 23 l-57 4 -564 -313 c-310 -172 -582 -319 -604 -327 -69 -24 -114
                            -9 -300 95 -188 105 -208 120 -237 177 -26 50 -25 37 -49 751 -20 590 -21 611
                            -43 655 -37 75 36 53 -984 296 -172 40 -323 74 -335 74 -12 -1 -35 -7 -52 -14z
                            m-385 -2650 c275 -36 503 -87 740 -166 1259 -416 2223 -1500 2484 -2792 57
                            -283 70 -419 70 -748 1 -310 -4 -386 -45 -635 -192 -1169 -955 -2197 -2024
                            -2725 -405 -200 -755 -305 -1245 -372 -153 -21 -711 -17 -880 5 -874 119
                            -1636 499 -2230 1113 -849 878 -1212 2088 -990 3300 146 797 579 1558 1196
                            2103 609 537 1352 856 2169 930 151 14 608 6 755 -13z" />
                    </g>
                </svg>
                <svg onClick={()=>{
                    if(Notificacao == true){
                        SetNotificacao(false)
                    }else{
                        SetNotificacao(true)
                    }
                }} width="30px" height="35px" viewBox="0 0 48 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 47.5V42.5H12V25C12 21.5417 12.8333 18.4792 14.5 15.8125C16.1667 13.1042 18.3333 11.3333 21 10.5V8.75C21 7.70833 21.2833 6.83333 21.85 6.125C22.45 5.375 23.1667 5 24 5C24.8333 5 25.5333 5.375 26.1 6.125C26.7 6.83333 27 7.70833 27 8.75V10.5C29.6667 11.3333 31.8333 13.1042 33.5 15.8125C35.1667 18.4792 36 21.5417 36 25V42.5H40V47.5H8ZM24 55C22.9 55 21.95 54.5208 21.15 53.5625C20.3833 52.5625 20 51.375 20 50H28C28 51.375 27.6 52.5625 26.8 53.5625C26.0333 54.5208 25.1 55 24 55ZM16 42.5H32V25C32 22.25 31.2167 19.8958 29.65 17.9375C28.0833 15.9792 26.2 15 24 15C21.8 15 19.9167 15.9792 18.35 17.9375C16.7833 19.8958 16 22.25 16 25V42.5Z" fill="black" />
                </svg>
            </div>
        </div>
        <div style={{ height:"0.0001px", justifyContent:"center",display:"flex", gap:"80vw" }}>
            <div></div>
            {Notificacao && 
                <div style={{    backgroundColor: "#FFFBFB", zIndex:"1", width:"20vw",   height:"92vh",}}>a</div>
            }
     </div>
        </>
    );
}
