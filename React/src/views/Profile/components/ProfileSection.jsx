import React from "react";


function ProfileSection()
{
  return(
    <>
<section className="profile_page_wrappe_container w-full p-2">
  <h1 className="text-2xl font-semibold mb-4">Profile Page</h1>
  <div className="grid gap-4 grid-cols-3 grid-rows-3 p-5">
    <div className="item_profile p-5 bg-white rounded cursor-pointer hover:bg-violet-600 border border-solid border-gray-400">
      <p className="text-lg font-semibold">Account Infos</p>
      <img src="../src/assets/images/Profile/settings-profile.png" alt="Account Info" className="w-16 h-16" />
      <span className="text-gray-600">Edit name, mobile number, email, and password (all account information)</span>
    </div>
    <div className="item_profile p-5 bg-white rounded cursor-pointer border border-solid border-gray-400">
      <p className="text-lg font-semibold">Help Customer</p>
      <img src="../src/assets/images/Profile/customer-service.png" alt="Help Customer" className="w-16 h-16" />
      <span className="text-gray-600">Browse self-service options, help articles, or contact us</span>
    </div>
    <div className="item_profile p-5 bg-white rounded cursor-pointer border border-solid border-gray-400">
      <p className="text-lg font-semibold">Login &amp; Security</p>
      <img src="../src/assets/images/Profile/login-security.png" alt="Login &amp; Security" className="w-16 h-16" />
      <span className="text-gray-600">Manage your sensitive account info and add a layer of security to your account</span>
    </div>
    <div className="item_profile p-5 bg-white rounded cursor-pointer border border-solid border-gray-400">
      <p className="text-lg font-semibold">Orders &amp; Product</p>
      <img src="../src/assets/images/Profile/booking.png" alt="Orders &amp; Product" className="w-16 h-16" />
      <span className="text-gray-600">Start tracking all your orders, latest products, and create your wishlist</span>
    </div>
    <div className="item_profile p-5 bg-white rounded cursor-pointer border border-solid border-gray-400">
      <p className="text-lg font-semibold">Your Messages</p>
      <img src="../src/assets/images/Profile/new-message.png" alt="Your Messages" className="w-16 h-16" />
      <span className="text-gray-600">View any response messages from Customers or Sellers</span>
    </div>
    <div className="item_profile p-5 bg-white rounded cursor-pointer border border-solid border-gray-400">
      <p className="text-lg font-semibold">Premium Membership</p>
      <img src="../src/assets/images/Profile/crown.png" alt="Premium Membership" className="w-16 h-16" />
      <span className="text-gray-600">Manage your membership, view benefits, and get your premium now...</span>
    </div>
    <div className="item_profile p-5 bg-white rounded cursor-pointer border border-solid border-gray-400">
      <p className="text-lg font-semibold">Payment Methods</p>
      <img src="../src/assets/images/Profile/secure-payment.png" alt="Payment Methods" className="w-16 h-16" />
      <span className="text-gray-600">View all transactions, manage payment methods, and settings</span>
    </div>
  </div>
</section>
    </>
  )
}
export default ProfileSection;
