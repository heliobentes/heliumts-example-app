"use ssr";

import { Link } from "heliumts/client";

export default function ServerRenderedPage({ greeting = "Hello from the server", renderedAt = "" }: { greeting?: string; renderedAt?: string }) {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold">Server-rendered example</h1>
            <p>{greeting}</p>
            <p className="text-sm text-gray-600">Rendered at: {renderedAt || "Loading..."}</p>
            <p>These props come from the adjacent server-only file on both direct requests and client navigation.</p>
            <Link href="/server-rendered?greeting=Hello%20from%20a%20query" className="text-teal-700 underline">
                Try a different greeting
            </Link>
        </div>
    );
}
