# Desarrollo de herramientas computacionales para el laboratorio de termodinámica

## PE109621

## Josue Demian Avila Romero

---

El presente desarrollo, consta de una app responsiva multiplataforma que despliega un ambiente virtual para realizar las actividades del laboratio de termodinámica de la Facultad de Ingeniería de la Universidad Nacional Autónoma de México.

En el es posible leer el marco teórico de una práctica, responder cuestionarios relativos a los conocimientos vertidos en la misma, asi como interactuar los instrumentos como sio se estiviera en el laboratorio mediante una simulación en 3D.

Algunas de las caracteristicas que incluye este artefacto de software son:

- Una API para gestionar la interacción con los datos del servidor

- Una app frontend de navegador para recibir todas las entradas del usuario y regresarle datos pertinentes de salida

- Sistema de autenticación gestionado por Google


## env file vars

API_URL_PROD= Url donde se aloja la api para producción

API_URL_DEV= Url donde se aloja la api para desarrollo

MONGO_INITDB_ROOT_USERNAME= usuario de mongo para inicio de la base de datos

MONGO_INITDB_ROOT_PASSWORD= contraseña de mongo para inicio de la base de datos

MONGO_IP_DEV= ip de la base de datos de mongo en desarrollo

MONGO_PORT_DEV= puerto de mongo en desarrollo

MONGO_USERNAME_DEV= usuario de mongo en desarrollo, genralmente es igual a ${MONGO_INITDB_ROOT_USERNAME}

MONGO_PASS_DEV=contraseña de mongo en desarrollo, genralmente es igual a ${MONGO_INITDB_ROOT_PASSWORD}

MONGO_AUTH_DB_DEV=nombre de la base de datos de mongo para la autenticación en desarrollo

MONGO_DATABASE_DEV=nombre de la base de datos de mongo para laboratorio en desarrollo, generalmente la llamo "laboratorio_info"

MONGO_IP_PROD=ip de la base de datos de mongo en produccion

MONGO_PORT_PROD= puerto de mongo en producción

MONGO_USERNAME_PROD=usuario de mongo en producción, genralmente es igual a ${MONGO_INITDB_ROOT_USERNAME}

MONGO_PASS_PROD=usuario de mongo en desarrollo, genralmente es igual a ${MONGO_INITDB_ROOT_USERNAME}

MONGO_AUTH_DB_PROD=nombre de la base de datos de mongo para la autenticación en producción

MONGO_DATABASE_PROD=nombre de la base de datos de mongo para laboratorio en producción, generalmente la llamo "laboratorio_info"

GCP_REGION=Region de la nube de google cloud donde despliego la info

GCP_PROJECT=Id del proyecto de google cloud

GCP_ARTIFACT_REG= Nombre del artifact registry de google cloud

BACKEND_IMG=Nombre de la imagen de backend con la que se subirá a gcp, generalmente la llamo backend_dev

FRONTEND_IMG=Nombre de la imagen de frontend con la que se subirá a gcp, generalmente la llamo frontend_dev

