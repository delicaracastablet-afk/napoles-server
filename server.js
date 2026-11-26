import { createWsServerSimple } from 'tinybase/synchronizers/synchronizer-ws-server-simple';
import { WebSocketServer } from 'ws';

const port = process.env.PORT || 8080;
const server = new WebSocketServer({ port });

// Usamos SOLO el servidor Simple
createWsServerSimple(server, { path: '/mi-profit-sync' });

console.log('✅ Servidor de Sincronizacion Simple corriendo en el puerto ' + port);