import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts, getProductDetails } from "../services/product.service";
import CartBody from "./CartBody";
import { cartStorage } from "../storage/cartStorage";

export function Cart(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const cart = cartStorage.getCart();
      console.log(cart);
      for (let i = 0; i < cart.length; i++) {
        try {
          const response = await getProductDetails(cart[i].id);
          const product = response.data.product;
          product.quantity = cart[i].quantity;
          product.price = product.price * product.quantity;
          console.log(product);
          setProducts([...products,product]);
        } catch (error) {
          console.log(error);
        }
      }

      console.log(products);
    })();
  }, [products]);
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
              price={product.price}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
