Hola que tal, te presento mi proyecto para coder house:

Para iniciar el servidor en diferentes puertos se necesita el siguiente comando en la consola:

pm2 start src/server.js --name servidor1  --watch -- --PORT 8081

pm2 start src/server.js --name servidor2  --watch -i 2 -- --PORT 8082

pm2 start src/server.js --name servidor3  --watch -i 2 -- --PORT 8083

pm2 start src/server.js --name servidor4  --watch -- --PORT 8084


Se ocupa la libreria pm2 para iniciar diferentes servidores en diferentes puertos, y en el src/server,js se usa yargvs para obtener el puerto, se pueden modifiocar los puertos al antojo.

Para la configuración de la base de datos por defecto, viene mi atlas de mongo, pero no podras subir tus cosas por la ip asi que tendras que poner la tulla en el .env en la parte uqe dice URI.

Hay 4 bases de datos: carrito, comnetarios, productos, usuario, y cada una ase puede aceder dsde sus endpints que estan en el index de routes, es un solo archivo secionado.

Comentarios esta ehca con socket asi que algunas funcionlidades se encuentran en un archivo separado llamado script.js (RUTA: src/public/assets/js/script.js)

Tambien hay un archivo de texto para inicar con nginx pero tendras que cambiar el root.