const getCart = () => {
  if (localStorage.getItem("cart") != null) {
    return JSON.parse(localStorage.getItem("cart"));
  }
  return [];
};

const addToCart = (id) => {
  const cart = getCart();
  let isInCart = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity++;
      isInCart = true;
      break;
    }
  }
  if (!isInCart) {
    cart.push({
      id: id,
      quantity: 1,
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};
const removeFromCart = (id, del = false) => {
  const cart = getCart();
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity--;
      if (del || cart[i].quantity <= 0) {
        cart.splice(i, 1);
      }
      break;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};
export const cartStorage = {
  getCart,
  addToCart,
  removeFromCart,
};
