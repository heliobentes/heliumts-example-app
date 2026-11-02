import { defineWorker } from "heliumts/server";

export const helloWorldWorker = defineWorker(() => {
    const timer = setInterval(() => {
        console.log("Hello, World! from Helium Worker");
    }, 10000);
    // Returning cleanup keeps this worker alive until the server stops.
    return () => clearInterval(timer);
});
