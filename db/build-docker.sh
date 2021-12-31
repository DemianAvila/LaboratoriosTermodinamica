#/usr/bin/zsh
################
#CONSTRUYE EL DOCKER PARA LA DB 
#LO HACE IMPORTANDO LAS VARIABLES DEL ARCHIVO DE ENTORNO
################
#IMPORTA EL ARCHIVO DE VARIABLES DE ENTORNO
source .env
################
docker build -t db_laboratorio_termo . \
-e MARIADB_VERSION=$MARIADB_VERSION 

docker run -p 3307:3306 \
--name prueba \
-e MARIADB_VERSION=$MARIADB_VERSION \
-e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD \
db_laboratorio_termo