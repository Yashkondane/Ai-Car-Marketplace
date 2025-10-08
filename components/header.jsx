import { Button } from "./ui/button";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from "@clerk/nextjs";
import {CarFront, Heart} from "lucide-react";

const Header = async ({ isAdminPage = false }) => {
    const isAdmin = false;
    return (
        <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
            <nav className="mx-auto px-4 py-4 flex items-center justify-between">
                <div>
                    <Link href={isAdminPage ? "/admin" : "/"}>
                        <Image
                            src="/logo.png"
                            alt="Vehiql Logo"
                            width={200}
                            height={60}
                            className="h-12 w-auto object-contain"
                        />
                        {isAdminPage && (
                            <span className="text-xs font-extralight">admin</span>
                        )}
                    </Link>
                </div>

                <div>
                    <SignedIn>
                        <div className="flex items-center gap-3">
                            <Link href="/saved-cars">
                                <Button className="flex items-center gap-2">
                                    <Heart size={18} />
                                    <span className="hidden md:inline">Saved Cars</span>
                                </Button>
                            </Link>
                            <Link href="/my-reservations">
                                <Button variant="outline" className="flex items-center gap-2">
                                    <CarFront size={18} />
                                    <span className="hidden md:inline">My Reservations</span>
                                </Button>
                            </Link>
                        </div>
                    </SignedIn>
                </div>
            </nav>
        </header>
    );
};

export default Header;
