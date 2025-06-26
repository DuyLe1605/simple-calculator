import { ThemeToggle } from "@/components/theme-toggle";

import Link from "next/link";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen flex-col relative ">
            <nav className="sticky top-0 z-30 bg-background">
                <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
                    <Link href="/" className="text-xl font-bold cursor-pointer">
                        Simple Calculator
                    </Link>

                    <ThemeToggle />
                </div>
            </nav>
            <main className="z-10">{children}</main>
        </div>
    );
}
