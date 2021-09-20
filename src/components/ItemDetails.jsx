import "../styles/ItemDetailsStyles.css"
import img4 from "../images/image-4.png"

function ItemDetails(props) {

    return (
        <main className="item">
            <div className="img-container">
                <img src={img4} alt="" />
            </div>
            <div className="info-container">
                <div className="item-name">
                    <h2>cool dress</h2>
                </div>
                <div className="item-price">
                    <p>price: </p>
                    <p>$399</p>
                </div>
                <div className="item-variations">
                    <div className="item-colors">
                        <p>color: </p>
                        <p>RED | BLUE</p>
                    </div>
                    <div className="item-sizes">
                        <p>size: </p>
                        <p>S | M | L</p>
                    </div>
                </div>
                <div className="add-to-cart">
                    <button>ADD TO CART</button>
                </div>
            </div>
        </main>
    )
}

export { ItemDetails }