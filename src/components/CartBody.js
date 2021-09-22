import { useState } from "react";

function CartBody(props) {

  const [price,setPrice] = useState(props.price);
  const [quantity,setQuantity] = useState(props.quantity);


  function quantityChangeHandler(e){
    setQuantity(e.target.value);
    setPrice(e.target.value*(price/quantity));
  }


  return (
    <tr>
      <td>
        <img width="300px" height="400px" src={props.img} alt="img"></img>
      </td>
      <td>
        <p>{props.name}</p>
      </td>
      <td>
          <form>

          <input type="number" onChange={quantityChangeHandler}  id="quantity" min={1} value={quantity}/>
          </form>
          
      </td>
      <td>
        <p id='price'>{`$${price}`}</p>
      </td>
    </tr>
  );
}

export default CartBody;
