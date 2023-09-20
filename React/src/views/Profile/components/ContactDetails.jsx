import React,{useState} from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import '../../../style/profile.css'



function ContactDetails(){
  const [phoneNumber, SetPhoneNumber] = useState('');

  const handlePhoneChange = async (e) => {
    e.preventDefault();
    console.log(phoneNumber);
  };
  return(
    <>
    <div className="wrappe_contact_infos flex justify-center mt-2">
      <div className="box_wrappe_element_contact w-96">
        <h2 className="font-bold text-2xl mb-4">add a phone number get and notified</h2>
        <p className="notice_contact-num">If you have forgotten, or no longer have access to, the email address associated
           with your FamilyID account you will a text message with a 'reset code' can be sent to your mobile number</p>
      <form onSubmit={handlePhoneChange}>
      <div className="mt-4">
        <PhoneInput
         preferredCountries={['US','CA','FR','UK']}
         containerClassName="phone-input-container"
         defaultCountry="ua"
         value={phoneNumber}
         onChange={(phoneNumber) => SetPhoneNumber(phoneNumber)}
        />
      </div>
        <div className="flex justify-center mt-2">
          <button type="submit" className="btn-contact-details w-5/6 bg-amber-400 rounded mt-4">add now</button>
        </div>
      </form>
      </div>
    </div>
    </>
  )
}

export default ContactDetails;
