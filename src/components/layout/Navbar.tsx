import React from "react";
import Image from "next/image";
import favicon from "../../app/favicon.ico";
import { Input } from "../ui/input";
import { Search, MessageCircle, Bell, Plus, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Navbar = () => {
  // Reusable icon button component
  const IconButton = ({ 
    children, 
    ariaLabel, 
    className = "flex justify-center items-center h-10 w-10 rounded-full hover:bg-accent cursor-pointer transition-colors",
    onClick 
  }: {
    children: React.ReactNode;
    ariaLabel: string;
    className?: string;
    onClick?: () => void;
  }) => (
    <button
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );

  return (
    <nav className="flex justify-between items-center h-16 px-3 md:px-5 border-b sticky top-0 z-50 bg-background">
      {/* Left Part */}
      <Link href={"/"}>
        <div className="flex items-center gap-2">
          <Image
            src={favicon}
            alt="Qevo Logo"
            draggable={false}
            className="cursor-pointer"
          />
          <h1 className="text-2xl md:text-3xl font-semibold cursor-pointer">Qevo</h1>
        </div>
      </Link>

      {/* Center Part */}
      <div className="hidden md:flex items-center max-w-lg w-full mx-4 border-none rounded-full bg-accent h-10 px-4">
        <Search className="w-4 h-4 text-gray-800 mr-1 dark:text-accent-foreground flex-shrink-0" />
        <Input
          type="text"
          placeholder="Search..."
          className="border-none focus-visible:ring-0 shadow-none dark:border-none dark:focus-visible:ring-0 dark:shadow-none dark:bg-transparent"
        />
      </div>

      {/* Right Part */}
      <div className="flex justify-between items-center gap-0.5">
        {/* Mobile Search Icon */}
        <IconButton ariaLabel="Search" className="md:hidden flex justify-center items-center h-10 w-10 rounded-full hover:bg-accent cursor-pointer transition-colors">
          <Search className="w-5 h-5" />
        </IconButton>

        {/* Theme Toggle */}
        <div className="flex justify-center items-center h-10 w-10 rounded-full hover:bg-accent cursor-pointer transition-colors">
          <ThemeToggle />
        </div>

        {/* Chat Icon - Hidden on small screens */}
        <IconButton ariaLabel="Open chat" className="hidden sm:flex justify-center items-center h-10 w-10 rounded-full hover:bg-accent cursor-pointer transition-colors">
          <MessageCircle className="w-5 h-5" />
        </IconButton>

        {/* Create Post */}
        <IconButton 
          ariaLabel="Create new post"
          className="flex items-center hover:bg-accent h-10 w-auto px-2 rounded-full gap-1 cursor-pointer transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span className="hidden sm:inline text-sm font-semibold">Create</span>
        </IconButton>

        {/* Open Inbox Notification */}
        <IconButton ariaLabel="View notifications">
          <Bell className="w-5 h-5" />
        </IconButton>

        {/* Profile Icon */}
        <IconButton 
          ariaLabel="User profile menu"
          className="flex justify-center items-center h-10 w-10 p-0.5 rounded-full hover:bg-accent cursor-pointer transition-colors"
        >
          <User className="w-6 h-6" />
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
