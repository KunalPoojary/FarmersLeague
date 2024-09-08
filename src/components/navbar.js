import React from "react";

const navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 py-4 px-4 bg-green-500/100 backdrop-blur-0 z-[100] flex items-center justify-between  text-white">
    <aside className="flex items-center gap-[2px]">
      <p className="text-3xl font-bold ">Revzz</p>
      {/* <Image 
      src="/revzz.in.png"
      width={100}
      height={33}
      alt="Revzz logo"
      className="shadow-sm"/> */}
    </aside>
    <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
      <ul className="flex items-center gap-12 list-none">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        {/* <li>
          <a href="#">Documentation</a>
        </li>
        <li>
          <a href="#">Enterprise</a>
        </li> */}
      </ul>
    </nav>
    <aside className="flex items-center gap-4">
      <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Login /Sign Up
        </span>
      </button>
      {/* <MenuIcon className="md:hidden" /> */}
    </aside>
  </header>
  )
}

export default navbar
