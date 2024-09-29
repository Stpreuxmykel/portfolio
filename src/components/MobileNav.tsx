"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import {
    SignedIn,
    SignedOut,
    UserButton,
    ClerkLoaded,
    ClerkLoading,
    SignInButton
} from '@clerk/nextjs';
import { Loader } from "lucide-react" // Ensure you have a Loader component
import { Button } from "./ui/button";
import { IoMdLogIn } from "react-icons/io";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react"; 

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

export const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);  
    const pathname = usePathname();

    const handleLinkClick = () => {
        setIsOpen(false);  // Close the sheet when a link is clicked
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger onClick={() => setIsOpen(true)} className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="p-0">
                <div
                    className={`flex flex-col overflow-y-auto max-h-[100vh] transform transition-transform duration-500 ease-in-out ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <DialogTitle className="sr-only">Menu</DialogTitle> {/* Add DialogTitle for accessibility */}
                    <div className="mt-20 mb-10 text-center text-2xl">
                        <Link href="/">
                            <h1 className="text-4xl font-semibold">
                                Mike <span className="text-accent">.</span>
                            </h1>
                        </Link>
                    </div>

                    <nav className="flex flex-col justify-center items-center gap-8">
                        {links.map((link, index) => (
                            <Link
                                href={link.path}
                                key={index}
                                onClick={handleLinkClick} // Close the sheet on link click
                                className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""} text-xl capitalize hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <ClerkLoading>
                        <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                    </ClerkLoading>

                    <ClerkLoaded>
                        <SignedIn>
                            <div className="flex flex-col items-center mt-8">
                                <UserButton afterSignOutUrl="/" />
                            </div>
                        </SignedIn>
                        <SignedOut>
                            <SignInButton mode="modal">
                                <Button>
                                    Login <IoMdLogIn />
                                </Button>
                            </SignInButton>
                        </SignedOut>
                    </ClerkLoaded>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
