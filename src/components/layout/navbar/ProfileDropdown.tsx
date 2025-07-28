import React from "react";

/**
 * ProfileDropdown Component
 * User profile menu with dropdown options
 */
const ProfileDropdown = () => {
  return (
    <div className="flex">
      <div className="dropdown dropdown-end">
        {/* Profile avatar trigger */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
          aria-label="Profile menu"
        >
          <div className="w-10 rounded-full">
            <img
              alt="User profile"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        
        {/* Dropdown menu */}
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="flex items-center justify-between">
              <span>Profile</span>
              <span className="badge badge-ghost bg-base-100 pointer-events-none text-xs px-2 py-1">
                New
              </span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileDropdown;
