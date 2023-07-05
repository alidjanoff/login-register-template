const ChangeProfileImage = () => {
  return (
    <section className="changeProfileImage">
      <div className="container">
        <div className="row">
          <form className="form">
            <h2 className="formTitle">Change profile image</h2>
            <div className="profileImg">
              {/* <img src={preview} alt="" /> */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
                alt=""
              />
            </div>
            <label htmlFor="profileImage">Upload image</label>
            <input type="file" name="profileImage" id="profileImage" />
            <button type="submit">Change</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChangeProfileImage;
