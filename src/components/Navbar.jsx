import { useState } from "react";
import styles from "../style";

import { sk, sonukm } from "../assets";
import { navLinks } from "../constants";
import { menu,cancel } from "../icon";

const Navbar = () => {
  const [ fix, setFix] = useState( false);
  const [active, setActive] = useState("profile");
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
    <nav className={`w-full flex py-4 justify-between items-center navbar fixed z-10  ${styles.paddingX} ${fix ? " backdrop-blur-sm bg-black/60 h-[7%] border-b-[1px] border-dimWhite" :"bg-transparent"}`}>
      <img src={sonukm} alt="sonukumar" className="w-auto h-[24px] ss:h-[32px] cursor-pointer" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 rounded-md">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-Montserrat font-semibold cursor-pointer text-[16px] px-1 rounded ${
              active === nav.title ? "text-white font-medium bg-white/5" : "text-dimWhite font-normal"
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
          src={toggle ? cancel : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex flex-col"
          } backdrop-blur-sm bg-black/90 absolute top-[60px] border-[1px] border-dimWhite right-0 mx-2 my-2 p-[4px] min-w-[140px] rounded-lg sidebar`}
        >
          <h3 className="text-cyan-600 font-poppins font-normal border-b-[1px] border-black/20 text-center">Menu</h3>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] w-full p-[4px] rounded-md ${
                  active === nav.title ? "text-white bg-gradient-to-r from-cyan-500/70 to-blue-500/50" : "text-cyan-600 hover:text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-1"}`}
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
