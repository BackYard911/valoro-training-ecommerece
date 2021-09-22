import classes from "../styles/Forms.module.css";
import Card from "./ui/Card";
import Layout from "./layout/Layout";
import { useState } from "react";
import { login } from "../services/user.service";
import { useHistory } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function loginHandler() {
    try {
      const response = await login(email, password);
      if (response) {
        console.log("logging in");
        history.push("/");
      }
    } catch (error) {
      alert(error.response.data.error.message);
    }
  }
  function passwordHandler() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  return (
    <Layout>
      <h1>Sign in</h1>
      <Card>
        <h3>Sign in With Email Address</h3>
        <form className={classes.form}>
          <div className={classes.control}>
            <input
              type="text"
              required
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className={classes.floatinglabel}>Email</span>
          </div>
          <div className={classes.control}>
            <input
              type="password"
              required
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className={classes.floatinglabel}>Password</span>
          </div>
          <div>
            <label htmlFor="check">Show Password</label>
            <input type="checkbox" onClick={passwordHandler} />
          </div>
          <div className={classes.actions}>
            <button type="button" onClick={loginHandler}>
              SIGN IN
            </button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default Login;
