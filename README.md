Para iniciar el servidor en diferentes puertos se necesita el siguiente comando en la consola:
pm2 start index.js --name servidor2  --watch -i max -- --PORT 8081
pm2 start index.js --name servidor2  --watch -i max -- --PORT 8082
pm2 start index.js --name servidor2  --watch -i max -- --PORT 8083
pm2 start index.js --name servidor2  --watch -i max -- --PORT 8084

