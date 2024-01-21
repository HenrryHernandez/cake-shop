import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full h-full col-center bg-pink-10">
      <div className="p-4">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={1200}
          height={400}
          className="w-48 h-48"
          priority
        />
      </div>

      <div className="w-full sm:px-16 col-center">
        <div className="w-full h-[1px] bg-white"></div>

        <div className="w-full sm:h-16 flex flex-col-reverse sm:flex-row justify-between items-center gap-y-4 py-4 sm:py-0 text-xl md:text-2xl text-white">
          <div className="text-lg">
            <p>CakeShop&#169; all rights reserved.</p>
          </div>

          <div>
            <ul className="flex gap-x-8">
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
