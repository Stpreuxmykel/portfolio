// "use client";

// import { Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import {CiMenuFries} from "react-icons/ci"

// const links = [
//     {
//         name: "home",
//         path: "/"
//     },
//     {
//         name: "services",
//         path: "/services"
//     },

//     {
//         name: "resume",
//         path: "/resume"
//     },
//     {
//         name: "work",
//         path: "/work"
//     },
//     {
//         name: "contact",
//         path: "/contact"
//     },
// ]

// export const MobileNav = () => {

//     const pathname = usePathname();

//   return (
//     <Sheet>
//         <SheetTrigger className="flex justify-center items-center">
//             <CiMenuFries className="text-[32px] text-accent" />
//         </SheetTrigger>
//         <SheetContent className="flex flex-col">
//             <div className="mt-32 mb-40 text-center text-2xl">
//                 <Link href="/">
//                     <h1 className="text-4xl font-semibold">
//                         Mike <span className="text-accent">.</span>
//                     </h1>
//                 </Link>
//             </div>

//             <nav className="flex flex-col justify-center items-center gap-8">
//                {links.map((link, index) => {
//                     return (
//                         <Link href={link.path} key={index}
//                             className={` ${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
//                         >
//                             {link.name}
//                         </Link>
//                     )
//                })}
//             </nav>
//         </SheetContent>
//     </Sheet>
//   )
// }

// export default MobileNav;





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

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

export const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col overflow-y-auto max-h-[100vh]"> {/* Added scroll */}
                {/* <div className="mt-20 mb-10 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Mike <span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div> */}

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
                        {/* <UserButton
                            afterSignOutUrl="/"
                        />   */}
                    </SignedIn>
                    <SignedOut>
                        <SignInButton
                        mode= "modal"
                        >
                        <Button>
                            Login <IoMdLogIn/>
                        </Button>
                    </SignInButton>
                        {/* <Link href="/sign-in" className="text-accent text-xl">Login</Link> */}
                    </SignedOut>
                </ClerkLoaded>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;











// "use client";

// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { CiMenuFries } from "react-icons/ci";
// import {
//     SignedIn,
//     SignedOut,
//     UserButton,
//     ClerkLoaded,
//     ClerkLoading,
//     SignInButton
// } from '@clerk/nextjs';
// import { Loader } from "lucide-react";
// import { Button } from "./ui/button";
// import { IoMdLogIn } from "react-icons/io";
// import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog"; // Import Dialog components

// const links = [
//     { name: "home", path: "/" },
//     { name: "services", path: "/services" },
//     { name: "resume", path: "/resume" },
//     { name: "work", path: "/work" },
//     { name: "contact", path: "/contact" },
// ];

// export const MobileNav = () => {
//     const pathname = usePathname();

//     return (
//         <Sheet>
//             <SheetTrigger className="flex justify-center items-center">
//                 <CiMenuFries className="text-[32px] text-accent" />
//             </SheetTrigger>

//             <SheetContent
//                 className="flex flex-col overflow-y-auto max-h-[100vh]"
//                 aria-describedby="mobile-nav-description" // Add aria-describedby
//             >
//                 {/* DialogTitle and DialogDescription for accessibility */}
//                 <DialogTitle className="text-xl font-bold text-center"> Menu</DialogTitle>
//                 <DialogDescription id="mobile-nav-description">
//                     {/* This is the navigation menu where you can access different sections of the website. */}
//                 </DialogDescription>

//                 <div className="mt-20 mb-10 text-center text-2xl">
//                     <Link href="/">
//                         <h1 className="text-4xl font-semibold">
//                             Mike <span className="text-accent">.</span>
//                         </h1>
//                     </Link>
//                 </div>

//                 <nav className="flex flex-col justify-center items-center gap-8">
//                     {links.map((link, index) => (
//                         <Link
//                             href={link.path}
//                             key={index}
//                             className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""} text-xl capitalize hover:text-accent transition-all`}
//                         >
//                             {link.name}
//                         </Link>
//                     ))}
//                 </nav>

//                 <ClerkLoading>
//                     <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
//                 </ClerkLoading>

//                 <ClerkLoaded>
//                     <SignedIn>
//                         <div className="flex flex-col items-center mt-8">
//                             <UserButton 
//                                 afterSignOutUrl="/"
//                                 />   
//                             </div>
//                     </SignedIn>

//                     <SignedOut>
//                         <SignInButton mode="modal">
//                             <Button>
//                                 Login <IoMdLogIn />
//                             </Button>
//                         </SignInButton>
//                     </SignedOut>
//                 </ClerkLoaded>
//             </SheetContent>
//         </Sheet>
//     );
// }

// export default MobileNav;
