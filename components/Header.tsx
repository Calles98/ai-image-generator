import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg.white z-50 shadow-md">
      <div className="flex space-x-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          alt="logo"
          width={30}
          height={30}
        />

        <div>
          <h1 className="text-bold">
            The PAPAFAM <span className="text-violet-500">AI</span> Image
            Generator
          </h1>
          <h2 className="text-xs">
            Powered by Dall-E 2, Chat GPT & Microsoft Azure!
          </h2>
        </div>
      </div>
      <div className="text-xs md:text-base items-center text-gray-500">
        <Link href="https://calles98.github.io">Visit my portfolio!</Link>
      </div>
    </header>
  );
}

export default Header;
