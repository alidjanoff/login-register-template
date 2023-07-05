import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <section className="forgotPassword">
      <div className="container">
        <div className="row">
          <form className="form">
            <h2 className="formTitle">Recover password</h2>
            <input type="email" name="email" placeholder="Email" />
            <button type="submit">Send Request</button>
            <p className="question">
              Do you have an accound ? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
