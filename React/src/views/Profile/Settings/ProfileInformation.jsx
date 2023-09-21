import React from "react";
import {useState} from "react";
import GetUser from "../components/User_Info/GetUserInfo";
import EditProfileName from "../components/EditProfileName";
import '../../../style/Profile.css';

function ProfileInformation(){
  const [ProfileInfo, SetProfileInfo] = useState([]);
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [phoneNumber, SetPhoneNumber] = useState('');
  const [PostalCode, SetPostalCode] = useState('');

  const UserId = localStorage.getItem('user_id');
  const UserInfo = GetUser(UserId, SetProfileInfo);

  function handleFormProfile(e){
   e.preventDefault();
  }
  return(
    <>
    <EditProfileName/>
    <div className="manage-profiles-container max-w-md mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-2">Manage Your Profiles</h2>

      <div className="a-section a-spacing-none a-spacing-top-micro a-padding-none profileSectionStyling">
          <div className="a-row a-spacing-none a-ws-row">
              <div id="profile-name-section" className="a-section a-spacing-top-extra-large name-edit-section-left">
                  <h1 id="profile-name" className="a-size-large aok-break-word font-bold text-xl">
                    {ProfileInfo.name}
                  </h1>
                <span className="a-declarative">
                  <a id="name-edit-modal-link" className="a-link-normal" href="#">
                    <img alt="Link to edit profile name" src="https://m.media-amazon.com/images/G/01/Beerus-MY/pencil.png"
                        className="name-edit-icon" id="name-edit-pencil-image"/>
                  </a>

                </span>
                        </div>
                    </div>
            <div className="a-row a-spacing-none a-ws-row">
              <h1 id="profile-type" className="a-size-base a-spacing-none a-color-tertiary
               font-bold text-l text-gray-600"> Account holder
              </h1>
          </div>
      </div>
      <form onSubmit={handleFormProfile} className="profile-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={ProfileInfo.email}
            onChange={(e) => SetEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />
        </div>

        {/* Contact details */}
        <div className="a-section-contact a-spacing-none a-spacing-top-micro a-padding-none profileSectionStyling">
          <h2 className="font-bold mb-2">Contact details</h2>
          <p className="text_side_contact">get notification and alert infos about shopping and shipping details from your phone</p>
          <div className="wrapper_mobileNumber">
            <div>
              <p className="font-bold mt-2">Mobile number</p>
            </div>
          <span className="a-declarative">
              <a id="name-edit-modal-link" className="a-link-normal" href="/profile/ProfileInformation/ContactDetails">
                  <img alt="Link to edit profile name" src="https://m.media-amazon.com/images/G/01/Beerus-MY/pencil.png"
                    className="name-edit-icon" id="name-edit-pencil-image"/>
              </a>
          </span>
          </div>
            <p className="font-bold text-gray-600 text-xm" id="">Not set</p>
        </div>
        <button className="save_updateProfile font-bold" type="submit">Update Profile</button>
      </form>
    </div>
    </>
  )
}
export default ProfileInformation;
