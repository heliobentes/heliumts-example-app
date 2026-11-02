import type { LayoutProps } from "heliumts/client";
import { Link, useFetch, useRouter } from "heliumts/client";
import { getProfile } from "heliumts/server";
import { useEffect } from "react";

import HeliumLogo from "../../components/Logo";
import { signOut, useSession } from "../../libs/better-auth/auth-client";

export default function RootLayout({ children }: LayoutProps) {
    const router = useRouter();

    const {
        data: session,
        isPending, //loading state
        refetch,
    } = useSession();

    const { data: profile } = useFetch(getProfile, null, { enabled: Boolean(session) });

    useEffect(() => {
        const unsubscribeNavigation = router.on("navigation", (newPath) => {
            console.log("Navigated to:", newPath);
        });
        const unsubscribeBeforeNavigation = router.on("before-navigation", (newPath) => {
            console.log("About to navigate to:", newPath);
        });

        return () => {
            unsubscribeNavigation();
            unsubscribeBeforeNavigation();
        };
    }, [router]);

    const handleLogout = async () => {
        await signOut();
        await refetch();
    };

    useEffect(() => {
        if (!session && !isPending && router.status !== 404) {
            router.push("/login");
        }
    }, [router, session, isPending]);

    if (!session) {
        return null; // or a loading indicator
    }

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <header className="border-b border-gray-300 bg-white">
                <div className="max-w-4xl mx-auto px-4 py-2 flex items-center gap-8 flex-col md:flex-row">
                    <HeliumLogo />
                    <nav className="space-x-4 font-medium">
                        <Link href="/dashboard" className={router.path === "/dashboard" ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"}>
                            Dashboard
                        </Link>
                        <Link href="/tasks" className={router.path.startsWith("/tasks") ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"}>
                            Tasks
                        </Link>
                        <Link href="/settings/profile" className={router.path === "/settings/profile" ? "text-teal-600 font-semibold" : "text-gray-700 hover:text-teal-600"}>
                            Profile
                        </Link>
                        <Link href="/streaming" className="text-gray-700 hover:text-teal-600">
                            Streaming
                        </Link>
                    </nav>
                    {session?.user && (
                        <div className="ml-auto">
                            Hi, <span className="font-semibold">{profile?.name || "Guest"}!</span>
                            <button onClick={handleLogout} className="ml-2 button secondary">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </header>
            <main className="max-w-4xl mx-auto p-4">{children}</main>
        </div>
    );
}
