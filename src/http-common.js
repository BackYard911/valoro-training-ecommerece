import axios from "axios";

export default axios.create({
  baseURL: "https://salty-everglades-71907.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});