export function Button(props){
    return(
    <button style={props.style} className="buttonlogin" id={props.id} onClick={props.func}>{props.text}</button>
    )
}