import type { GetServerSideProps } from "heliumts/server";

export const getServerSideProps: GetServerSideProps = (req) => ({
    greeting: (req.query.greeting || "Hello from the server").slice(0, 120),
    renderedAt: new Date().toISOString(),
});
