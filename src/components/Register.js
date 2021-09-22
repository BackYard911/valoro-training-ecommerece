import classes from "../styles/Forms.module.css";
import Card from "./ui/Card";
import Layout from "./layout/Layout";
import { useState} from "react";
import { register } from "../services/user.service";
import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function passwordHandler() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  async function registerHandler() {
    try {
      await register(name, email, password);
      console.log("loading");
      history.push("/");
    } catch (error) {
      alert(error.response.data.error.message);
    }
  }

  return (
    <Layout>
      <h1>Create An Account</h1>
      <Card>
        <h3>Sign Up With Email Address</h3>
        <form className={classes.form}>
          <div className={classes.control}>
            <input
              type="text"
              required
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <span className={classes.floatinglabel}>Name</span>
          </div>
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
            <label htmlFor="notice">
              By registering you agreed to our{" "}
              <a target="_blank" rel="noreferrer" href="https://youtu.be/dQw4w9WgXcQ">Terms and Conditions.</a>
            </label>
          </div>
          <div className={classes.actions}>
            <button type="button" onClick={registerHandler}>CREATE AN ACCOUNT</button>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default Register;
