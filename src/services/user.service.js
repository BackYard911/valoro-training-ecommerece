import http from "../http-common";

export const login = (email, password) => {
  const data = { email, password };
  return http.post("/users/login", data);
};
export const register = (name,email, password) => {
  const data = {name, email, password };
  return http.post("/users/register", data);
};
export const getOrder = () => {
  return http.get("/orders", {
      headers:{
          "Authorization": "token",
      }
  });
};
