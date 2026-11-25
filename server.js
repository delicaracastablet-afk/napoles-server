import { createWsServer } from 'tinybase/synchronizers/synchronizer-ws-server';
import { WebSocketServer } from 'ws';

const port = process.env.PORT || 8080;
const server = new WebSocketServer({ port });

createWsServer(server, { path: '/mi-profit-sync' });

console.log(`✅ Servidor de Sincronización corriendo en el puerto ${port}`);