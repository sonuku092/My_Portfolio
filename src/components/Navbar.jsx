import { useState } from "react";
import styles from "../style";

import { close, logo, menu,sk } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [ fix, setFix] = useState( false);
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  function setFixed () {
    if(window.scrollY >= 100) {
      setFix(true)
    }
    else{
      setFix(false)
    }
  }

  window.addEventListener("scroll", setFixed)

  return (
    <nav className={`w-full flex py-4 justify-between items-center navbar fixed z-10  ${styles.paddingX} ${fix ? "bg-black-gradient":"bg-transparent"} ? `}>
      <img src={sk} alt="sonukumar" className="w-auto h-[24px] ss:h-[32px] cursor-pointer hover:bg-white rounded-lg" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white font-medium" : "text-dimWhite font-normal"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:block hidden h-[35px] w-[80px] border border-white rounded-full mx-4 hover:bg-white text-center i ">
            <p className="text-white hover:text-black mt-[4px]">Hello</p>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-4 bg-black-gradient absolute top-[60px] right-0 mx-2 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
