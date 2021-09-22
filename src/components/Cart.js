import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/product.service";
import CartBody from "./CartBody";

export  function Cart(props) {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await getAllProducts()
            setProducts(response.data.products);
            console.log(response.data.products)
        })()
    }, [])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {products.map((product, index) => (
                        <CartBody 
                        key={product._id}
                        id={product._id}
                        img={product.img}
                        name={product.title}
                        price={product.price}/>
            ))}
        </tbody>
      </table>
    </div>
  );
}

