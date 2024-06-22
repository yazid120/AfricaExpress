import React from "react";

let Footer = function(){
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Your main content here */}
      </main>
      <footer className="w-full bg-gray-800">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
            <p>Designed with ❤️ by AfricaExpress Team</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
