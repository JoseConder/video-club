**Proyecto**

Este proyecto es un ejercicio para el uso de Express en javascript, asi como para el uso
ODM para el manejo de bases de datos NoSQL

**Getting Started**

Para ejecutar este proyecto es necesario ejecutar el comando en consola:

        npm start
o

        npm run dev

Se hara uso del puerto 3000.

Este poyecto cuenta con acceso a dockerizacion, se agrega el archivo dockerfile para este fin, a su vez se agrega un link al contenedor online a traves de Back4App en el siguiente link:

        https://videoclub-ivs6bspt.b4a.run/

Para el uso de la rama ODM es necesario usar una base de datos Documentacional NoSQL, este proyecto se manejo con MongoDB en un contenedor, pero se puede usar cualquiera del tipo Documentacional, solo se debe de modifcar el archivo db.js con los datos correspondientes para manejar la conexion a la base de datos a usar.

Este proyecto se basa en el siguiente Diagrama de clases para crear los diferentes controladores y modelos:

![Diagrama de Clases](resources/Diagrama de clases.png)
    
**Prerequisites**

Contar con:
    NodeJS
    npm
    Docker

**Author**

Alumno:

    Jose Eduardo Conde Hernandez 299506

Docente:

    Luis Antonio Ramirez Martinez
**License**

Este proyecto no cuenta con licencia
