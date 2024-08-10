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

---

### Preparando el entorno para desplegar el proyecto

- Verificar que se tenga instalado
    - Docker versión 25 
    - Make 4

- Copiar y llenar los valores del archivo env-example 
    - Las variables con terminación "dev" son para la construcción de un entorno de desarrollo
    - Las variables con terminación "prod" son para la construcción del proyecto en ambiente productivo monolítico (un solo servidor)
    - Las variables que inician con "gcp" y las que terminan con "img" estan destinadas a la construccion y subida de imagenes en entorno serverless con el servicio "Cloud Run" de GCP 

- Para abrir el entorno de desarrollo, ejecutar: 
```
make build-dev 
```
- Para reiniciar el entorno (borrado de datos y reinicio de contenedors) 
```
make data-restart
```

