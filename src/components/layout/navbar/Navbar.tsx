"use client";
import React from "react";
import DrawerToggle from "./DrawerToggle";
import Logo from "./Logo"; 
import SearchButton from "./SearchButton";
import NotificationButton from "./NotificationButton";
import ThemeToggle from "./ThemeToggle";
import ProfileDropdown from "./ProfileDropdown";
import Sidebar from "./Sidebar";

/**
 * Navbar Component
 * Main navigation bar with drawer functionality
 * Uses DaisyUI drawer pattern for mobile-friendly sidebar navigation
 */
const Navbar = () => {
  return (
    <div className="drawer">
      {/* Hidden checkbox that controls the drawer state */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      
      {/* Main content area - contains the navbar */}
      <div className="drawer-content">
        <div className="navbar fixed bg-base-100 shadow-sm z-30">
          {/* Left section - hamburger menu and logo */}
          <div className="navbar-start gap-2">
            <DrawerToggle />
            <Logo />
          </div>

          {/* Right section - action buttons and profile */}
          <div className="navbar-end gap-2">
            <SearchButton />
            <NotificationButton />
            <ThemeToggle />
            <ProfileDropdown />
          </div>
        </div>
      </div>
      {/* End drawer-content */}

      {/* Sidebar drawer */}
      <Sidebar />
    </div>
  );
};

export default Navbar;
