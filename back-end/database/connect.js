const { Sequelize, DataTypes } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('users', 'root', 'Willian1', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

async function testdb(){
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados feita com sucesso');
    } catch (error) {
        console.error('Problemas com o banco de dados chefe!', error);
    }
}
testdb();

module.exports = {sequelize, DataTypes};