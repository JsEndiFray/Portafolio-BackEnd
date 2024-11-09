Backend del Proyecto (backPerson)

Este es el backend de un proyecto desarrollado con Node.js, Express y MongoDB (a través de MongoDB Atlas). El backend gestiona las solicitudes y realiza operaciones CRUD en una base de datos MongoDB en la nube. También está configurado para ser desplegado en Vercel, permitiendo que funcione sin interrupciones.

Tecnologías Usadas

	•	Node.js: Entorno de ejecución para JavaScript.
	•	Express: Framework web para Node.js.
	•	MongoDB Atlas: Base de datos NoSQL en la nube.
	•	Mongoose: Librería para modelar datos en MongoDB.
	•	Vercel: Plataforma para desplegar aplicaciones serverless.

Funcionalidades

	•	Conexión a una base de datos MongoDB Atlas.
	•	Operaciones CRUD en una colección de contactos.
	•	Manejo de errores y respuestas personalizadas.
	•	CORS configurado para permitir solicitudes desde cualquier origen.
	•	Configuración de variables de entorno para mantener la información sensible fuera del código fuente.

Configuración del Proyecto

Prerrequisitos

	•	Node.js (versión 14 o superior)
	•	NPM (Node Package Manager)
	•	Cuenta en MongoDB Atlas para configurar la base de datos
	•	Cuenta en Vercel para despliegue

Variables de Entorno

Este proyecto usa un archivo .env para gestionar las variables de entorno. Las siguientes variables son necesarias:
•	PORT: El puerto en el que se ejecuta el servidor localmente (opcional, valor por defecto: 5001).
•	DB_CONNECTION: La URI de conexión de MongoDB Atlas.

Autor

Este proyecto fue desarrollado por [Endi Fray].
Nota: Ira creciendo.
