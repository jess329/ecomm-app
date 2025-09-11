"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/books", label: "Books" },
    { href: "/about", label: "About" },
    { href: "/login", label: "Login" },
    { href: "/signup", label: "Sign Up" },
    { href: "/cart", label: "Cart" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed w-full h-16 p-4 bg-gray-800 text-white flex items-center justify-between">
            {/* Linke Seite: Der Shop-Name */}
            <div className="p-2 flex items-center">
                <Link href="/" className="text-2xl font-bold tracking-wide hover:text-gray-400 transition">
                BookShop 📚
                </Link>
            </div>

            {/* Rechte Seite: Navigationslinks */}
            <div className="p-2 flex items-center space-x-6">
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className={`hover:text-gray-400 transition ${
                        pathname === link.href ? 'underline font-bold text-blue-400' : ''
                        }`}>
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );

};