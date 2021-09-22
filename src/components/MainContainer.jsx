import "../styles/MainContainerStyles.css"
import { CardItem } from "./CardItem";

import { useEffect, useState } from "react";
import { getAllProducts } from "../services/product.service";

function MainContainer(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getAllProducts()
            setProducts(response.data.products);
        })()
    }, [])
    return (
        <main className="main-container">
                <div className="items">
                
                    {products.map((product, index) => (
                        <CardItem 
                        key={product._id}
                        id={product._id}
                        img={product.img}
                        name={product.title}
                        price={product.price}/>
            ))}
                </div>
        </main>
    )
}

export { MainContainer }