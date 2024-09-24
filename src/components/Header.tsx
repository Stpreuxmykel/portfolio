"use client";

import Link from "next/link"; // Use Next.js Link component
import Nav from "./Nav";
import { Button } from "./ui/button"; // Ensure Button is imported correctly
import MobileNav from "./MobileNav";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Loader } from "lucide-react"
import { IoMdLogIn } from "react-icons/io";



const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo with Link */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Mike <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Navigation and Hire Me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        {/*  Login / logout  */}

          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>

          <ClerkLoaded>

            <SignedIn>
                <UserButton 
                afterSignOutUrl="/"
                />   
            </SignedIn>

              <SignedOut>
                <SignInButton
                      mode= "modal"
                    >
                    <Button>
                      Login <IoMdLogIn/>
                    </Button>
                  </SignInButton>
              </SignedOut>
          </ClerkLoaded>

        </div>

        <div className="xl:hidden"> 
          <MobileNav />
        </div>


      </div>
    </header>
  );
};

export default Header;
