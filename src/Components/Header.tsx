import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button, MegaMenu ,MegaMenuDropdown, } from "flowbite-react";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlinePhone } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import Logo from "../assets/logowhite.png";

export function HeaderUp() {
  return (
    <Navbar className="bg-gray-100 border-gray-300 ">
      <NavbarBrand href="#" className="">
        <FiMessageSquare className="text-blue-400 text-xl mx-2" />
        <span className="self-center whitespace-nowrap text-gray-800 font-semibold me-1">info@example.com</span>
        <MdOutlinePhone className="text-blue-400 text-xl mx-2" />
        <span className="self-center whitespace-nowrap text-gray-800 font-semibold">+582121234567</span>
      </NavbarBrand>


      <NavbarToggle />
      <NavbarBrand href="#" className="">
        <span className="text-sm text-gray-800 font-semibold mx-2">Siguenos:</span>
        <IoLogoFacebook className="text-blue-400 text-xl mx-1" />
        <FaXTwitter className="text-blue-400 text-xl mx-1" />
        <AiOutlineInstagram className="text-blue-400 text-xl mx-1" />
      </NavbarBrand>
      
    </Navbar>
  );

}


export function HeaderHalf() {
  return (
    <MegaMenu>
      <NavbarBrand href="/" className="border mx-8">
        <img alt="" src={Logo} className="mr-3 h-6 sm:h-9" />
      </NavbarBrand>
      <div className="order-2 hidden items-center md:flex">
        <a
          href="#"
          className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 md:mr-2 md:px-5 md:py-2.5 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Login
        </a>
        <Button href="#">Sign up</Button>
      </div>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#">Home</NavbarLink>
        <NavbarLink>
          <MegaMenuDropdown toggle={<>Company</>}>
            <ul className="grid grid-cols-3">
              <div className="space-y-4 p-4">
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Library
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Pro Version
                  </a>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Support Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Blog
                  </a>
                </li>
              </div>
              <div className="space-y-4 p-4">
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Playground
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                    License
                  </a>
                </li>
              </div>
            </ul>
          </MegaMenuDropdown>
        </NavbarLink>
        <NavbarLink href="#">Team</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </MegaMenu>
  );
}


