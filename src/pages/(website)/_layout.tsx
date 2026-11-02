import type { LayoutProps } from "heliumts/client";
import { Link, useRouter } from "heliumts/client";

import HeliumLogo from "../../components/Logo";

export default function RootLayout({ children }: LayoutProps) {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <header className="border-b border-gray-300 bg-white">
                <div className="max-w-4xl mx-auto px-4 py-2 flex items-center gap-8 flex-col md:flex-row">
                    <HeliumLogo />
                    <nav className="space-x-4 font-medium">
                        <Link href="/" className={router.path === "/" ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"}>
                            Home
                        </Link>
                        <Link href="/about/us" className={router.path.startsWith("/about/us") ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"}>
                            About
                        </Link>
                        <Link href="/contact" className={router.path === "/contact" ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"}>
                            Contact
                        </Link>
                        <Link href="/server-rendered" className={router.path === "/server-rendered" ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"}>
                            SSR example
                        </Link>
                        <Link href="/streaming" className={router.path === "/streaming" ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"}>
                            Streaming
                        </Link>
                        <Link href="/login" className={router.path === "/login" ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"}>
                            Login
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="max-w-4xl mx-auto p-4">{children}</main>
        </div>
    );
}
