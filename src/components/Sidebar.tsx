import React from "react";
import NavbarMenu from "./NavbarMenu";

/**
 * Sidebar Component
 * Contains the drawer sidebar with header and menu
 * Provides close functionality and organized navigation
 */
const Sidebar = () => {
  return (
    <div className="drawer-side">
      {/* Backdrop overlay - clicking closes the drawer */}
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      {/* Sidebar content */}
      <ul
        className="menu bg-base-200 text-base-content min-h-full w-80 p-4"
        role="menu"
      >
        {/* Sidebar header with close button */}
        <li>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Menu</h2>
            <label
              htmlFor="my-drawer"
              className="btn btn-ghost btn-sm btn-circle"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>
        </li>

        {/* Navigation menu items */}
        <NavbarMenu />
      </ul>
    </div>
  );
};

export default Sidebar;
