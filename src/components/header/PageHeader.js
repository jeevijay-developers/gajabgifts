import React from "react";

const PageHeader = ({ title, headerBg }) => {
  return (
    <div
      style={{ backgroundImage: `url(${headerBg || "/slider/slider-1.jpg"})` }}
      className={`flex justify-center py-10 lg:py-80 bg-indigo-100 w-full bg-cover bg-bottom`}
    >
      <div className="flex mx-auto w-full max-w-screen-2xl px-3 sm:px-10">
        <div className="w-full flex justify-center flex-col relative">
          <h2 className="text-xl md:text-3xl lg:text-6xl font-bold font-serif text-center 
               bg-gradient-to-r from-red-800 via-red-500 to-white 
               text-transparent bg-clip-text">
            {/* {t(`common:${title}`)} */}
            {title}
            
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
