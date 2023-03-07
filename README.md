Para iniciar el servidor en diferentes puertos se necesita el siguiente comando en la consola:
pm2 start src/server.js --name servidor1  --watch -- --PORT 8081
pm2 start src/server.js --name servidor2  --watch -i 2 -- --PORT 8082
pm2 start src/server.js --name servidor3  --watch -i 2 -- --PORT 8083
pm2 start src/server.js --name servidor4  --watch -- --PORT 8084
