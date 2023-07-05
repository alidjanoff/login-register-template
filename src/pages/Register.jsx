import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="register">
      <div className="container">
        <div className="row">
          <form className="form">
            <h2 className="formTitle">Register</h2>
            <input type="text" name="name" placeholder="First name" />
            <input type="text" name="surname" placeholder="Last name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Register</button>
            <p className="question">
              Do you have an accound ? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
