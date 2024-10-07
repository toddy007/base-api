import { RouteOptions } from 'fastify';

export default {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        return reply.send('Hello World!');
    },
} as RouteOptions;