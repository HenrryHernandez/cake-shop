import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="sec-3">
      <div className="icon">
        <Image
          src="/../public/images/logo.png"
          alt="logo"
          width={1200}
          height={400}
          className="logo"
          priority
        />
      </div>
      <div className="info">
        <div className="info__contact">
          <ul className="nav">
            <li className="nav__item">
              <a href="#">Contact us</a>
            </li>
            <li className="nav__item">
              <a href="#">About us</a>
            </li>
          </ul>
        </div>
        <div className="info__rights">
          <p>CakeShop&#169; all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
