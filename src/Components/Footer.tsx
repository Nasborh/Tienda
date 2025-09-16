import { FiPhoneCall, FiMapPin, FiMail, FiClock } from "react-icons/fi";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { FaFacebook, FaXTwitter, FaYoutube, FaLinkedin } from "react-icons/fa6";
import Logo from "../assets/logo-light.png";

export function Footer() {
  return (
    <footer className="relative z-0 bg-gray-900">
      <div className="container mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-3">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img src={Logo} className="me-3 h-8" alt="FlowBite Logo" />
              </a>
              <p className="mb-3 text-white">
                Nuestra tienda presenta todo en las mejores variedades de
                productos
              </p>
              <ul className="space-y-4 text-white">
                <li className="text- flex items-center">
                  <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-sky-400 transition">
                    <FiPhoneCall className="text-gray-700" />
                  </div>
                  <span>+1 234 567 890</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-sky-400 transition">
                    <FiMapPin className="text-gray-700" />
                  </div>
                  <span>123 Store St, City, State</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-sky-400 transition">
                    <FiMail className="text-gray-700" />
                  </div>
                  <span>info@store.com</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-sky-400 transition">
                    <FiClock className="text-gray-700" />
                  </div>
                  <span>Mon-Fri 9AM-6PM</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-2">
            <h3 className="mb-4 text-lg font-semibold text-white">
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
            <h3 className="mb-4 text-lg font-semibold text-white">
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
          <div className="mb- md:col-span-6 lg:col-span-2">
            <h3 className="mb-4 text-lg font-semibold text-white">
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
              <h4 className="relative mb-5 pb-5 text-lg font-semibold text-white">
                Get Mobile App
              </h4>
              <p className="mb-5 pr-4 text-white">
                Nasborh App is now available on App Store & Google Play.
              </p>
              <div className="text-white">
                <h5 className="mt-3 mb-5 text-base font-medium">
                  Download Our Mobile App
                </h5>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-md bg-blue-500 pt-2 pr-3 pb-2 pl-2 text-white shadow-sm"
                  >
                    <FaGooglePlay className="text-3xl"></FaGooglePlay>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium">Get It On</span>
                      <h6 className="mt-1 text-sm">Google Play</h6>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-md bg-blue-500 pt-2 pr-3 pb-2 pl-2 text-white shadow-sm"
                  >
                    <FaAppStore className="text-3xl"></FaAppStore>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium">Get It On</span>
                      <h6 className="mt-1 text-sm">App Store</h6>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mb-5 lg:-mb-5">
                <span className="mb-2 block text-white">We Accept:</span>
                <div className="flex items-center gap-2">
                  <img
                    className="mr-1 w-8 lg:w-12"
                    src="/src/assets/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="mr-1 w-8 lg:w-12"
                    src="/src/assets/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="mr-1 w-8 lg:w-12"
                    src="/src/assets/paypal.svg"
                    alt="Paypal"
                  />
                  <img
                    className="mr-1 w-8 lg:w-12"
                    src="/src/assets/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="mr-1 w-8 lg:w-12"
                    src="/src/assets/discover.svg"
                    alt="Discover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="mt-4 mb-1 md:mt-2">
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Best Sales
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  New Arrivals
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Accesories
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Electronics
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Computers
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Mobile Phone
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Headphone
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  TV & Monitor
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Drone
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Printer
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Smart Watch
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Earbuds
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Camera
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Gaming
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Discount
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Support
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Sitemap
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Our Affiliates
                </a>
                <a
                  className="mb-4 w-full max-w-xs rounded-full border border-solid border-blue-500 bg-gray-900 px-6 py-3 text-center text-lg font-medium text-blue-500 transition-colors duration-300 hover:bg-blue-500 hover:text-white"
                  href="#"
                >
                  Returns Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
      <div className="bg-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Información de Copyright */}
            <div className="text-center text-sm text-white md:text-left">
              <p>
                © {new Date().getFullYear()} Copyright{" "}
                <a
                  href="https://flowbite.com/"
                  className="font-medium text-blue-500 hover:underline"
                >
                  Nasborh™
                </a>
                . All Rights Reserved.
              </p>
            </div>

            {/* Enlaces de Redes Sociales */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-white">Síguenos:</span>
              <div
                role="list"
                aria-label="Enlaces de redes sociales"
                className="flex gap-2"
              >
                {/* Cada enlace social es un 'listitem' */}
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-800 text-white transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                  aria-label="Página de Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-800 text-white transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                  aria-label="Página de Twitter"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-800 text-white transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                  aria-label="Página de LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-800 text-white transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                  aria-label="Página de YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
