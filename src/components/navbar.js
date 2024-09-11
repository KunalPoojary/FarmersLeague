import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 py-4 px-4  bg-green-950/90 backdrop-blur-0 z-[100] flex items-center justify-between text-white ">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold ">FarmWise</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-12 list-none ">
          <li>
            <Link className="font-text" to="/home">
              Home
            </Link>
          </li>
          <li>
            <a className="font-text" href="/about">
              About
            </a>
          </li>
          <li>
            <Link className="font-text" to="/product">
              Shop
            </Link>
          </li>
          <li>
            <a className="font-text" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <button className="px-4 py-2 text-white/[0.8] backdrop-blur-sm border border-black rounded-2xl hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-teal-600 text-sm transition duration-200">
          Login/Signup
        </button>
        {/* <MenuIcon className="md:hidden" /> */}
      </aside>
    </header>
  );
};

export default navbar;
