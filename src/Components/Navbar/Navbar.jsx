import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen,setIsOpen] = useState(false)
  const navList = ['Home','About','Services','Tech','Project','Contact']
  const ulRef = useRef()
  const ontoggle = () => {
      setIsOpen(!isOpen)
      if (!isOpen){
        ulRef.current.className =
          "lg:flex  flex-col md:flex-row absolute md:static text-center bg-black lg:bg-transparent  w-full left-0 top-16 gap-4 font-semibold text-lg";
      }
      else{
        ulRef.current.className =
          "lg:flex hidden flex-col md:flex-row absolute md:static text-center bg-black lg:bg-transparent  w-full left-0 top-16 gap-4 font-semibold text-lg";
      }
  };

  return (
    <div className="flex justify-between text-white lg:mx-12 px-8 py-2  my-4 bg-gray-600 items-center sticky top-0 z-10 rounded-md ">
      <h1 className="text-2xl lg:text-4xl font-bold">Portfolio.</h1>
      <img
        src={isOpen ? menu_close : menu_open}
        alt=""
        className="absolute lg:hidden right-4 w-6 h-6"
        onClick={ontoggle}
      />
      {/* <ion-icon name="menu-outline" text-5xl /> */}
      <div className="">
        <ul
          ref={ulRef}
          className=" hidden lg:flex flex-col md:flex-row absolute md:static text-center bg-black lg:bg-transparent transition-all duration-500 ease-out w-full left-0 top-8 gap-4 font-semibold text-lg"
        >

          {
            navList.map((nav,index)=>{
              return (
                <li key={index}>
                  <AnchorLink className="anchor-link" offset={50} href={`#${nav.toLowerCase()}`}>
                    <p
                      className={
                        menu === `${nav}`
                          ? "text-yellow-500 underline decoration-yellow-500 underline-offset-4"
                          : "hover:underline cursor-pointer"
                      }
                      onClick={() => setMenu(nav)}
                    >
                      {nav}
                    </p>
                  </AnchorLink>
                </li>
              );
            })
          }


          {/* <li>
            <AnchorLink className="anchor-link" offset={50} href="#home">
              <p
                className={
                  menu === "home"
                    ? "text-yellow-500 underline decoration-yellow-500 underline-offset-4"
                    : "hover:underline cursor-pointer"
                }
                onClick={() => setMenu("home")}
              >
                Home
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p
                className={
                  menu === "about"
                    ? "text-yellow-500 underline decoration-yellow-500 underline-offset-4"
                    : "hover:underline cursor-pointer"
                }
                onClick={() => setMenu("about")}
              >
                About
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#services">
              <p
                className={
                  menu === "services"
                    ? "text-yellow-500 underline decoration-yellow-500 underline-offset-4"
                    : "hover:underline cursor-pointer"
                }
                onClick={() => setMenu("services")}
              >
                Services
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#work">
              <p
                className={
                  menu === "work"
                    ? "text-yellow-500 underline decoration-yellow-500 underline-offset-4"
                    : "hover:underline cursor-pointer"
                }
                onClick={() => setMenu("work")}
              >
                My Projects
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p
                className={
                  menu === "contact"
                    ? "text-yellow-500 underline decoration-yellow-500 underline-offset-4"
                    : "hover:underline cursor-pointer"
                }
                onClick={() => setMenu("contact")}
              >
                Contact Me
              </p>
            </AnchorLink>
          </li> */}
        </ul>
      </div>
      <h3 className="px-4 py-2 font-semibold rounded-xl hidden md:block lg:block cursor-pointer bg-gradient-to-r from-[#FF512F] to-[#F09819] transition  hover:scale-105">
        Conect with Me
      </h3>
    </div>
  );
};

export default Navbar;
