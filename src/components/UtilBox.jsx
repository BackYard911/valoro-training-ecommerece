import '../styles/UtilBoxStyles.css'

function UtilBox(props){
    let type;
    if(props.img)
    {
        type="img";
    }
    else if(props.text){
        type="text";
    }

    return(
        <div className={`${type}-util-box`}>
        
        {props.img ?
        <img src={props.img} alt=""></img>
        : `$${props.text}`}
        
        </div>
    )
}
export {UtilBox}