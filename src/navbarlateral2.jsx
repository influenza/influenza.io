


import "./Login.css"
import { Button } from './button'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import fundo from "./image.png"
import logo from "./logo.png"
import letraverde from "./letraverde.png"
import { useEffect, useState } from 'react';
import "./Login.css";
import axios from 'axios';
import { Ecosynergy } from './ecosynergy';
import { Input } from './input';
import jsCookie from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom'

function Navbar2(props) {
  const [idarr, setarr] = useState(['','','','','']);
  let navigate=useNavigate()

const divs = document.getElementsByClassName("navbar")
idarr[props.es]="chosen"
return (
    <div style={{backgroundColor:"#d5bdaf",fontSize:"30px", width:"8vw", display:"flex",flexDirection:"column",gap:"9vh",alignItems:"center",justifyContent:"center",textAlign:"center",height:"100vh", justifyContent:"space-around",position:"fixed",overflow:"hidden"}}>
    <div id={idarr[0]} onClick={()=>{navigate("/equipevisao")}} style={{width:"4vw",borderRadius:"0.8vw", height:"6vh",justifyContent:"center",display:"flex",alignItems:"center"}} className="navbar" >
<svg fill="#000000" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 486.196 486.196" xml:space="preserve">
<g>
	<path d="M481.708,220.456l-228.8-204.6c-0.4-0.4-0.8-0.7-1.3-1c-5-4.8-13-5-18.3-0.3l-228.8,204.6c-5.6,5-6,13.5-1.1,19.1
		c2.7,3,6.4,4.5,10.1,4.5c3.2,0,6.4-1.1,9-3.4l41.2-36.9v7.2v106.8v124.6c0,18.7,15.2,34,34,34c0.3,0,0.5,0,0.8,0s0.5,0,0.8,0h70.6
		c17.6,0,31.9-14.3,31.9-31.9v-121.3c0-2.7,2.2-4.9,4.9-4.9h72.9c2.7,0,4.9,2.2,4.9,4.9v121.3c0,17.6,14.3,31.9,31.9,31.9h72.2
		c19,0,34-18.7,34-42.6v-111.2v-34v-83.5l41.2,36.9c2.6,2.3,5.8,3.4,9,3.4c3.7,0,7.4-1.5,10.1-4.5
		C487.708,233.956,487.208,225.456,481.708,220.456z M395.508,287.156v34v111.1c0,9.7-4.8,15.6-7,15.6h-72.2c-2.7,0-4.9-2.2-4.9-4.9
		v-121.1c0-17.6-14.3-31.9-31.9-31.9h-72.9c-17.6,0-31.9,14.3-31.9,31.9v121.3c0,2.7-2.2,4.9-4.9,4.9h-70.6c-0.3,0-0.5,0-0.8,0
		s-0.5,0-0.8,0c-3.8,0-7-3.1-7-7v-124.7v-106.8v-31.3l151.8-135.6l153.1,136.9L395.508,287.156L395.508,287.156z"/>
</g>
</svg></div>
    <div id={idarr[1]} onClick={()=>{navigate("/perfil")}} style={{width:"4vw",borderRadius:"0.8vw", height:"6vh",justifyContent:"center",display:"flex",alignItems:"center"}}  className="navbar" >
    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="7" r="5" stroke="#000000" stroke-width="2"/>
<path d="M17 14H17.3517C18.8646 14 20.1408 15.1266 20.3285 16.6279L20.719 19.7519C20.8682 20.9456 19.9374 22 18.7344 22H5.26556C4.06257 22 3.1318 20.9456 3.28101 19.7519L3.67151 16.6279C3.85917 15.1266 5.13538 14 6.64835 14H7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>    
    <div id={idarr[2]} onClick={()=>{navigate("/dashboard")}} style={{width:"4vw",borderRadius:"0.8vw", height:"6vh",justifyContent:"center",display:"flex",alignItems:"center"}}  className="navbar" ><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5V19C4 19.5523 4.44772 20 5 20H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 9L13 13.9999L10.5 11.4998L7 14.9998" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>    
    <div id={idarr[3]}onClick={()=>{navigate("/tabela")}} style={{width:"4vw",borderRadius:"0.8vw", height:"6vh",justifyContent:"center",display:"flex",alignItems:"center"}}  className="navbar"><svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9.5H21M3 14.5H21M8 4.5V19.5M6.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V7.7C21 6.5799 21 6.01984 20.782 5.59202C20.5903 5.21569 20.2843 4.90973 19.908 4.71799C19.4802 4.5 18.9201 4.5 17.8 4.5H6.2C5.0799 4.5 4.51984 4.5 4.09202 4.71799C3.71569 4.90973 3.40973 5.21569 3.21799 5.59202C3 6.01984 3 6.57989 3 7.7V16.3C3 17.4201 3 17.9802 3.21799 18.408C3.40973 18.7843 3.71569 19.0903 4.09202 19.282C4.51984 19.5 5.07989 19.5 6.2 19.5Z" stroke="#000000" stroke-width="2"/>
</svg></div>
    <div id={idarr[4]} onClick={()=>{navigate("/listausuarios")}}style={{width:"4vw",borderRadius:"0.8vw", height:"6vh",justifyContent:"center",display:"flex",alignItems:"center"}}  className="navbar">
        

    <svg fill="#000000" width="40px" height="40px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" class="icon">
  <path d="M824.2 699.9a301.55 301.55 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"/>
</svg>
    </div>
    <div id={idarr[5]} onClick={()=>{navigate("/Enviar")}}style={{width:"4vw",borderRadius:"0.8vw", height:"6vh",justifyContent:"center",display:"flex",alignItems:"center"}}  className="navbar">
        

    
<svg fill="#000000" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<g>
	<g>
		<path d="M503.037,116.9H143.412c-4.95,0-8.963,4.013-8.963,8.963v260.273c0,4.95,4.013,8.963,8.963,8.963h280.663
			c4.95,0,8.963-4.013,8.963-8.963c0-4.95-4.013-8.963-8.963-8.963H166.869l121.955-109.147l28.423,25.438
			c1.702,1.523,3.839,2.284,5.977,2.284c2.138,0,4.276-0.761,5.977-2.284l28.419-25.434l121.952,109.143h-25.619
			c-4.95,0-8.963,4.013-8.963,8.963c0,4.95,4.013,8.963,8.963,8.963h49.084c4.95,0,8.963-4.013,8.963-8.963V125.863
			C512,120.913,507.987,116.9,503.037,116.9z M323.224,274.757l-86.268-77.204c-3.688-3.301-9.355-2.988-12.656,0.702
			c-3.301,3.689-2.988,9.355,0.702,12.657l50.381,45.087L152.375,366.088V145.915l49.783,44.553c1.71,1.531,3.846,2.284,5.974,2.284
			c2.461,0,4.912-1.007,6.682-2.985c3.301-3.689,2.988-9.355-0.702-12.656l-47.245-42.281h312.713L323.224,274.757z
			 M494.074,366.094L371.062,256.001l123.011-110.088V366.094z"/>
	</g>
</g>
<g>
	<g>
		<path d="M102.775,148.446h-69.91c-4.95,0-8.963,4.013-8.963,8.963c0,4.95,4.013,8.963,8.963,8.963h69.91
			c4.95,0,8.963-4.013,8.963-8.963C111.738,152.459,107.725,148.446,102.775,148.446z"/>
	</g>
</g>
<g>
	<g>
		<path d="M108.75,273.925H44.816c-4.95,0-8.963,4.013-8.963,8.963c0,4.95,4.013,8.963,8.963,8.963h63.934
			c4.95,0,8.963-4.013,8.963-8.963C117.714,277.938,113.7,273.925,108.75,273.925z"/>
	</g>
</g>
<g>
	<g>
		<path d="M84.848,220.148H8.963c-4.95,0-8.963,4.013-8.963,8.963s4.013,8.963,8.963,8.963h75.885c4.95,0,8.963-4.013,8.963-8.963
			S89.798,220.148,84.848,220.148z"/>
	</g>
</g>
<g>
	<g>
		<path d="M84.848,345.628h-7.351c-4.95,0-8.963,4.013-8.963,8.963c0,4.95,4.013,8.963,8.963,8.963h7.351
			c4.95,0,8.963-4.013,8.963-8.963C93.812,349.641,89.798,345.628,84.848,345.628z"/>
	</g>
</g>
<g>
	<g>
		<path d="M47.62,345.628H8.963c-4.95,0-8.963,4.013-8.963,8.963c0,4.95,4.013,8.963,8.963,8.963H47.62
			c4.95,0,8.963-4.013,8.963-8.963C56.583,349.641,52.57,345.628,47.62,345.628z"/>
	</g>
</g>
</svg>
        </div>
</div>    
  )
}

export default Navbar2