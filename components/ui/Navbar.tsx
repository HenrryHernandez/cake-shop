import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className="z-10 relative">
      <Image
        alt="Next.js logo"
        src="/images/logo.png"
        width={1200}
        height={400}
        className="logo"
      />

      {/* TABLET -> */}
      <nav className="hidden md:flex">
        <ul className="nav">
          <li className="nav__item">
            <Link href="#">Home</Link>
          </li>
          <li className="nav__item">
            <Link href="#">Ready to go</Link>
          </li>
          <li className="nav__item">
            <Link href="#">Order</Link>
          </li>
        </ul>
      </nav>

      {/* MOBILE */}
      <div className="h-full md:hidden row-center px-8">
        <div className="row-center w-6 h-6" onClick={handleClick}>
          <FontAwesomeIcon className="text-xl text-white" icon={faBars} />
        </div>
      </div>

      {isDropdownOpen && (
        <div className="md:hidden w-64 absolute right-6 top-16 rounded-md shadow-md bg-pink-20">
          <ul className="h-full col-center py-2 text-white text-xl">
            <li className="w-full">
              <Link
                href="#"
                className="w-full h-full row-center py-2 hover:bg-pink-5"
              >
                Home
              </Link>
            </li>
            <li className="w-full h-full row-center py-2 hover:bg-pink-5">
              <Link href="#">Ready to go</Link>
            </li>
            <li className="w-full h-full row-center py-2 hover:bg-pink-5">
              <Link href="#">Order</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
