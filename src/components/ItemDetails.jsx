import "../styles/ItemDetailsStyles.css"
import img4 from "../images/image-4.png"
import { useLocation, useParams } from "react-router"
import { useEffect, useState } from "react";
import { getProductDetails } from "../services/product.service";

function ItemDetails(props) {

    const query = new URLSearchParams(useLocation().search)
    const id = query.get("id")
    const [item, setItem] = useState([]);
    let myCart =[];
    useEffect(() => {
        (async () => {
            const response = await getProductDetails(id)
            setItem(response.data.product);
            console.log(response.data.product)
        })()
    }, [id])


    if(localStorage.getItem("cart")!=null){
        myCart = JSON.parse(localStorage.getItem("cart"));
      }
      else{
        myCart = []
      }

      const addToCartHandler = () =>{
        let isInCart = false
          for(let i = 0;i<myCart.length;i++){
            //   if(e.target.id === "addToCartBtn"){
            //   if(!myCart.includes(pageProducts[i].getAttribute("product-id"))){
          
            //     myCart.push(pageProducts[i].getAttribute("product-id"));
            //     localStorage.setItem("cart",JSON.stringify(myCart));
            //   }
            //   else{
            //     alert("Item already in cart");
            //   }
            //   }

            if(myCart[i].id === id){
                myCart[i].quantity++;
                isInCart = true;
            }
            
          }
          if(!isInCart){
            myCart.push({
                id : id,
                quantity : 1,
            })
          }
          localStorage.setItem("cart",JSON.stringify(myCart));
      }
    



    return (
        <main className="item">
            <div className="img-container">
                <img src={item.img} alt="" />
            </div>
            <div className="info-container">
                <div className="item-name">
                    <h2>{item.title}</h2>
                </div>
                <div className="item-price">
                    <p>price: </p>
                    <p>{`$${item.price}`}</p>
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
                    <button onClick={addToCartHandler}>ADD TO CART</button>
                </div>
            </div>
        </main>
    )
}

export { ItemDetails }