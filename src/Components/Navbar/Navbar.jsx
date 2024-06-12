import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="flex justify-between text-white mx-12 my-4 items-center">
      <h1 className="text-4xl font-bold">Portfolio.</h1>
      <div>
        <ul className="flex gap-4 font-semibold text-lg">
          <li>
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
                Portfolio
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
          </li>
        </ul>
      </div>
      <h3 className="px-4 py-2 font-semibold rounded-xl cursor-pointer bg-gradient-to-r from-[#FF512F] to-[#F09819] transition  hover:scale-105">
        Conect with Me
      </h3>
    </div>
  );
};

export default Navbar;