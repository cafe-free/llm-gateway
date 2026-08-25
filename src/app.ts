import Fastify, { FastifyInstance } from 'fastify';
import healthRoute from './routes/health.js';

// We wrap the app creation in a function.
// This is a Fastify best practice because it makes testing much easier!
export const buildApp = (): FastifyInstance => {
    const app = Fastify({
        logger: true // Enable logging
    });

    // Register the health route
    // You can optionally add a prefix like { prefix: '/api/v1' }
    app.register(healthRoute, {
        prefix: '/api/v1'
    });

    return app;
};