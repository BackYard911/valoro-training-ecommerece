function CartBody(props) {
  return (
    <div>
      <div>
        <tr>
          <td>
            <img src={props.img} alt="img"></img>
          </td>
          <td>
            <p>{props.name}</p>
          </td>
          <td>
            <p>{`$${props.price}`}</p>
          </td>
        </tr>
      </div>
    </div>
  );
}

export default CartBody;
