import { FiPhoneCall, FiMapPin, FiMail, FiClock } from "react-icons/fi";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { FaFacebook, FaXTwitter, FaYoutube, FaLinkedin } from "react-icons/fa6";
import Logo from "../assets/logo-light.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 relative z-0 ">
      <div className="container mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-6 lg:col-span-3">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img src={Logo} className="h-8 me-3" alt="FlowBite Logo" />
              </a>
              <p className="mb-3 text-white">
                Nuestra tienda presenta todo en las mejores variedades de
                productos
              </p>
              <ul className="space-y-4 text-white">
                <li className="flex items-center text-">
                  <div className="mr-3 w-9 h-9 flex items-center justify-center bg-sky-400 rounded-full transition">
                    <FiPhoneCall className="text-gray-700" />
                  </div>
                  <span>+1 234 567 890</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 w-9 h-9 flex items-center justify-center bg-sky-400 rounded-full transition">
                    <FiMapPin className="text-gray-700" />
                  </div>
                  <span>123 Store St, City, State</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 w-9 h-9 flex items-center justify-center bg-sky-400 rounded-full transition">
                    <FiMail className="text-gray-700" />
                  </div>
                  <span>info@store.com</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 w-9 h-9 flex items-center justify-center bg-sky-400 rounded-full transition">
                    <FiClock className="text-gray-700" />
                  </div>
                  <span>Mon-Fri 9AM-6PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="text-white">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">
              Categories
            </h3>
            <ul className="text-white">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Electronics
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Clothing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Home & Garden
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 lg:col-span-2 mb-">
            <h3 className="text-lg font-semibold text-white mb-4">
              Customer Service
            </h3>
            <ul className="text-white">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 lg:col-span-3">
            <div className="md:max-w-4xl:mb-12">
              <h4 className="relative pb-5 mb-5 font-semibold text-white text-lg">
                Get Mobile App
              </h4>
              <p className="pr-4 mb-5 text-white">
                Nasborh App is now available on App Store & Google Play.
              </p>
              <div className="text-white">
                <h5 className="mt-3 mb-5 text-base font-medium">
                  Download Our Mobile App
                </h5>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="flex items-center shadow-sm gap-2 pt-2 pr-3 pb-2 pl-2 rounded-md bg-blue-500 text-white"
                  >
                    <FaGooglePlay className="text-3xl"></FaGooglePlay>
                    <div className="flex flex-col">
                      <span className="font-medium text-xs">Get It On</span>
                      <h6 className="mt-1 text-sm">Google Play</h6>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center shadow-sm gap-2 pt-2 pr-3 pb-2 pl-2 rounded-md bg-blue-500 text-white"
                  >
                    <FaAppStore className="text-3xl"></FaAppStore>
                    <div className="flex flex-col">
                      <span className="font-medium text-xs">Get It On</span>
                      <h6 className="mt-1 text-sm">App Store</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mb-5 lg:-mb-5">
                <span className="block mb-2 text-white">We Accept:</span>
                <div className="flex items-center gap-2">
                  <img
                    className="w-8 lg:w-12 mr-1"
                    src="/src/assets/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="w-8 lg:w-12 mr-1"
                    src="/src/assets/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="w-8 lg:w-12 mr-1"
                    src="/src/assets/paypal.svg"
                    alt="Paypal"
                  />
                  <img
                    className="w-8 lg:w-12 mr-1"
                    src="/src/assets/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="w-8 lg:w-12 mr-1"
                    src="/src/assets/discover.svg"
                    alt="Discover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="md:mt-2 mt-4 mb-1">
              <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-2">
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Best Sales
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  New Arrivals
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Accesories
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Electronics
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Computers
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Mobile Phone
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Headphone
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  TV & Monitor
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Drone
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Printer
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Smart Watch
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Earbuds
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Camera
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Gaming
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Discount
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Support
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Sitemap
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Our Affiliates
                </a>
                <a
                  className="border border-solid border-blue-500 text-blue-500 bg-gray-900  px-6 py-3 rounded-full mb-4 font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full max-w-xs text-lg text-center"
                  href="#"
                >
                  Returns Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex ">
            <div className="w-full lg:w-6/12 self-center">
                <span className="text-base text-white sm:text-center lg:text-start">
                © 2023 Copyright {" "}
                <a href="https://flowbite.com/" className="text-blue-700 font-medium">
                    Nasborh™
                </a>
                . All Rights Reserved.
                </span>
            </div>
            <div className="w-full lg:w-6/12 self-center">
                <div className="flex mt-4 justify-evenly sm:mt-0">
                    <span className="text-base text-white sm:text-center text-start">Follow Us:</span>
                    <a
                        href="#"
                        className="flex justify-center items-center border rounded-full text-white text-center w-9 h-9 hover:bg-blue-500"
                    >
                        <FaFacebook ></FaFacebook>
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a
                        href="#"
                        className="border rounded-full flex justify-center items-center text-white text-center w-9 h-9 hover:bg-blue-500"
                    >
                        <FaXTwitter ></FaXTwitter>
                        <span className="sr-only">Twitter page</span>
                    </a>
                    <a
                        href="#"
                        className="border rounded-full flex justify-center items-center text-white text-center w-9 h-9 hover:bg-blue-500"
                    >
                        <FaLinkedin ></FaLinkedin>
                        <span className="sr-only">Linkedin page</span>
                    </a>
                    <a
                        href="#"
                        className="border rounded-full flex justify-center items-center text-white text-center w-9 h-9 hover:bg-blue-500"
                    >
                        <FaYoutube ></FaYoutube>
                        <span className="sr-only">Youtube page</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  );
}
export default Footer;
