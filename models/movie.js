const { Sequelize } = require("sequelize");

module.exports = (Sequelize, type) => {
    const Movie = Sequelize.define('movies', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: type.STRING
    });
    return Movie;
};