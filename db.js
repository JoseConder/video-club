const Sequelize = require('sequelize');
const directorModel = require('./models/director');
const genreModel = require('./models/genre');
const movieModel = require('./models/movie');
const actorModel = require('./models/actor');
const movieActorModel = require('./models/movieActor');


/*
    Nombre de la base de daos
    Usuario
    Contrasena
    Objeto de configuacion del ORM
    
*/

const sequelize = new sequelize('video-club', 'root', 'holamundo',{
    host: '127.0.0.1',
    dialect: 'mysql'
});

const Director = new directorModel(sequelize, Sequelize);
const Genre = new genreModel(sequelize, Sequelize);
const Movie = new movieModel(sequelize, Sequelize);
const Actor = new actorModel(sequelize, Sequelize);
const MovieActor = new movieActorModel(sequelize, Sequelize);

// un genero tiene muchas peliculas y una peli tiene un genero

Genre.hasMany(Movie, {as: 'movies'});
Movie.belongsTo(Genre, {as: 'genre'});
// un director puede hacer muchas peliculas y una pelicula tiene un director
Director.hasMAny(Movie, {as: 'movies'});
Movie.belongsTo(Director, {as: 'director'});

// un actor aprticipa en muchas peliculas
MovieActor.belongsTo(Movie, {foreingKey: 'movieId'});
MovieActor.belongsTo(Actor, {foreingKey: 'actorId'});

Movie.belongsToMany(Actor, {foreingKey: 'actorId', as: 'actors', trough: 'movies_actors'});
Actor.belongsToMany(Movie, {foreingKey: 'movieId', as: 'movies', trough: 'movies_actors'});

sequelize.sync({
    force: true,
}).then(()=>{
    console.log('Base de datos sincronizada')
});

module.exports = {Director, Genre, Movie};