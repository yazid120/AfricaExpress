import React from "react";


function ProfileSection()
{
  const profileItems = [
    {
      title: "Account Infos",
      description: "Edit name, mobile number, email, and password (all account information)",
      image: "../src/assets/images/Profile/settings-profile.png",
      alt: "Account Info"
    },
    {
      title: "Help Customer",
      description: "Browse self-service options, help articles, or contact us",
      image: "../src/assets/images/Profile/customer-service.png",
      alt: "Help Customer"
    },
    {
      title: "Login & Security",
      description: "Manage your sensitive account info and add a layer of security to your account",
      image: "../src/assets/images/Profile/login-security.png",
      alt: "Login & Security"
    },
    {
      title: "Orders & Product",
      description: "Start tracking all your orders, latest products, and create your wishlist",
      image: "../src/assets/images/Profile/booking.png",
      alt: "Orders & Product"
    },
    {
      title: "Your Messages",
      description: "View any response messages from Customers or Sellers",
      image: "../src/assets/images/Profile/new-message.png",
      alt: "Your Messages"
    },
    {
      title: "Premium Membership",
      description: "Manage your membership, view benefits, and get your premium now...",
      image: "../src/assets/images/Profile/crown.png",
      alt: "Premium Membership"
    },
    {
      title: "Payment Methods",
      description: "View all transactions, manage payment methods, and settings",
      image: "../src/assets/images/Profile/secure-payment.png",
      alt: "Payment Methods"
    },
  ];
  return (
    <section className="profile_page_wrappe_container w-full p-4 bg-gray-50 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Profile Page</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
        {profileItems.map((item, index) => (
          <div key={index} className="item_profile p-6 bg-white rounded-md shadow-md cursor-pointer hover:bg-violet-600 transition duration-300 border border-gray-200 hover:border-violet-600">
            <div className="flex items-center mb-4">
              <img src={item.image} alt={item.alt} className="w-16 h-16 mr-4" />
              <p className="text-lg font-semibold text-gray-800 ">{item.title}</p>
            </div>
            <p className="text-gray-600 ">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default ProfileSection;
