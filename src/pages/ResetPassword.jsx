const ResetPassword = () => {
  return (
    <section className="resetPassword">
      <div className="container">
        <div className="row">
          <form className="form">
            <h2 className="formTitle">Reset Password</h2>
            <input type="password" name="password" placeholder="Password" />
            <input
              type="password"
              name="rePassword"
              placeholder="Re-Enter Password"
            />
            <button type="submit">Reset</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
