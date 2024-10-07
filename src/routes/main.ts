import { RouteOptions } from 'fastify';

export default {
    method: 'GET',
    url: '/',
    handler: (request, reply) => {
        return reply.send('Hello World!');
    },
} as RouteOptions;