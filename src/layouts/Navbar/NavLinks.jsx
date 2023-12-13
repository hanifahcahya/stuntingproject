// NavLinks.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import DropdownImage from "../../assets/Dropdown.png";

const NavLinks = ({ closeMobileDropdown }) => {
  const [heading, setHeading] = useState(false);
  const [subHeading, setSubHeading] = useState("");

  // Fungsi untuk menutup dropdown mobile dan navbar saat sublink diklik
  const closeMobileDropdownLocal = () => {
    setHeading(false);
    setSubHeading("");
    closeMobileDropdown(); // Panggil fungsi untuk menutup navbar
  };

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="flex items-center justify-between pr-5 py-7 md:pr-0 group "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="inline text-xl md:hidden ">
                <img
                  src={DropdownImage}
                  alt={heading === link.name ? "chevron-up" : "chevron-down"}
                  className="w-6 h-6 cursor-pointer" // Sesuaikan ukuran di sini
                />
              </span>
              <span className="hidden text-xl md:mt-1 md:ml-2 md:block group-hover:rotate-180 group-hover:-mt-2">
                <img
                  src={DropdownImage}
                  alt="chevron-down"
                  className="w-6 h-6 cursor-pointer" // Sesuaikan ukuran di sini
                />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute hidden top-20 group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="absolute w-4 h-4 mt-1 rotate-45 bg-white left-3"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-10 p-5 bg-white rounded-xl">
                    {link.sublinks.map((mysublinks, index) => (
                      <div key={index}>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, subIndex) => (
                          <li
                            key={subIndex}
                            className="text-sm text-gray-600 my-2.5"
                          >
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                              onClick={closeMobileDropdownLocal}
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks, subIndex) => (
              <div key={subIndex}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="flex items-center justify-between py-4 pr-5 font-semibold pl-7 md:pr-0 "
                  >
                    {slinks.Head}
                    <span className="inline text-xl md:mt-1 md:ml-2">
                      <img
                        src={DropdownImage}
                        alt={
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }
                        className="w-6 h-6" // Sesuaikan ukuran di sini
                      />
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink, innerIndex) => (
                      <li key={innerIndex} className="py-3 pl-14">
                        <Link
                          to={slink.link}
                          onClick={closeMobileDropdownLocal}
                        >
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
