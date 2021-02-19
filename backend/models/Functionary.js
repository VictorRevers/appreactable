const Sequelize = require('sequelize');
const connection = require('../database/db');

const Functionary = connection.define('functionaries',{
    name:{
        type:Sequelize.STRING, 
        allowNull: false
    },
    register:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    cost:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Functionary.sync({force: false}).then(()=>{
});

module.exports = Functionary;