import '../styles/UtilBoxStyles.css'
import {Link} from 'react-router-dom'

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
        : <Link to="/cart" >${props.text}$</Link>}
        
        </div>
    )
}
export {UtilBox}