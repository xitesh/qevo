"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import favicon from "./favicon.ico";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen min-w-full bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full">
        
        {/* Logo and Brand */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Image
            src={favicon}
            alt="Qevo Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-bold text-foreground">Qevo</h1>
        </div>

        {/* 404 Display */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="default">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => router.back()}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>

      </div>
    </div>
  );
}