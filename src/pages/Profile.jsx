import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <section className="profile">
      <div className="container">
        <div className="row">
          <div className="leftSide">
            <div className="profileImage">
              {/* <img src="" alt="" /> */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
                alt=""
              />
              <Link to="/change-profile-image">Change</Link>
            </div>
          </div>
          <div className="rightSide">
            <div className="userInfo">
              <h2 className="userName">Name Surname</h2>
              <h3 className="userEmail">Email</h3>
              <Link to="/forgot-password">Change password</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
