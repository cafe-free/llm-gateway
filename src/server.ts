import { buildApp } from './app.js';
import { config } from './config/config.js';

const server = buildApp();

const start = async () => {
    try {
        await server.listen({ port: config.server.port, host: config.server.host });
        console.log(`Server is running at http://localhost:`, config.server.port);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();