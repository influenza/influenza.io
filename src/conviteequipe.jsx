import Cookies from 'js-cookie'
export default function Convite(props){
return(
    <div style={{width:"25vw", height:"5vh", backgroundColor:"#efefef", display:"flex", flexDirection:"row",justifyContent:"space-around", textAlign:"center", alignItems:"center"}}>
            <span>Equipe: {props.equipe}</span>

            <button style={{borderRadius:"10px", width:"5vw", height:"3vh"}}>Aceitar</button>
            <button style={{width:"40px", height:"40px", borderRadius: "50%", display:"flex", justifyContent:"center", alignItems:"center"}}>
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="35px" height="35px" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2455 5106 c-83 -20 -146 -56 -211 -120 -65 -66 -105 -137 -123 -224
-16 -75 -16 -3099 0 -3174 18 -87 58 -158 123 -223 179 -178 455 -178 631 -1
65 66 105 138 124 224 16 75 16 3098 0 3174 -18 86 -58 158 -123 224 -114 114
-267 158 -421 120z"/>
<path d="M2455 886 c-83 -20 -146 -56 -211 -120 -177 -178 -177 -455 0 -631
179 -178 455 -178 631 -1 178 179 178 454 1 632 -114 114 -267 158 -421 120z"/>
</g>
</svg>
</button>

        </div>
)
}