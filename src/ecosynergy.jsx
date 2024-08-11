export function Ecosynergy(props){
    let style1 = {
        backgroundColor:"green"
    }
    let style2= {
        backgroundColor:"grey"
    }
    let style3= {
        backgroundColor:"grey"
    } 
    let style4 = {
        backgroundColor:"grey"
    } 
        if(props.bolas == 2){
             style1 = {
                backgroundColor:"green"
            }
             style2 = {
                backgroundColor:"green"
            }
             style3 = {
                backgroundColor:"grey"
            }
            style4 = {
                backgroundColor:"grey"
            }
        }
            else if(props.bolas == 3){
                 style1 = {
                    backgroundColor:"green"
                }
                 style2 = {
                    backgroundColor:"green"
                }
                 style3 = {
                    backgroundColor:"green"
                }
                style4 = {
                    backgroundColor:"grey"
                }
            }
            else if(props.bolas == 4){
                style1 = {
                   backgroundColor:"green"
               }
                style2 = {
                   backgroundColor:"green"
               }
                style3 = {
                   backgroundColor:"green"
               }
               style4 = {
                   backgroundColor:"green"
               }
           }
            const numbers = [1];
            for (var i = 1; i < numbers[0]; i++) {
                numbers.push(i);
                console.log(numbers)
            }

    return(
    <div id='con' style={props.style}>
    <div id='form'> <p className="EcoIconLetter" style={{ marginLeft:"20px"}}>Ecosynergy</p>
    <div id="bolas">
    {props.bola != false && 
    
    <div style={{display:"flex",flexDirection:"row"}}>
        {props.qbolas>3 ? 
        
            <div style={{display:'flex',flexDirection:"row"}}>
        <div className='bolha' id="bola1" style={style1}></div>
        <div className='bolha'id="bola2" style={style2}></div>
        <div className='bolha'id="bola3" style={style3}></div>
                { numbers.map( (number) => 
                <div className='bolha' id="bola1" style={style4}></div>
            ) }
            </div>
             : <div style={{display:"flex",flexDirection:"row"}}>
        <div className='bolha' id="bola1" style={style1}></div>
        <div className='bolha'id="bola2" style={style2}></div>
        <div className='bolha'id="bola3" style={style3}></div>
             </div>
        }

    </div>
    }
    </div>
    <div/>
    <div id="filhos">{props.children}</div>
    </div>
    </div>
    )
}