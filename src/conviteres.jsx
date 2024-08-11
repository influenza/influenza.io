import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { Input } from "./input";
import { Button } from "./button";
export function Convinteres(props){
    const [imageperfil, setImageperfil] = useState(null);

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
        <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{backgroundColor:"", width:"18vw", height:"100vh",display:'grid', justifyContent:"center"}}>
                <div style={{marginTop:"30px"}}>{Cookies.get().NomeEqui}</div>
                <div style={{fontSize:"30px",marginLeft:"10px", display:"flex", flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"10px"}}>
                    <xml version="1.0" encoding="iso-8859-1"/>
<svg style={{marginRight:"20px"}} fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="60px" height="60px" viewBox="0 0 495.398 495.398"
	 xml:space="preserve">
<g>
	<g>
		<g>
			<path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
				v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
				c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
				c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"/>
			<path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
				c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
				c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"/>
		</g>
	</g>
</g>
</svg><Link to="/equipevisao">Visão geral</Link></div>
                <div style={{fontSize:"30px",marginLeft:"10px", display:"flex", flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"10px"}}>
                    
                <xml version="1.0" encoding="iso-8859-1"/>

<svg style={{marginRight:"20px"}} fill="#000000" height="60px" width="60px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 297.114 297.114" xml:space="preserve">
<g>
	<path d="M247.869,56.499L193.586,2.197C192.179,0.791,190.271,0,188.282,0H54.549c-4.143,0-7.5,3.357-7.5,7.5v282.114
		c0,4.143,3.357,7.5,7.5,7.5h188.016c4.143,0,7.5-3.357,7.5-7.5V61.802C250.065,59.813,249.275,57.906,247.869,56.499z
		 M224.462,54.302h-28.681v-28.69L224.462,54.302z M62.049,282.114V15h118.732v46.802c0,4.143,3.357,7.5,7.5,7.5h46.783v212.813
		H62.049z"/>
	<path d="M211.228,94.039h-78.34c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h78.34c4.143,0,7.5-3.357,7.5-7.5
		S215.371,94.039,211.228,94.039z"/>
	<path d="M101.553,94.039h-8.167v-8.173c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v15.673c0,4.143,3.357,7.5,7.5,7.5h15.667
		c4.143,0,7.5-3.357,7.5-7.5S105.696,94.039,101.553,94.039z"/>
	<path d="M211.228,141.057h-78.34c-4.143,0-7.5,3.357-7.5,7.5c0,4.143,3.357,7.5,7.5,7.5h78.34c4.143,0,7.5-3.357,7.5-7.5
		C218.728,144.414,215.371,141.057,211.228,141.057z"/>
	<path d="M101.553,141.057h-8.167v-8.172c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v15.672c0,4.143,3.357,7.5,7.5,7.5h15.667
		c4.143,0,7.5-3.357,7.5-7.5C109.053,144.414,105.696,141.057,101.553,141.057z"/>
	<path d="M211.228,188.075h-78.34c-4.143,0-7.5,3.357-7.5,7.5c0,4.143,3.357,7.5,7.5,7.5h78.34c4.143,0,7.5-3.357,7.5-7.5
		C218.728,191.433,215.371,188.075,211.228,188.075z"/>
	<path d="M101.553,188.075h-8.167v-8.172c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v15.672c0,4.143,3.357,7.5,7.5,7.5h15.667
		c4.143,0,7.5-3.357,7.5-7.5C109.053,191.433,105.696,188.075,101.553,188.075z"/>
	<path d="M211.228,235.094h-78.34c-4.143,0-7.5,3.357-7.5,7.5c0,4.143,3.357,7.5,7.5,7.5h78.34c4.143,0,7.5-3.357,7.5-7.5
		C218.728,238.451,215.371,235.094,211.228,235.094z"/>
	<path d="M101.553,235.094h-8.167v-8.173c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v15.673c0,4.143,3.357,7.5,7.5,7.5h15.667
		c4.143,0,7.5-3.357,7.5-7.5C109.053,238.451,105.696,235.094,101.553,235.094z"/>
</g>
</svg><Link to="/listausuarios">Lista de membros</Link></div>
                <div style={{fontSize:"30px",marginLeft:"10px", display:"flex", flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"10px"}}>
                    
                <xml version="1.0" encoding="UTF-8"/>
<svg style={{marginRight:"20px"}} width="60px" height="60px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>invite_line</title>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="black">
        <g id="Contact" transform="translate(-864.000000, 0.000000)">
            <g id="invite_line" transform="translate(864.000000, 0.000000)">
                <path  d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero">

</path>
                <path fill="black" d="M17,3 C18.597725,3 19.903664,4.24892392 19.9949075,5.82372764 L20,6 L20,10.3501 L20.5939,10.0862 C21.2076,9.813435 21.9162954,10.2366962 21.9931452,10.8836127 L22,11 L22,19 C22,20.0543909 21.18415,20.9181678 20.1492661,20.9945144 L20,21 L4,21 C2.94563773,21 2.08183483,20.18415 2.00548573,19.1492661 L2,19 L2,11 C2,10.3284056 2.6746366,9.85267997 3.29700147,10.045194 L3.40614,10.0862 L4,10.3501 L4,6 C4,4.40232321 5.24892392,3.09633941 6.82372764,3.00509271 L7,3 L17,3 Z M20,12.5388 L12.8123,15.7333 C12.2951,15.9631 11.7049,15.9631 11.1877,15.7333 L4,12.5388 L4,19 L20,19 L20,12.5388 Z M17,5 L7,5 C6.44772,5 6,5.44772 6,6 L6,11.239 L12,13.9057 L18,11.239 L18,6 C18,5.44772 17.5523,5 17,5 Z M12,8 C12.5523,8 13,8.44772 13,9 C13,9.51283143 12.613973,9.93550653 12.1166239,9.9932722 L12,10 L10,10 C9.44772,10 9,9.55228 9,9 C9,8.48716857 9.38604429,8.06449347 9.88337975,8.0067278 L10,8 L12,8 Z" id="形状" >

</path>
            </g>
        </g>
    </g>
</svg>
                    <Link to="/registroconvite">Convinte</Link></div>
                <div style={{fontSize:"30px",marginLeft:"10px", display:"flex", flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:"10px"}}>
                <xml version="1.0" standalone="no"/>

<svg version="1.0" xmlns="http://www.w3.org/2000/svg" style={{marginRight:"10px"}}
 width="60px" height="60px" viewBox="0 0 1280.000000 1280.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M6150 12790 c-41 -5 -147 -13 -235 -20 -1963 -142 -3768 -1206 -4858
-2865 -590 -898 -950 -1955 -1027 -3015 -6 -85 -15 -199 -21 -253 -12 -125
-12 -349 0 -474 6 -54 15 -168 21 -253 117 -1619 880 -3169 2095 -4259 1058
-949 2393 -1520 3785 -1621 85 -6 199 -15 253 -21 125 -12 349 -12 474 0 54 6
168 15 253 21 1726 125 3353 975 4461 2330 821 1004 1326 2268 1419 3550 6 85
15 199 21 253 5 54 9 160 9 237 0 77 -4 183 -9 237 -6 54 -15 168 -21 253
-132 1827 -1075 3535 -2560 4640 -963 717 -2135 1154 -3320 1240 -85 6 -199
15 -253 21 -113 10 -377 10 -487 -1z m625 -1341 c855 -62 1738 -368 2457 -850
145 -97 238 -169 238 -182 0 -16 -7071 -7087 -7087 -7087 -7 0 -36 33 -66 73
-363 491 -657 1114 -817 1728 -114 439 -160 811 -161 1280 -1 565 78 1045 260
1589 357 1063 1037 1966 1942 2577 404 273 805 472 1259 624 656 219 1285 299
1975 248z m3708 -2051 c363 -492 657 -1115 817 -1729 114 -439 160 -811 161
-1280 1 -565 -78 -1045 -260 -1589 -322 -960 -908 -1790 -1692 -2397 -687
-531 -1529 -889 -2394 -1017 -312 -47 -798 -62 -1104 -36 -881 76 -1729 371
-2443 851 -145 97 -238 169 -238 182 0 16 7071 7087 7087 7087 7 0 36 -33 66
-72z"/>
</g>
</svg>

                    <Link to="/banimento">Banimento</Link></div>

            </div>
            <div style={{justifyContent:"center",alignItems:"center", display:"flex",flexDirection:"column", width:"86vw"}}>
                <div style={{backgroundColor:"#DDD9CE", width:"86vw", height:"100vh", justifyContent:"center",alignItems:"center", display:"flex",flexDirection:"column",}}>
                
                <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}>
                
                <div style={{textAlign:"left", justifyContent:"left", display:"flex"}}>

                </div>
                    <div style={{justifyContent:"space-between",alignItems:"center",display:"flex", flexDirection:"row", width:"66vw"}}>
                        
                    <p style={{fontSize:"40px"}}>Perfil </p>
                <Button type="button" text ="Redefinir dados" style={{fontSize:"30px",width:"230px"}}></Button>

                    </div>
                    <div style={{justifyContent:"center", textAlign:"center", alignItems:"center", display:"flex"}}>

                    </div>
                    <div style={{backgroundImage: `url(${imageperfil})`, backgroundSize:"cover", backgroundPositionX:"center", backgroundPositionY:"center", backgroundColor:"#14B57A", width:"350px", height:"350px", borderRadius: "50%",justifyContent:"space-around", display:"flex"}}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <label htmlFor="image_uploads" style={{backgroundColor:"gray", width:"80px", height:"80px", borderRadius: "50%", justifyContent:"center", alignItems:"center", textAlign:"center", display:"flex", fontSize:"30px", overflow: "hidden" }}>  
                            <input
                                onChange={handleImageChange}
                                type="file"
                                id="image_uploads"
                                name="image_uploads"
                                accept=".jpg, .jpeg, .png"
                                multiple
                                style={{display: "none"}}
                            />
                            +
                        </label>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <div style={{fontSize:"30px",marginTop:"20px",marginBottom:"20px"}}>Nome:{Cookies.get().Nome}</div>
              <div style={{fontSize:"30px",fontSize:"30px",marginTop:"20px",marginBottom:"20px"}}>Nacionalidade:{Cookies.get().Nacionalidade}</div>
              <div style={{fontSize:"30px",fontSize:"30px",marginTop:"20px",marginBottom:"20px"}}>Genero:{Cookies.get().Genero}</div>
              <div style={{fontSize:"30px",fontSize:"30px",marginTop:"20px"}}>Cargos:{Cookies.get().Cargos}</div>
               </div>
                </div>
            </div>
        </div>
    );
}
