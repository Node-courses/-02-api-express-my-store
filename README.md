# Crear una API REST con NodeJS

## Que es una API (Interfaz de programación de Aplicaciones)

Es un conjunto de reglas y protocolos que permiten que diferentes aplicaciones se comuniquen entre si. Las APIs definen las interacciones que los desarrolladores pueden tener con un sistema, servicio o aplicación, proporcionando una forma estandarizada de solicitar y recibir datos.

### Tipos de APIs

- **APIs webs**: Estas son las mas comunes y permiten la comunicación entre aplicaciones a través de la web. Utilizan protocolos como HTTP/HTTPS y pueden devolver datos en formato JSON o XML

- **APIs de Sistema**: Permiten que una aplicación interactúe con el sistema operativo, como acceder a archivos o realizar operaciones de red.

- **APIs de Biblioteca**: Estas APIs permiten que los desarrolladores utilicen funciones específicas de una biblioteca o framework en su código.

- **APIs de Hardware**: Permiten la interacción con componentes de hardware, como impresoras o dispositivos de almacenamiento.

## Componentes de una API Web

**Endpoints**: Son las URL específicas a las que se puede acceder para realizar operaciones. Cada endpoint representa un recurso o una funcionalidad específica.

**Métodos HTTP**: Las APIs web suelen utilizar métodos HTTP para realizar operaciones. Los métodos más comunes son:

- GET: Recuperar datos de un servidor.
- POST: Enviar datos al servidor para crear un nuevo recurso.
- PUT: Actualizar un recurso existente en el servidor.
- DELETE: Eliminar un recurso del servidor.

**Códigos de Estado HTTP**: Indican el resultado de una solicitud. Algunos códigos comunes son:

- 200 OK: La solicitud se ha procesado correctamente.
- 404 Not Found: El recurso solicitado no se ha encontrado.
- 500 Internal Server Error: Ha ocurrido un error en el servidor.

**Autenticación y Autorización**: Muchas APIs requieren que los usuarios se autentiquen y tengan permisos para acceder a ciertos recursos. Esto se puede hacer mediante tokens, claves API, OAuth, etc.
