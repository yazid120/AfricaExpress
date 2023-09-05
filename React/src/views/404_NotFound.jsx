import React from "react";
import astronot_background from "../assets/images/404_Not_found/8.svg";

const NotFound_404 = function(){
   return(
    <>
   <div className="relative h-screen overflow-hidden bg-indigo-900">
    <img src={astronot_background} className="absolute object-cover w-full h-full"/>
    <div className="absolute inset-0 bg-black opacity-25">
    {/* <a className="font-bold cursor-pointer text-white text-2xl" href="/">
        return to main
    </a> */}
    </div>
    <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div className="relative z-10 flex flex-col items-center w-full font-mono">
            <h1 className="mt-4 text-5xl font-extrabold leading-tight text-center text-white">
                You&#x27;re alone here
            </h1>
            <p className="font-extrabold text-white text-8xl my-44 animate-bounce">
                404
            </p>
        </div>
    </div>
  </div>
    </>
   )
}

export default NotFound_404;

