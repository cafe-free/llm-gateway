import { FastifyInstance, FastifyPluginAsync } from 'fastify';

const healthRoute: FastifyPluginAsync = async (server: FastifyInstance) => {
    server.get('/health', async () => {
        return {
            status: 'ok',
            timestamp: new Date().toISOString(),
            uptime: process.uptime()
        };
    });
};

export default healthRoute;