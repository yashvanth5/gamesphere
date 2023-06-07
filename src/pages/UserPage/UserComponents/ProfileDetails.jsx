import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthContext";

export const ProfileDetails = () => {
  const { currentUser, logoutHandler } = useContext(AuthContext);

  return (
    <>
      <div className="profile-detail-page">
        <div className="profile-detail-page-item">
          <p className="profile-detail-page-item-label">Full Name:</p>
          <p>
            {currentUser.firstName} {currentUser.lastName}
          </p>
        </div>
        <div className="profile-detail-page-item">
          <p className="profile-detail-page-item-label">Email:</p>
          <p>{currentUser.email}</p>
        </div>
        <div>
          <button
            onClick={logoutHandler}
            className="profile-detail-page-footer"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
