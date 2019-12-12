"use strict";

const server = require("./server");

const startServer = async () => {
    try {
        const config = {
            host: "localhost",
            port: 8080
        };
        const app = await server(config);

        await app.start();
        console.log(`server runnion at http://${config.host}:${config.port}...`)
    } catch(err) {
        console.log("startup error: ", err);
    }
};

startServer();