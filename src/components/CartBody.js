function CartBody(props) {

    function decrement(){
        let quant = document.getElementById('quantity')
        let price = document.getElementById('price')
        if(quant > 0){
            quant = quant - 1 
        }
        else{
            quant = 0
        }
        price = price * quant
    }
    
    function increment(){
        let quant = document.getElementById('quantity')
        let price = document.getElementById('price')
        quant = quant + 1
        price = price * quant        
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
          <button onClick="decrement()">-</button>
          <input type="number" id="quantity" value="1"/>
          <button onClick="increment()"></button>
      </td>
      <td>
        <p id='price'>{`$${props.price}`}</p>
      </td>
    </tr>
  );
}

export default CartBody;
