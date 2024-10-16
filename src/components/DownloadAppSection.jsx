import React from "react";

const DownloadAppSection = () => {
  return (
    <section
      className="relative bg-black text-white py-8 px-4 flex flex-col md:flex-row items-center justify-between bg-cover"
      style={{
        backgroundImage: "url(/download-bg.svg)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-85"></div>
      <div className="relative z-10">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-6 md:mb-0">
          DOWNLOAD THE APP
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center space-x-4 relative z-10">
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Group.svg"
            alt="Download on the App Store"
            className="h-[46px] md:h-16"
          />
        </a>
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="h-12 md:h-16"
          />
        </a>
      </div>
    </section>
  );
};

export default DownloadAppSection;
