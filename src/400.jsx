import { useState } from 'react'
import "./404.css"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
function BadRequest () {
  const svgString = `<?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="512px" height="512px" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g><path style="opacity:0.958" fill="#000000" d="M 402.5,-0.5 C 410.5,-0.5 418.5,-0.5 426.5,-0.5C 460.819,7.65288 481.986,28.9862 490,63.5C 494.52,93.5094 483.686,115.843 457.5,130.5C 477.609,158.601 477.442,186.601 457,214.5C 451.268,220.068 445.101,225.068 438.5,229.5C 444.152,235.652 449.985,241.652 456,247.5C 470.447,267.841 473.447,289.841 465,313.5C 457.747,328.253 446.913,339.587 432.5,347.5C 442.28,379.324 433.946,405.158 407.5,425C 382.42,439.398 357.753,438.731 333.5,423C 305.695,396.195 278.195,369.028 251,341.5C 237.833,354.667 224.667,367.833 211.5,381C 204.598,384.564 197.931,384.231 191.5,380C 163.305,352.139 135.472,323.972 108,295.5C 105.831,289.686 106.165,284.019 109,278.5C 122.167,265.333 135.333,252.167 148.5,239C 120.972,211.805 93.8051,184.305 67,156.5C 50.3333,130.833 50.3333,105.167 67,79.5C 87.1442,55.3352 112.311,48.0019 142.5,57.5C 160.13,26.3568 186.463,14.8568 221.5,23C 227.56,24.8636 233.226,27.5302 238.5,31C 245.984,37.6498 253.317,44.4831 260.5,51.5C 280.021,21.6005 307.021,11.7672 341.5,22C 347.992,24.743 353.992,28.243 359.5,32.5C 368.931,14.968 383.264,3.96799 402.5,-0.5 Z M 411.5,29.5 C 439.667,32.4995 456,47.9995 460.5,76C 459.663,91.0351 451.996,100.368 437.5,104C 430.754,104.121 424.087,104.788 417.5,106C 409.719,111.351 407.552,118.518 411,127.5C 418.636,136.137 426.636,144.47 435,152.5C 444.288,167.823 443.121,182.323 431.5,196C 427.669,199.419 423.335,202.086 418.5,204C 412.039,204.827 405.705,206.16 399.5,208C 392.06,214.265 390.56,221.765 395,230.5C 408.363,243.529 421.363,256.862 434,270.5C 443.267,291.364 438.1,307.53 418.5,319C 412.893,320.61 407.226,321.943 401.5,323C 394.512,326.81 391.678,332.644 393,340.5C 397.068,346.913 400.735,353.579 404,360.5C 408.037,385.733 397.371,400.4 372,404.5C 364.969,403.934 358.469,401.767 352.5,398C 265.667,311.167 178.833,224.333 92,137.5C 81.4406,118.297 84.9406,102.131 102.5,89C 111.078,84.3397 120.078,83.3397 129.5,86C 136.421,89.2653 143.087,92.932 149.5,97C 157.356,98.3218 163.19,95.4885 167,88.5C 169.564,62.591 183.731,50.4243 209.5,52C 212.993,52.9419 216.326,54.2752 219.5,56C 233.138,68.6372 246.471,81.6372 259.5,95C 269.372,99.9479 277.205,97.7812 283,88.5C 283.008,72.2998 289.842,60.1331 303.5,52C 315.343,46.8808 326.676,47.8808 337.5,55C 344.833,62.3333 352.167,69.6667 359.5,77C 369.093,82.7538 377.259,81.2538 384,72.5C 385.212,65.913 385.879,59.2464 386,52.5C 389.346,38.9813 397.846,31.3146 411.5,29.5 Z M 169.5,261.5 C 189.762,280.094 209.429,299.428 228.5,319.5C 220.167,328.5 211.5,337.167 202.5,345.5C 182.833,326.5 163.5,307.167 144.5,287.5C 152.855,278.813 161.188,270.146 169.5,261.5 Z"/></g>
  <g><path style="opacity:0.929" fill="#000000" d="M 59.5,240.5 C 74.4578,238.959 81.2911,245.625 80,260.5C 74.3863,270.791 66.2197,273.291 55.5,268C 46.7044,257.279 48.0377,248.113 59.5,240.5 Z"/></g>
  <g><path style="opacity:0.946" fill="#000000" d="M 50.5,297.5 C 55.449,296.959 60.1156,297.792 64.5,300C 73.0487,310.214 81.2154,320.714 89,331.5C 92.9592,344.523 88.2925,352.189 75,354.5C 71.9883,354.274 69.155,353.441 66.5,352C 58.3059,342.44 50.4726,332.607 43,322.5C 37.3222,311.519 39.8222,303.185 50.5,297.5 Z"/></g>
  <g><path style="opacity:0.975" fill="#000000" d="M 155.5,511.5 C 113.5,511.5 71.5,511.5 29.5,511.5C 23.7649,508.239 20.5982,503.239 20,496.5C 19.3333,465.167 19.3333,433.833 20,402.5C 20.4469,395.434 23.9469,390.601 30.5,388C 71.8333,387.333 113.167,387.333 154.5,388C 158.709,389.187 161.876,391.687 164,395.5C 165.646,430.44 165.98,465.44 165,500.5C 163.401,505.594 160.234,509.261 155.5,511.5 Z M 50.5,418.5 C 78.5,418.5 106.5,418.5 134.5,418.5C 134.5,439.5 134.5,460.5 134.5,481.5C 106.5,481.5 78.5,481.5 50.5,481.5C 50.5,460.5 50.5,439.5 50.5,418.5 Z"/></g>
  <g><path style="opacity:0.982" fill="#000000" d="M 288.5,511.5 C 260.5,511.5 232.5,511.5 204.5,511.5C 200.521,509.685 197.688,506.685 196,502.5C 195.333,478.833 195.333,455.167 196,431.5C 197.5,427.333 200.333,424.5 204.5,423C 232.5,422.333 260.5,422.333 288.5,423C 292.667,424.5 295.5,427.333 297,431.5C 298.635,454.103 298.968,476.77 298,499.5C 296.806,505.181 293.64,509.181 288.5,511.5 Z M 226.5,452.5 C 240.167,452.5 253.833,452.5 267.5,452.5C 267.5,462.167 267.5,471.833 267.5,481.5C 253.833,481.5 240.167,481.5 226.5,481.5C 226.5,471.833 226.5,462.167 226.5,452.5 Z"/></g>
  </svg>
  
`;
  return (
    <>
    <div style={{display:"flex"}}>
    <div id='conerrorIV' style={{ width:"50vw",height:"100vh",  display:"flex",flexDirection:"column", alignItems:"center",textAlign:"center", justifyContent:"center"}}>
    <p id='IV' style={{ width:"600px", fontSize:"60px"}}>Erro 400 Bad Request</p>
    <div style={{justifyContent:"center", alignItems:"center", justifyContent:"center", display:"flex", flexDirection:"column"}}><p id='IVerror' style={{fontSize:"40px", width:"550px"}}>  O servidor não conseguiu entender a solicitação devido o pedido de acesso ser inválido, clique no botao abaixo para ser redirecionado a pagina principal</p>
    <Link to={"/"}><button style={{marginTop:"40px",width:"150px", height:"50px", borderRadius:"10px", fontSize:"20px"}}id='IVvoltar'>clique aqui</button></Link></div>
a


    </div>
    <div style={{width:"50vw", backgroundColor:"#14B57A", height:"100vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
    <div dangerouslySetInnerHTML={{ __html: svgString }} />

    </div>
    </div>
    </>
  )
}

export default BadRequest
