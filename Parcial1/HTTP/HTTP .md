## **Métodos de las peticiones HTTP.**
---
***Andrea Joana Martínez Limón 19100212.***

Los HTTP post request o métodos HTTP de petición son solicitudes un cliente web realiza y que conllevan una acción en el servidor web a las que se dirigen, como puede ser el acceso a una página concreta o el envío de los datos de un formulario web.
Estas solicitudes pueden ir acompañados de distintos parámetros con la intención de que el servidor web comprenda mejor qué es lo que se le solicita. Estos parámetros se pueden apreciar en las direcciones web, pues se adjuntan a la misma.
Los métodos HTTP se pueden clasificar de distintas formas:



+ **Verbos HTTP:** Se denominan así porque realizan una acción y su nombre viene definido por un verbo. La gran mayoría de métodos HTTP de petición se encuentran encuadrados dentro de esta categoría.
+ **Nombres HTTP:** Los métodos están definidos por un nombre o sustantivos.
+ **Peticiones HTTP Safe:** Se trata de métodos seguros, ya que no alteran o varían al servidor. Este tipo de métodos realizan operaciones de solo lectura
+ **Peticiones HTTP Idempotent:** Son los métodos HTTP que se pueden realizar una o varias veces, pero el resultado obtenido siempre es el mismo.

En esta investigación veremos los métodos más importantes o comunes de HTTP:
+ **GET:** Se emplea para leer una abstracción de un resource. En caso de obtener una respuesta positiva devuelve la representación en un formato concreto: HTML, XML, JSON o imágenes, JavaScript, CSS, etc.
+ **POST:** Se utiliza para enviar información al servidor. A diferencia del GET envía información de los formularios en el cuerpo del mensaje HTTP. 
+ **PUT:** Normalmente se utiliza para actualizar contenidos, aunque también es capaz de crearlos. Se clasifica como una petición idempotente ya que si se crea o edita un resource con PUT y se hace el mismo request otra vez, el resource todavía está ahí y mantiene el mismo estado que en la primera llamada. En el caso de que se realiza el menor cambio en el resource con una llamada PUT la llamada ya no es idempotente.
+ **DELETE:** Elimina un resource identificado en la URI y al igual que PUT y GET, también es idempotente.
+ **HEAD:** Es parecido a GET, pero en este caso el servidor no devuelve el contenido en el HTTP response. Cuando se envía un HEAD request, significa que sólo se está interesado en el código de respuesta y los headers HTTP, no en el propio documento. 
+ **OPTIONS:** Con este método se solicita al servidor que informe sobre los distintos métodos que un archivo soporta. Con esta acción el servidor responderá con una serie de datos, y bajo el campo “allow” incluirá todos los métodos HTTP que soporta ese archivo.
+ **TRACE:** Se trata de un método muy interesante, ya que permite obtener la ruta que sigue una HTTP request durante todo su camino (desde que se realiza, hasta que llega al servidor y vuelve de regreso al cliente).

## **Tipos de código de estado HTTP.**

Los códigos de estado HTTP describen de forma abreviada la respuesta HTTP siendo el primer digito el que especificar el tipo de respuesta que se obtuvo. La Internet Assigned Numbers Authority (IANA) mantiene el registro oficial de códigos de estado HTTP y se encuentran especificados por el RFC 2616.

+ **1XX Respuestas informativas:** Este tipo de código de estado indica que la solicitud iniciada por el navegador continúa.
+ **2XX Peticiones correctas:** Indica que la acción solicitada por el cliente ha sido recibida, entendida, aceptada y procesada correctamente.
+ **3XX Redirecciones:** Notifica cuando un nuevo recurso ha sido sustituido por el recurso solicitado.
+ **4XX Errores del cliente:** Indica que hubo un problema con la solicitud.
+ **5XX Errores de servidor:** Indican que la solicitud fue aceptada, pero que un error en el servidor impidió que se cumpliera.


## **Lista de códigos más comunes de estado HTTP.**

| Primera columna | Segunda columna | Tercera columna |
| -- | -- | -- |
| **100** | Continuar. | El servidor en cuestión ha recibido las cabeceras de solicitud de tu navegador, y ahora está listo para que el cuerpo de la solicitud sea enviado también. |
| 101 | Cambiando protocolos. | El navegador ha pedido al servidor que cambie los protocolos, y el servidor ha cumplido. |
| 103 | Primeros avisos. | Devuelve algunos encabezados de respuesta antes de que el resto de la respuesta del servidor esté lista. |
| **200** | Todo está bien. | Indica cuando una página web o recurso actúa exactamente como se espera. |
| 201 | Creado. | El servidor ha cumplido con la petición del navegador y como resultado, ha creado un nuevo recurso. |
| 202 | Aceptado. | El servidor ha aceptado la solicitud de tu navegador, pero aún la está procesando. |
| 203 | Información no autorizada. | Este código de estado puede aparecer cuando se utiliza un apoderado. Significa que el servidor proxy recibió un código de estado de 200 del servidor de origen, pero ha modificado la respuesta antes de pasarla a su navegador. |
| 204 | Sin contenido. | El servidor ha procesado con éxito la solicitud, pero no va a devolver ningún contenido. |
| 205 | Restablecer el contenido. | Significa que el servidor ha procesado la solicitud, pero no va a devolver ningún contenido. Sin embargo, también requiere que el navegador restablezca la vista del documento. |
| **300** | Opciones Múltiples. | Significa que el navegador ahora debe elegir entre múltiples opciones de visualización.  |
| 301 | El recurso solicitado ha sido trasladado permanentemente. | Este código se entrega cuando una página web o un recurso ha sido reemplazado permanentemente por un recurso diferente. |
| 302 | El recurso solicitado se ha movido, pero fue encontrado. | Este código se utiliza para indicar que el recurso solicitado se encontró, pero no en el lugar donde se esperaba. |
| 303 | Ver otros. | Le indica al navegador que encontró el recurso que solicitó vía POST, PUT o DELETE. Sin embargo, para recuperarlo usando GET, necesita hacer la solicitud apropiada a un URL diferente al que utilizó. |
| 304 | El recurso solicitado no ha sido modificado desde la última vez que accedió a él. | Indica que los recursos almacenados en la caché del navegador no han cambiado.  |
| 307 | Redireccionamiento temporal. | Actualmente reemplaza al código 302 y la diferencia más notoria es que no permite que el método HTTP cambie. |
| 308 | Redireccionamiento permanente. | Es el sucesor del código 301. No permite que el método HTTP cambie e indica que el recurso solicitado está ahora localizado permanentemente en una nueva URL.|
| **400** | Mala petición. | El servidor no puede devolver una respuesta debido a un error del cliente. |
| 401 | No autorizado. | Esto es devuelto por el servidor cuando el recurso de destino carece de credenciales de autenticación válidas. |
| 402 | Pago requerido. | Es utilizado por diversas plataformas para indicar que una solicitud no se puede cumplir, por lo general debido a la falta de un pago necesario. |
| 403 | El acceso a ese recurso está prohibido. | Se devuelve cuando un usuario intenta acceder a algo a que no tiene permiso para ver. |
| 404 | No se encontró el recurso solicitado. | Este código significa que el recurso solicitado no existe y el servidor no sabe si alguna vez existió. |
| 407 | Se requiere autenticación de proxy. | Se está utilizando un servidor proxy que requiere que el navegador se autentifique antes de continuar. |
| 408 | El servidor se agotó esperando el resto de la petición del navegador. | Se genera cuando un servidor se apaga mientras espera la solicitud completa del navegador |
| 409 | Conflicto. | El servidor no pudo procesar la solicitud del navegador porque hay un conflicto con el recurso correspondiente. |
| 410 | El recurso solicitado se ha ido y no volverá. | Similar a un código 404 excepto que un 410 indica que la condición es esperada y permanente. |
| 413 | Carga útil demasiado grande. | La solicitud es más grande de lo que el servidor está dispuesto o es capaz de procesar. |
| 414 | URL demasiado largo. | Esto suele ser el resultado de una solicitud GET que ha sido codificada como una cadena de consulta demasiado grande para que el servidor la procese. |
| 429 | Demasiadas peticiones. | Contenido |
| **500** | Hubo un error en el servidor y la solicitud no pudo ser completada. | Este es un código genérico que simplemente indica un error interno del servidor. Algo salió mal en el servidor y el recurso solicitado no fue entregado.  |
| 501 | No implementado. | Este error indica que el servidor no es compatible con la funcionalidad necesaria para cumplir con la solicitud. |
| 503 | El servidor no está disponible para manejar esta solicitud en este momento. | La solicitud no puede ser completada en este momento.  |
| 505 | Versión HTTP no soportada. | El servidor no soporta la versión HTTP que el cliente usó para hacer la solicitud. |
| 508 | Se ha alcanzado el límite de recursos. | Se han alcanzado los límites de recursos establecidos por el alojamiento web. |
| 509 | Límite de Ancho de Banda Excedido. | Significa que el sitio web está utilizando más ancho de banda del que permite el proveedor de hosting. |
| 511 | Se requiere autenticación de la red. | La red que se está tratando de usar requiere alguna forma de autenticación antes de enviar su solicitud al servidor. |