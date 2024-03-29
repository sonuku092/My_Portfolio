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
            className={`font-Montserrat font-bold cursor-pointer text-[16px] px-1 rounded ${
              active === nav.title ? "text-white font-medium" : "text-dimWhite font-normal"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

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
          <h3 className="font-poppins font-normal border-b-[1px] border-black/20 text-center text-white">Menu</h3>
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] w-full p-[4px] rounded-md ${
                  active === nav.title ? " text-secondary bg-gradient-to-r from-slate-100/10 to-gray-50/20" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-1"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} className="flex">{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
