import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts, getProductDetails } from "../services/product.service";
import CartBody from "./CartBody";
import { cartStorage } from "../storage/cartStorage";
import "../styles/CartStyles.css";
export function Cart(props) {
  const [products, setProducts] = useState([]);
  const cart = cartStorage.getCart();

  async function fetchProductDetails() {
    let cartProducts = [];
    for (let i = 0; i < cart.length; i++) {
      try {
        const response = await getProductDetails(cart[i].id);
        const product = response.data.product;
        product.quantity = cart[i].quantity;
        product.price = product.price * product.quantity;
        // setProducts([...products, product]);

        cartProducts.push(product);
      } catch (error) {
        console.log(error);
      }
    }
    setProducts(cartProducts);
  }

  useEffect(() => {
    fetchProductDetails();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     for (let i = 0; i < cart.length; i++) {
  //       try {
  //         const response = await getProductDetails(cart[i].id);
  //         const product = response.data.product;
  //         product.quantity = cart[i].quantity;
  //         product.price = product.price * product.quantity;
  //         console.log(product);
  //         setProducts([...products,product]);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }

  //     console.log(products);
  //   })();
  // },[products]);

  return (
    <div className="cart-body">
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
              quantity={product.quantity}
            />
          ))}
        </tbody>
      </table>
      <button>place order</button>
    </div>
  );
}
