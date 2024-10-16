import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-10">
      <div className="relative container mx-auto px-6  lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:mb-80 lg:mb-60 mb-60">
          <div>
            <img src="/logo.svg" alt="JVEC Movers Logo" className="h-16 mb-4" />
            <p className="text-gray-400">
              Copyright © 2024
              <br />
              JVEC Movers. All Rights Reserved.
            </p>
            <button className="mt-4 bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700">
              Free Quote
            </button>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-red-500 mb-4">SERVICES</h3>
            <ul>
              <li className="font-semibold">Residential Moving</li>
              <li>Complete Packing</li>
              <li>Loading and Unloading</li>
              <li>Transportation</li>
              <li>Unpacking Services</li>
              <li>Commercial Moving</li>
              <li>Office and Business Relocations</li>
              <li>Packing and Transportation</li>
              <li>Setup Services</li>
            </ul>
            <h3 className="text-red-500 mt-4">Specialty Moves</h3>
            <ul>
              <li>Delicate Items</li>
              <li>Heavy Furniture</li>
              <li>Cleaning Services</li>
              <li>Post-Move Cleaning</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-red-500 mb-4">QUICK LINKS</h3>
            <ul>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>SiteMaps</li>
            </ul>
          </div>

          {/* Contact and Social Media Section */}
          <div>
            <h3 className="text-red-500 mb-4">CONTACT US</h3>
            <p>
              12 Rev. Oguniyi Street, off Oba Akinjobi, Ikeja GRA, Lagos,
              Nigeria.
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+23408140979054" className="text-red-500">
                +234-0814-097-9054
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:hello@jvecmovers.com" className="text-red-500">
                hello@jvecmovers.com
              </a>
            </p>
            <h3 className="text-red-500 mt-4">FOLLOW US</h3>
            <p>
              Stay connected with us on social media for updates and promotions.
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="flex items-center">
                <img src="/whatsapp.svg" alt="WhatsApp" className="h-6" />
                <span className="ml-2">WhatsApp</span>
              </a>
              <a href="#" className="flex items-center">
                <img src="/facebook.svg" alt="Facebook" className="h-6" />
                <span className="ml-2">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 bg-no-repeat bg-bottom  "
        style={{
          backgroundImage: "url(/footer-logo.svg)",
          //   backgroundSize: "cover",
        }}
      />
    </footer>
  );
};

export default Footer;
