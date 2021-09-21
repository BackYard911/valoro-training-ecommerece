import http from "../http-common";

export const getAllProducts = () => {
  return http.get("/products");
};
export const getProductDetails = (id) => {
  return http.get(`/products/${id}`);
};
