import { createWsServer } from 'tinybase/synchronizers/synchronizer-ws-server';
import { WebSocketServer } from 'ws';

const server = new WebSocketServer({ port: 8080 });
createWsServer(server, { path: '/mi-profit-sync' });

console.log('✅ Servidor de Sincronización corriendo en ws://localhost:8080');