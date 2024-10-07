import Fastify from 'fastify';
import { handleStart } from './handlers/handleStart';

export const webserver = Fastify();

handleStart(webserver);