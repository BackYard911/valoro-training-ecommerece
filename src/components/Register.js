import classes from "../styles/Forms.module.css";
import Card from "./ui/Card";
import Layout from "./layout/Layout";

function Register() {

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
        <h1>Create An Account</h1>
      <Card>
        <h3>Sign Up With Email Address</h3>
        <form className={classes.form}>
          <div className={classes.control}>
            <input type="text" required id="name" />
            <span className={classes.floatinglabel}>Name</span>
          </div>
          <div className={classes.control}>
            <input type="text" required id="email" />
            <span className={classes.floatinglabel}>Email</span>
          </div>
          <div className={classes.control}>
            <input type="password" required id="password"/>
            <span className={classes.floatinglabel}>Password</span>
          </div>
          <div>
            <label htmlFor="check">Show Password</label>
            <input type="checkbox" onClick={passwordHandler}/>
            </div>
          <div className={classes.actions}>
            <label htmlFor="notice">By registering you agreed to our <a href="#">Terms and Conditions.</a></label>
          </div>
          <div className={classes.actions}>
            <button>CREATE AN ACCOUNT</button>
          </div>
         
        </form>
      </Card>
    </Layout>
  );
}

export default Register;
