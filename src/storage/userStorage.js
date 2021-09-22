const getToken = () => {
  if (localStorage.getItem("token") != null) {
    return localStorage.getItem("token");
  }
  return null;
};

const saveToken = (token) => {
  localStorage.setItem("token", token);
};
const removeToken = (id, del = false) => {
  localStorage.removeItem("token");
};
export const userStorage = {
  getToken,
  saveToken,
  removeToken,
};
