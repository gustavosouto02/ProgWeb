const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    res.end('Hello, World! - NodeJS com atualização');
});

const port = 3000;

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});