import '../styles/CardItemStyles.css'
import {Link} from 'react-router-dom'
function CardItem(props) {
    return (
        <div className="product-item">

            <div className="image-wrapper">
                <div className="product-overlay">
                    <Link to={`/item?id=${props.id}`}>Learn More</Link>
                </div>
                <img className="product-image" src={props.img} alt="img"></img>
            </div>
            <div className="product-info">
                <p className="product-name">{props.name}</p>
                <p className="product-price">{`$${props.price}`}</p>
            </div>
        </div>
    )
}
export { CardItem }