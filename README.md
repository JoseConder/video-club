**Proyecto**

Este proyecto es un ejercicio para el uso de Express en javascript, asi como para el uso
ORM para el manejo de bases de datos

**Getting Started**

**Las caracteristicas que usan el ORM para el manejo de la base de datos se encuentran en la rama "ORM"**

Para ejecutar este proyecto es necesario ejecutar el comando en consola:

        npm start

Se hara uso del puerto 3000.

Este poyecto cuenta con acceso a dockerizacion, se agrega el archivo dockerfile para este fin, a su vez se agrega un link al contenedor online a traves de Back4App en el siguiente link:

        https://videoclub-ivs6bspt.b4a.run/

Para el uso de la rama ORM es necesario usar una base de datos relacional, este proyecto se manejo con Mysql 5.7 en un contenedor, pero se puede usar cualquiera del tipo relacional, solo se debe de modifcar el archivo db.js con los datos correspondientes para manejar la conexion a la base de datos a usar.

Este proyecto se basa en el siguiente Diagrama de clases para crear los diferentes controladores y modelos:

![Diagrama de Clases](resources/Modelo E-R.png)
    
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
