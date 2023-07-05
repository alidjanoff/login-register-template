import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <form className="form">
            <h2 className="formTitle">Login</h2>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
            <p className="question">
              Forgot password ? <Link to="/forgot-password">Recover it</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
