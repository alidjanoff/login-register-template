const OtpConfirmation = () => {
  return (
    <section className="otpConfirmation">
      <div className="container">
        <div className="row">
          <form className="form">
            <h2 className="formTitle">OTP Confirmation</h2>
            <input type="otp" name="otp" placeholder="Otp Code" />
            <button type="submit">Confirm</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OtpConfirmation;
