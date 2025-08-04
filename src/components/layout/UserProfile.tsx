import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { User } from "lucide-react";
import Link from "next/link";

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



const UserProfile = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconButton
            ariaLabel="User profile menu"
            className="flex justify-center items-center h-10 w-10 p-0.5 rounded-full hover:bg-accent cursor-pointer transition-colors"
          >
            <User className="w-6 h-6" />
          </IconButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href={"/signin"}>
                Sign In
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/signup"}>
                Sign Up
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserProfile;
