"use client";
import React, { useEffect } from "react";

/**
 * DrawerToggle Component
 * Handles the hamburger menu button with swap animation
 * Syncs visual state with drawer functionality
 */
const DrawerToggle = () => {
  useEffect(() => {
    // Sync the swap animation with the drawer state
    const drawerToggle = document.getElementById('my-drawer') as HTMLInputElement;
    const swapToggle = document.querySelector('.drawer-toggle-clone') as HTMLInputElement;
    
    if (drawerToggle && swapToggle) {
      const syncSwap = () => {
        swapToggle.checked = drawerToggle.checked;
      };
      
      // Sync on change
      drawerToggle.addEventListener('change', syncSwap);
      
      // Cleanup event listener on unmount
      return () => {
        drawerToggle.removeEventListener('change', syncSwap);
      };
    }
  }, []);

  return (
    <div>
      <label htmlFor="my-drawer" className="btn btn-ghost btn-circle drawer-button swap swap-rotate">
        {/* Hidden checkbox for swap animation */}
        <input type="checkbox" className="drawer-toggle-clone" />
        
        {/* Hamburger icon - shown when drawer is closed */}
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        {/* Close icon - shown when drawer is open */}
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </div>
  );
};

export default DrawerToggle;
