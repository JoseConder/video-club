const { Sequelize } = require("sequelize");

module.exports = (Sequelize, type) => {
    const Genre = Sequelize.define('genres', {
        id: {type: type.INTEGER, primaryKey: true, autoIncrement: true},
        description: type.STRING,
        status: type.BOOLEAN
    });
    return Genre;
};

