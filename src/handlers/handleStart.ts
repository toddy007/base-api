import Fastify from 'fastify';
import { handleLoadRoutes } from './handleLoadRoutes';

export const webserver = Fastify();

const port = 8080;

export const handleStart = async () => {
    await handleLoadRoutes(webserver);
    
    webserver.listen(
        { port }, 
        () => console.log(`[RUN] Webserver running on port ${port}, access https://localhost:${port}`)
    );
}