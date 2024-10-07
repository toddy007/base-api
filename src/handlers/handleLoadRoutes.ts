import { FastifyInstance, RouteOptions } from 'fastify';
import globSync from 'tiny-glob';

export const handleLoadRoutes = async (webserver: FastifyInstance) => {
    const routesPath = await globSync('./src/routes/*.ts');

    for (const routePath of routesPath) {
        const { default: route }: { default: RouteOptions } = await import('../../' + routePath);
        console.log('[ROUTE] Route "' + (route.url ?? route.path) + '" loaded');

        webserver.route(route);
    };
};