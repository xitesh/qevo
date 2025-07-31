import React from "react";
import Image from "next/image";
import favicon from "../../app/favicon.ico";
import { Input } from "../ui/input";
import { LucideSearch } from "lucide-react";
import { BsChatDots } from "react-icons/bs";
import { LuBell, LuPlus } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-15 px-5 border-b">
      {/* Left Part */}
      <Link href={"/"}>
        <div className="flex items-center gap-2">
          <Image
            src={favicon}
            alt="Qevo Logo"
            draggable={false}
            className="cursor-pointer"
          />
          <h1 className="text-3xl font-semibold cursor-pointer">Qevo</h1>
        </div>
      </Link>

      {/* Center Part */}
      <div className="flex items-center w-lg border-none rounded-full bg-accent h-10 px-4 ">
        <LucideSearch className="text-xs text-gray-800 mr-1 dark:text-accent-foreground" />
        <Input
          type="text"
          placeholder="Search..."
          className="border-none focus-visible:ring-0 shadow-none dark:border-none dark:focus-visible:ring-0 dark:shadow-none dark:bg-transparent"
        />
      </div>

      {/* Right Part */}
      <div className="flex justify-between items-center gap-0.5">
        {/* Theme Toggle */}
        <div className="flex justify-center items-center h-10w w-10 rounded-full hover:bg-accent cursor-pointer">
          <ThemeToggle />
        </div>

        {/* Chat Icon */}
        <div className="flex justify-center items-center h-10 w-10 px-2 rounded-full hover:bg-accent cursor-pointer">
          <BsChatDots className="text-xl" />
        </div>

        {/* Create Post */}
        <div className="flex items-center hover:bg-accent h-10 w-auto px-2 rounded-full gap-1 cursor-pointer">
          <LuPlus className="text-xl" />
          <span className="text-sm font-semibold">Create</span>
        </div>

        {/* Open Inbox Notification */}
        <div className="flex justify-center items-center h-10 w-10 px-2 rounded-full hover:bg-accent cursor-pointer">
          <LuBell className="text-xl" />
        </div>

        {/* Profile Icon */}
        <div className="flex justify-center items-center h-10 w-10 p-0.5 rounded-full hover:bg-accent cursor-pointer">
          <CgProfile className="text-3xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
