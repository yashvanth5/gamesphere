"./User.css";
import { ProfileDetails } from "../UserPage/UserComponents/ProfileDetails";
import { AddressManagement } from "../UserPage/UserComponents/AddressManagement";
import { Orders } from "../UserPage/UserComponents/Orders";
import { useState } from "react";
import "./User.css";

const tabs = {
  one: <ProfileDetails />,
  two: <AddressManagement />,
  three: <Orders />,
};
export const User = () => {
  const [showTab, setShowTab] = useState("one");

  const tabChangeHandler = (e) => {
    setShowTab(e.target.value);
  };
  return (
    <>
      <div className="profile-outer-container">
        <div
          className={`profile-container ${
            showTab === "two" ? "active-address-height" : ""
          }`}
        >
          <div className="profile-nav">
            <button
              className={`profile-nav-item  ${
                showTab === "one" ? "nav-link-active" : ""
              }`}
              onClick={tabChangeHandler}
              value="one"
            >
              Profile
            </button>
            <button
              className={`profile-nav-item  ${
                showTab === "two" ? "nav-link-active" : ""
              }`}
              onClick={tabChangeHandler}
              value="two"
            >
              Address
            </button>
            <button
              className={`profile-nav-item  ${
                showTab === "three" ? "nav-link-active" : ""
              }`}
              onClick={tabChangeHandler}
              value="three"
            >
              Orders
            </button>
          </div>
          <div className="profile-details">{tabs[showTab]}</div>
        </div>
      </div>
    </>
  );
};
